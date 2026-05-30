import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Typography, TextField, Button, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import styles from '../styles/Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:mousmitseth6.2@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <>
      <Helmet>
        <title>Contact Mousmit Seth | Web Developer </title>
        <meta 
          name="description" 
          content="Get in touch with Mousmit Seth for collaborations, projects, or discussions about web development, AI, and technology." 
        />
        <meta 
          name="keywords" 
          content="Mousmit Seth contact, web developer contact, AI engineer, collaboration, project inquiry, technology discussion" 
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amreshbhuyan.com/contact" />
        <meta property="og:title" content="Contact Mousmit Seth | Web Developer & AI Engineer" />
        <meta 
          property="og:description" 
          content="Connect with Mousmit Seth for collaborations, projects, or discussions about web development, AI, and technology." 
        />
        <meta property="og:image" content="https://amreshbhuyan.com/images/contact-og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://amreshbhuyan.com/contact" />
        <meta property="twitter:title" content="Contact Mousmit Seth | Web Developer & AI Engineer" />
        <meta 
          property="twitter:description" 
          content="Get in touch with Mousmit Seth for collaborations, projects, or discussions about web development, AI, and technology." 
        />
        <meta property="twitter:image" content="https://amreshbhuyan.com/images/contact-twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://amreshbhuyan.com/contact" />
        
        {/* Additional meta tags */}
        <meta name="author" content="Mousmit Seth" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        
        {/* Structured Data for Contact Page */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Mousmit Seth",
              "description": "Contact page for Mousmit Seth - Web Developer & AI Engineer",
              "url": "https://amreshbhuyan.com/contact",
              "author": {
                "@type": "Person",
                "name": "Mousmit Seth",
                "jobTitle": "Web Developer & AI Engineer",
                "email": "mousmitseth7.0@gmail.com",
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "email": "mousmitseth6.2@gmail.com",
                  "contactType": "personal",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "email": "mousmitseth6.2@gmail.com",
                  "contactType": "work",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+916372570589",
                  "contactType": "customer service",
                  "contactOption": "TollFree",
                  "areaServed": "IN",
                  "availableLanguage": "English"
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <Box className={styles.contactContainer}>
        <Typography variant="h2" className={styles.title}>
          Contact
        </Typography>

        <Typography className={styles.subtitle}>
          Let’s discuss ideas, technology, and collaboration.
        </Typography>

        {/* Contact Details */}
        <Box className={styles.contactInfo}>
          <Typography>
            <EmailIcon fontSize="small" />{' '}
            <strong>Personal:</strong> mousmitseth7.0@gmail.com
          </Typography>

          <Typography>
            <EmailIcon fontSize="small" />{' '}
            <strong>Official:</strong> mousmitseth6.2@gmail.com
          </Typography>

          <Typography>
            <WhatsAppIcon fontSize="small" />{' '}
            <Link
              href="https://wa.me/916372570589"
              target="_blank"
              underline="none"
              aria-label="Contact via WhatsApp"
            >
              +91 63725 70589 (WhatsApp)
            </Link>
          </Typography>
        </Box>

        {/* Form */}
        <Box className={styles.formWrapper}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              aria-label="Your Name"
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              aria-label="Your Email"
            />

            <TextField
              fullWidth
              label="Subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className={styles.input}
              aria-label="Message Subject"
            />

            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className={styles.input}
              aria-label="Your Message"
            />

            <Button type="submit" className={styles.submitButton}>
              Send Message
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Contact;