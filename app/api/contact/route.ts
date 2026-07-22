import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// nodemailer needs the Node.js runtime (not the Edge runtime).
export const runtime = "nodejs";

type ContactPayload = {
  formType?: string;
  fields?: Record<string, string>;
};

const escapeHtml = (v: string) =>
  v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(req: Request) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;

  // Credentials come from the environment only — never hardcoded.
  if (!SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      { ok: false, error: "Email is not configured. Set SMTP_USER and SMTP_PASS in .env.local." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const formType = (payload.formType || "Website form").toString().slice(0, 120);
  const fields = payload.fields && typeof payload.fields === "object" ? payload.fields : {};

  // Require at least one non-empty field so we don't send blank emails.
  const entries = Object.entries(fields)
    .map(([k, v]) => [k, (v ?? "").toString().trim()] as const)
    .filter(([, v]) => v.length > 0);

  if (entries.length === 0) {
    return NextResponse.json({ ok: false, error: "Please fill in the form." }, { status: 400 });
  }

  const replyTo = entries.find(([k]) => /email/i.test(k))?.[1];

  const textBody = [`New submission — ${formType}`, "", ...entries.map(([k, v]) => `${k}: ${v}`)].join("\n");
  const htmlBody = `
    <div style="font-family:Inter,Arial,sans-serif;color:#1a1a1a">
      <h2 style="margin:0 0 12px;color:#4169E1">New submission — ${escapeHtml(formType)}</h2>
      <table style="border-collapse:collapse">
        ${entries
          .map(
            ([k, v]) =>
              `<tr>
                 <td style="padding:6px 14px 6px 0;vertical-align:top;font-weight:600;white-space:nowrap">${escapeHtml(k)}</td>
                 <td style="padding:6px 0;vertical-align:top">${escapeHtml(v).replace(/\n/g, "<br/>")}</td>
               </tr>`,
          )
          .join("")}
      </table>
    </div>`;

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST || "smtp.gmail.com",
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465, // 465 = SSL, 587 = STARTTLS
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"SIDPIN Website" <${SMTP_USER}>`, // Gmail requires the authenticated user as the sender
      to: MAIL_TO || SMTP_USER,
      replyTo: replyTo || undefined,
      subject: `[SIDPIN] ${formType}`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/contact] send failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send your message. Please try again later." },
      { status: 502 },
    );
  }
}
