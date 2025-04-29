export default function UserEmailTemplate(emailPayload) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <title>Thank You for Your Submission</title>
      </head>
      <body style="margin: 0; padding: 40px 0; font-family: Arial, sans-serif; background-color: #f8f9fa; display: flex; align-items: center; justify-content: center;">
          <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 620px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); margin: auto;">
              <tr>
                  <td style="padding: 30px 20px; text-align: center; background: linear-gradient(95.07deg, #170F10 0.48%, #EC1D36 89.82%); border-radius: 8px 8px 0 0;">
                      <h1 style="color: #ffffff; font-size: 26px; margin: 0;">Thank You for Reaching Out!</h1>
                  </td>
              </tr>
              <tr>
                  <td style="text-align: center; padding-top: 20px;">
                      <a href="https://hardtenprecision.com/" target="_blank">
                          <img src="https://hardtenprecision.com/wp-content/uploads/2023/12/HPT-Logo-Black.png" alt="Company Logo" style="display: block; margin: 0 auto; height:50px">
                      </a>
                  </td>
              </tr>
              <tr>
                  <td style="padding: 20px;">
                      <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
                          Dear ${emailPayload.Name || "User"},
                      </p>
                      <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
                          Thank you for submitting your inquiry through the Hardten Precision website. We have received your inquiry and our team will get back to you soon.
                      </p>
                      <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
                          If you have any queries, feel free to contact us at <span style="color: #007bff;">support@hardtenprecision.com</span>.
                      </p>
                  </td>
              </tr>
              <tr>
                  <td style="padding: 20px; text-align: center; background-color: white; border-top: 2px solid #e9ecef; border-radius: 0 0 8px
                  </tr>
          </table>
      </body>
      </html>
    `;
}
