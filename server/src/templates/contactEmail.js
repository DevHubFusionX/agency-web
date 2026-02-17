/**
 * Branded HTML email template for contact form submissions.
 * Dark-mode safe, responsive, with Nemvol branding.
 */
export const contactEmailTemplate = ({ name, email, projectType, message }) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background-color:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.05);">
          
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#2563eb,#1d4ed8);padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:800;letter-spacing:-0.5px;">NEMVOL</h1>
              <p style="margin:8px 0 0;color:#bfdbfe;font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">New Consultation Request</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 24px;color:#1e293b;font-size:16px;line-height:1.6;">
                You have a new consultation request from <strong>${name}</strong>.
              </p>

              <!-- Details Table -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;margin-bottom:24px;">
                <tr>
                  <td style="padding:14px 20px;background-color:#f8fafc;border-bottom:1px solid #e2e8f0;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1px;width:140px;">Name</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #e2e8f0;font-size:15px;color:#1e293b;font-weight:600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;background-color:#f8fafc;border-bottom:1px solid #e2e8f0;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1px;">Email</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #e2e8f0;font-size:15px;color:#2563eb;font-weight:600;">
                    <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;background-color:#f8fafc;border-bottom:1px solid #e2e8f0;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1px;">Project Type</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #e2e8f0;font-size:15px;color:#1e293b;font-weight:600;">${projectType || 'Not specified'}</td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;background-color:#f8fafc;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1px;vertical-align:top;">Message</td>
                  <td style="padding:14px 20px;font-size:15px;color:#1e293b;line-height:1.6;">${message || 'No message provided'}</td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding:8px 0;">
                    <a href="mailto:${email}?subject=Re: Consultation Request from ${name}" 
                       style="display:inline-block;background-color:#2563eb;color:#ffffff;padding:14px 32px;border-radius:12px;font-size:14px;font-weight:700;text-decoration:none;letter-spacing:0.5px;">
                      Reply to ${name} →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;background-color:#f8fafc;border-top:1px solid #e2e8f0;text-align:center;">
              <p style="margin:0;color:#94a3b8;font-size:12px;font-weight:600;">
                © ${new Date().getFullYear()} Nemvol · Sent from nemvol.com contact form
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
