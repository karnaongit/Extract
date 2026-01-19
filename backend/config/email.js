const nodemailer = require('nodemailer');

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Send contact form email
const sendContactEmail = async (formData) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"Sunrise Extracts Website" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO,
    subject: `New Contact Form Submission - ${formData.requestType || 'General Inquiry'}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2D5016 0%, #4A7C2C 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #2D5016; }
          .value { margin-top: 5px; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #2D5016; text-align: center; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🌅 New Contact Form Submission</h2>
            <p>Sunrise Extracts - Industrial Food Ingredients</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Company Name:</div>
              <div class="value">${formData.companyName}</div>
            </div>
            
            ${formData.website ? `
            <div class="field">
              <div class="label">Website:</div>
              <div class="value"><a href="${formData.website}">${formData.website}</a></div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Contact Name:</div>
              <div class="value">${formData.contactName}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value"><a href="tel:${formData.phone}">${formData.phone}</a></div>
            </div>
            
            ${formData.state ? `
            <div class="field">
              <div class="label">State:</div>
              <div class="value">${formData.state}</div>
            </div>
            ` : ''}
            
            ${formData.productInterest ? `
            <div class="field">
              <div class="label">Product Interest:</div>
              <div class="value">${formData.productInterest}</div>
            </div>
            ` : ''}
            
            ${formData.application ? `
            <div class="field">
              <div class="label">Intended Application:</div>
              <div class="value">${formData.application}</div>
            </div>
            ` : ''}
            
            ${formData.volume ? `
            <div class="field">
              <div class="label">Estimated Monthly Volume:</div>
              <div class="value">${formData.volume}</div>
            </div>
            ` : ''}
            
            ${formData.requestType ? `
            <div class="field">
              <div class="label">Request Type:</div>
              <div class="value">${formData.requestType}</div>
            </div>
            ` : ''}
            
            ${formData.message ? `
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${formData.message.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}
            
            <div class="footer">
              <p>Submitted on ${new Date().toLocaleString()}</p>
              <p><strong>Sunrise Extracts</strong> - Raleigh, NC</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
New Contact Form Submission - Sunrise Extracts

Company Name: ${formData.companyName}
${formData.website ? `Website: ${formData.website}` : ''}
Contact Name: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.state ? `State: ${formData.state}` : ''}
${formData.productInterest ? `Product Interest: ${formData.productInterest}` : ''}
${formData.application ? `Intended Application: ${formData.application}` : ''}
${formData.volume ? `Estimated Monthly Volume: ${formData.volume}` : ''}
${formData.requestType ? `Request Type: ${formData.requestType}` : ''}
${formData.message ? `Message: ${formData.message}` : ''}

Submitted on ${new Date().toLocaleString()}
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Email error:', error);
    throw error;
  }
};

// Send auto-reply to customer
const sendAutoReply = async (email, name) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"Sunrise Extracts" <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: 'Thank you for contacting Sunrise Extracts',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2D5016 0%, #4A7C2C 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
          .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">🌅 SUNRISE EXTRACTS</div>
            <p>Industrial Food Ingredients</p>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            
            <p>Thank you for contacting Sunrise Extracts. We have received your inquiry and our team will review your request shortly.</p>
            
            <p>We typically respond to all inquiries within 1-2 business days. If you have an urgent matter, please feel free to call us at +1 (919) XXX-1000.</p>
            
            <p><strong>What happens next:</strong></p>
            <ul>
              <li>Our team will review your specific requirements</li>
              <li>We'll prepare relevant documentation and information</li>
              <li>You'll receive a personalized response from our coordination team</li>
            </ul>
            
            <p>Best regards,<br>
            <strong>Sunrise Extracts Team</strong><br>
            Raleigh, North Carolina<br>
            info@sunriseextracts.net</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Auto-reply sent to:', email);
  } catch (error) {
    console.error('⚠️ Auto-reply error:', error);
    // Don't throw - auto-reply failure shouldn't stop the process
  }
};

module.exports = {
  sendContactEmail,
  sendAutoReply
};