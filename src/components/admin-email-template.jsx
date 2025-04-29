const AdminEmailTemplate = (emailData) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Career Form Submission Confirmation</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8f9fa;">
        <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" 
            style="max-width: 620px; background-color: #ffffff; border-radius: 8px; 
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <tr>
                <td style="padding: 30px 20px; text-align: center; 
                    background: linear-gradient(95.07deg, #170F10 0.48%, #EC1D36 89.82%);
                    border-radius: 8px 8px 0 0;">
                    <h1 style="color: #ffffff; font-size: 26px; margin: 0;">
                        New Precision Inquiry Form Submission
                    </h1>
                </td>
            </tr>

            <!-- Logo -->
            <tr>
                <td style="text-align: center; padding-top: 20px;">
                    <a href="https://hardtenprecision.com/" target="_blank">
                        <img src=" https://beta-mikro.gleaminnovations.net/assets/Mikro-logo.png" 
                            alt="Company Logo" 
                            style="display: block; margin: 0 auto; height:50px">
                    </a>
                </td>
            </tr>

            <!-- Body -->
            <tr>
                <td style="padding: 20px;">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
                        A new Inquiry form submission has been received through Hardten website:
                    </p>
                    
                    <!-- Details Table -->
                    <table style="width: 100%; border-collapse: collapse;">
                        ${Object.entries(emailData).map(([key, value]) => `
                            <tr>
                                <td style="padding: 10px; font-weight: bold; background-color: #f8f9fa; 
                                    border: 1px solid #ddd;">
                                    ${key.replace(/([A-Z])/g, " $1").trim()}:
                                </td>
                                <td style="padding: 10px; border: 1px solid #ddd;background-color: #f8f9fa;">
                                    ${value || "N/A"}
                                </td>
                            </tr>
                        `).join("")}
                    </table>

                    <p style="font-size: 16px; color: #333; margin: 20px 0;">
                        Please review and take necessary action.
                    </p>
                </td>
            </tr>

            <!-- Footer -->
            <tr>
                <td style="padding: 20px; text-align: center; 
                    background: linear-gradient(95.07deg, #170F10 0.48%, #EC1D36 89.82%);
                    border-top: 2px solid #e9ecef; border-radius: 0 0 8px 8px;">
                    <p style="font-size: 14px; color: #ffffff;">
                        &copy; Hardten Precision Technologies Private Limited
                    </p>
                </td>
            </tr>
        </table>
    </body>
    </html>
  `;
};

export default AdminEmailTemplate;
