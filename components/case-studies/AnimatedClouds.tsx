"use client";

/**
 * AnimatedClouds - Floating cloud elements for blue gradient backgrounds
 * Adds visual interest and depth to the case studies page
 */

export default function AnimatedClouds() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Large clouds */}
      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>
      <div className="cloud cloud-4"></div>

      {/* Medium clouds */}
      <div className="cloud-medium cloud-medium-1"></div>
      <div className="cloud-medium cloud-medium-2"></div>
      <div className="cloud-medium cloud-medium-3"></div>

      {/* Small clouds */}
      <div className="cloud-small cloud-small-1"></div>
      <div className="cloud-small cloud-small-2"></div>
      <div className="cloud-small cloud-small-3"></div>
      <div className="cloud-small cloud-small-4"></div>

      <style jsx>{`
        .cloud {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          filter: blur(40px);
          animation: float 20s ease-in-out infinite;
        }

        .cloud-medium {
          position: absolute;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          filter: blur(30px);
          animation: float 25s ease-in-out infinite;
        }

        .cloud-small {
          position: absolute;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 50%;
          filter: blur(20px);
          animation: float 30s ease-in-out infinite;
        }

        /* Large clouds positioning and timing */
        .cloud-1 {
          width: 400px;
          height: 200px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
          animation-duration: 22s;
        }

        .cloud-2 {
          width: 350px;
          height: 180px;
          top: 60%;
          right: 15%;
          animation-delay: -5s;
          animation-duration: 28s;
        }

        .cloud-3 {
          width: 380px;
          height: 190px;
          bottom: 20%;
          left: 20%;
          animation-delay: -10s;
          animation-duration: 24s;
        }

        .cloud-4 {
          width: 320px;
          height: 160px;
          top: 30%;
          right: 25%;
          animation-delay: -15s;
          animation-duration: 26s;
        }

        /* Medium clouds positioning */
        .cloud-medium-1 {
          width: 250px;
          height: 120px;
          top: 25%;
          right: 40%;
          animation-delay: -8s;
        }

        .cloud-medium-2 {
          width: 280px;
          height: 140px;
          bottom: 30%;
          left: 8%;
          animation-delay: -12s;
        }

        .cloud-medium-3 {
          width: 220px;
          height: 110px;
          top: 70%;
          right: 35%;
          animation-delay: -18s;
        }

        /* Small clouds positioning */
        .cloud-small-1 {
          width: 150px;
          height: 80px;
          top: 15%;
          left: 30%;
          animation-delay: -3s;
        }

        .cloud-small-2 {
          width: 180px;
          height: 90px;
          bottom: 15%;
          right: 20%;
          animation-delay: -7s;
        }

        .cloud-small-3 {
          width: 130px;
          height: 70px;
          top: 80%;
          left: 45%;
          animation-delay: -11s;
        }

        .cloud-small-4 {
          width: 160px;
          height: 85px;
          top: 45%;
          right: 8%;
          animation-delay: -14s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translate(30px, -20px) scale(1.1);
            opacity: 0.8;
          }
          50% {
            transform: translate(-20px, 30px) scale(0.9);
            opacity: 0.5;
          }
          75% {
            transform: translate(20px, 20px) scale(1.05);
            opacity: 0.7;
          }
        }

        @media (max-width: 768px) {
          .cloud, .cloud-medium, .cloud-small {
            transform: scale(0.7);
          }

          .cloud-1, .cloud-2, .cloud-3, .cloud-4 {
            width: 250px;
            height: 125px;
          }

          .cloud-medium-1, .cloud-medium-2, .cloud-medium-3 {
            width: 180px;
            height: 90px;
          }

          .cloud-small-1, .cloud-small-2, .cloud-small-3, .cloud-small-4 {
            width: 120px;
            height: 60px;
          }
        }
      `}</style>
    </div>
  );
}