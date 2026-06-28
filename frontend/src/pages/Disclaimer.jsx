import React from 'react';

const textualStyle = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '40px',
  background: '#18181b',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  lineHeight: '1.8',
  color: '#a1a1aa'
};

const Disclaimer = () => {
  return (
    <div style={textualStyle}>
      <h2
        style={{
          color: '#fff',
          marginBottom: '20px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '15px'
        }}
      >
        Disclaimer
      </h2>

      <p style={{ marginBottom: '20px' }}>
        ShopNest is a demonstration e-commerce application developed for
        educational, learning, and portfolio purposes. It showcases modern
        full-stack web development using the MERN stack and should not be
        considered a commercial online store.
      </p>

      <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>
        1. Product Information
      </h4>
      <p style={{ marginBottom: '15px' }}>
        Product names, descriptions, prices, and images displayed on this
        website are for demonstration purposes only. Some images may be sourced
        from publicly available image providers or used as placeholders.
      </p>

      <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>
        2. Payments
      </h4>
      <p style={{ marginBottom: '15px' }}>
        Any payment functionality is integrated only for testing and development
        purposes using Razorpay Sandbox. No real financial transactions or
        charges are processed through this demo application.
      </p>

      <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>
        3. User Accounts
      </h4>
      <p style={{ marginBottom: '15px' }}>
        Users are advised not to register using sensitive personal information.
        Any data entered into this demo application is intended solely for
        testing and learning purposes.
      </p>

      <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>
        4. Availability
      </h4>
      <p style={{ marginBottom: '15px' }}>
        The application may be updated, modified, or taken offline at any time
        without prior notice as part of ongoing development and maintenance.
      </p>

      <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>
        5. Third-Party Services
      </h4>
      <p style={{ marginBottom: '15px' }}>
        ShopNest may integrate third-party services such as Razorpay, Cloudinary,
        or external APIs. Their respective terms and privacy policies apply to
        the use of those services.
      </p>

      <p
        style={{
          marginTop: '30px',
          fontStyle: 'italic',
          fontSize: '0.9rem'
        }}
      >
        By using ShopNest, you acknowledge that this website is a demo project
        created for educational and portfolio purposes and agree to use it
        accordingly.
      </p>
    </div>
  );
};

export default Disclaimer;