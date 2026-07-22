/**
 * Client helper — posts a form submission to the /api/contact route
 * (which sends the email server-side via nodemailer).
 */
export type SendFormResult = { ok: boolean; error?: string };

export async function sendForm(
  formType: string,
  fields: Record<string, string>,
): Promise<SendFormResult> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType, fields }),
    });
    const data = (await res.json().catch(() => ({}))) as SendFormResult;
    if (!res.ok || !data.ok) {
      return { ok: false, error: data.error || "Something went wrong. Please try again." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Please check your connection and try again." };
  }
}
