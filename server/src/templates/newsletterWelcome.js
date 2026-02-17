/**
 * Welcome email for new newsletter subscribers.
 */
export const newsletterWelcomeTemplate = ({ email }) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <title>Welcome to Nemvol Insights</title>
</head>
<body style="margin:0;padding:0;background-color:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.05);">
          
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#2563eb,#1d4ed8);padding:40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:800;letter-spacing:-0.5px;">NEMVOL</h1>
              <p style="margin:12px 0 0;color:#bfdbfe;font-size:14px;font-weight:600;">Industry Insights & Startup Tips</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 16px;color:#1e293b;font-size:22px;font-weight:800;">Welcome aboard! 🎉</h2>
              <p style="margin:0 0 20px;color:#475569;font-size:15px;line-height:1.7;">
                Thanks for subscribing to <strong>Nemvol Insights</strong>. You'll receive monthly updates with the latest trends, best practices, and exclusive content on MVP development, startup growth, and product strategy.
              </p>

              <p style="margin:0 0 24px;color:#475569;font-size:15px;line-height:1.7;">
                Here's what you can expect:
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding:12px 16px;background-color:#eff6ff;border-radius:12px;margin-bottom:8px;">
                    <p style="margin:0;color:#1e40af;font-size:14px;font-weight:700;">📊 MVP Strategy & Best Practices</p>
                  </td>
                </tr>
                <tr><td style="height:8px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#eff6ff;border-radius:12px;">
                    <p style="margin:0;color:#1e40af;font-size:14px;font-weight:700;">🚀 Founder Tips & Growth Frameworks</p>
                  </td>
                </tr>
                <tr><td style="height:8px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#eff6ff;border-radius:12px;">
                    <p style="margin:0;color:#1e40af;font-size:14px;font-weight:700;">🔧 Technical Deep-Dives & Case Studies</p>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://nemvol.com/blog" 
                       style="display:inline-block;background-color:#2563eb;color:#ffffff;padding:14px 32px;border-radius:12px;font-size:14px;font-weight:700;text-decoration:none;">
                      Read Our Latest Insights →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;background-color:#f8fafc;border-top:1px solid #e2e8f0;text-align:center;">
              <p style="margin:0;color:#94a3b8;font-size:12px;">
                © ${new Date().getFullYear()} Nemvol · You're receiving this because you signed up at nemvol.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
