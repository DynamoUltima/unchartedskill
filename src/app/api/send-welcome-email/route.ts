import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const firstName = name ? name.split(' ')[0] : 'there';

    const msg = {
      to: email,
      from: {
        email: 'support@unchartedskill.com',
        name: 'Uncharted Skill',
      },
      subject: 'Welcome to Uncharted Skill! 🎉',
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to Uncharted Skill</title>
</head>
<body style="margin:0;padding:0;background-color:#0f0f1a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f0f1a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <h1 style="margin:0;font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">
                Uncharted <span style="color:#7c3aed;">Skill</span>
              </h1>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:linear-gradient(135deg,#1e1b4b 0%,#1a1a2e 100%);border-radius:20px;border:1px solid rgba(124,58,237,0.3);overflow:hidden;">

              <!-- Top accent bar -->
              <tr>
                <td style="height:4px;background:linear-gradient(90deg,#7c3aed,#a855f7,#ec4899);"></td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:48px 48px 40px;">

                  <!-- Greeting -->
                  <p style="margin:0 0 8px;font-size:14px;color:#a78bfa;text-transform:uppercase;letter-spacing:2px;font-weight:600;">Account Created</p>
                  <h2 style="margin:0 0 24px;font-size:32px;font-weight:800;color:#ffffff;line-height:1.2;">
                    Welcome aboard, ${firstName}! 👋
                  </h2>

                  <p style="margin:0 0 32px;font-size:16px;color:#c4b5fd;line-height:1.7;">
                    Your account is live and ready to go. We're thrilled to have you join the 
                    <strong style="color:#ffffff;">Uncharted Skill</strong> community — a place where 
                    knowledge meets ambition.
                  </p>

                  <!-- Feature highlights -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:36px;">
                    <tr>
                      <td style="padding:16px;background:rgba(124,58,237,0.12);border-radius:12px;border:1px solid rgba(124,58,237,0.2);margin-bottom:12px;">
                        <table cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-right:14px;font-size:24px;">📚</td>
                            <td>
                              <p style="margin:0;font-size:15px;font-weight:700;color:#ffffff;">Explore Courses</p>
                              <p style="margin:4px 0 0;font-size:13px;color:#a78bfa;">Browse hundreds of expert-led classes across all skill levels.</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr><td style="height:10px;"></td></tr>
                    <tr>
                      <td style="padding:16px;background:rgba(168,85,247,0.10);border-radius:12px;border:1px solid rgba(168,85,247,0.2);">
                        <table cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-right:14px;font-size:24px;">🚀</td>
                            <td>
                              <p style="margin:0;font-size:15px;font-weight:700;color:#ffffff;">Track Your Progress</p>
                              <p style="margin:4px 0 0;font-size:13px;color:#a78bfa;">Your personal dashboard keeps every milestone in sight.</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr><td style="height:10px;"></td></tr>
                    <tr>
                      <td style="padding:16px;background:rgba(236,72,153,0.08);border-radius:12px;border:1px solid rgba(236,72,153,0.2);">
                        <table cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-right:14px;font-size:24px;">🏆</td>
                            <td>
                              <p style="margin:0;font-size:15px;font-weight:700;color:#ffffff;">Earn Certificates</p>
                              <p style="margin:4px 0 0;font-size:13px;color:#a78bfa;">Showcase your achievements with verified completion certificates.</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- CTA Button -->
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="center">
                        <a href="https://unchartedskill.com" 
                           style="display:inline-block;padding:16px 48px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#ffffff;text-decoration:none;border-radius:12px;font-size:16px;font-weight:700;letter-spacing:0.3px;box-shadow:0 8px 32px rgba(124,58,237,0.4);">
                          Start Learning Now →
                        </a>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:32px 0 0;">
              <p style="margin:0 0 8px;font-size:13px;color:#6b7280;">
                Questions? Reply to this email or reach us at 
                <a href="mailto:support@unchartedskill.com" style="color:#a78bfa;text-decoration:none;">support@unchartedskill.com</a>
              </p>
              <p style="margin:0;font-size:12px;color:#4b5563;">
                © ${new Date().getFullYear()} Uncharted Skill. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `.trim(),
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    console.error('SendGrid error:', error);
    const message = error instanceof Error ? error.message : 'Failed to send email';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
