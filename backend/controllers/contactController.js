const { sendContactEmail, sendAutoReply } = require('../config/email');

// Handle contact form submission
const submitContactForm = async (req, res) => {
  try {
    const formData = req.body;

    // Validate required fields
    if (!formData.companyName || !formData.contactName || !formData.email || !formData.phone) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields (Company Name, Contact Name, Email, Phone)'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Log the submission (for debugging)
    console.log('📝 New contact form submission from:', formData.companyName);

    // Send email to company
    await sendContactEmail(formData);

    // Send auto-reply to customer
    await sendAutoReply(formData.email, formData.contactName);

    // Success response
    res.status(200).json({
      success: true,
      message: 'Thank you for your inquiry. We will get back to you shortly.'
    });

  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send your message. Please try again or contact us directly at info@sunriseextracts.net'
    });
  }
};

// Handle product specification request
const requestSpecification = async (req, res) => {
  try {
    const { productName, email, companyName } = req.body;

    // Validate
    if (!productName || !email || !companyName) {
      return res.status(400).json({
        success: false,
        message: 'Please provide product name, email, and company name'
      });
    }

    // Create specification request email
    const specRequest = {
      companyName,
      contactName: req.body.contactName || 'Not provided',
      email,
      phone: req.body.phone || 'Not provided',
      productInterest: productName,
      requestType: 'Specification Request',
      message: `Specification request for: ${productName}`
    };

    await sendContactEmail(specRequest);
    await sendAutoReply(email, req.body.contactName || 'Valued Customer');

    res.status(200).json({
      success: true,
      message: 'Specification request submitted successfully'
    });

  } catch (error) {
    console.error('❌ Specification request error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit specification request'
    });
  }
};

module.exports = {
  submitContactForm,
  requestSpecification
};