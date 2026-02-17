/**
 * Admin notification email template — sent when a new form submission arrives.
 */
export const adminNotificationTemplate = ({ type, data }) => {
    const typeLabels = {
        contact: 'Consultation Request',
        newsletter: 'Newsletter Subscription',
        'lead-magnet': 'Playbook Download'
    }

    const rows = Object.entries(data)
        .filter(([key]) => key !== 'subject')
        .map(([key, value]) => `
      <tr>
        <td style="padding:12px 20px;background-color:#f8fafc;border-bottom:1px solid #e2e8f0;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1px;width:140px;">${key}</td>
        <td style="padding:12px 20px;border-bottom:1px solid #e2e8f0;font-size:14px;color:#1e293b;font-weight:600;">${value || '—'}</td>
      </tr>
    `)
        .join('')

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <title>New ${typeLabels[type] || 'Submission'}</title>
</head>
<body style="margin:0;padding:0;background-color:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.05);">
          
          <!-- Header -->
          <tr>
            <td style="background:#0f172a;padding:24px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:800;">NEMVOL</h1>
              <p style="margin:6px 0 0;color:#60a5fa;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;">
                ${typeLabels[type] || 'New Submission'}
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
                ${rows}
              </table>

              <p style="margin:24px 0 0;color:#94a3b8;font-size:12px;text-align:center;">
                Received at ${new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}
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
}
