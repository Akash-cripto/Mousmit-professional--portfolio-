import React from 'react';
import { Box, Typography, Link, Tooltip } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';     // Wikimedia
import SchoolIcon from '@mui/icons-material/School';        // Google Scholar
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';                  // Twitter / X
import BusinessIcon from '@mui/icons-material/Business';    // AediaX
import LocationOnIcon from '@mui/icons-material/LocationOn';

import styles from '../styles/Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <Box
      component="footer"
      className={styles.footer}
      style={{ background: 'rgb(3, 11, 30)' }}
    >
      {/* Top Section */}
      <Box className={styles.topFooter}>

        {/* Navigation */}
        <Box className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
        </Box>

        {/* Social & Professional Icons */}
        <Box className={styles.socialLinks}>

          <Tooltip title="LinkedIn">
            <Link href="https://www.linkedin.com/in/mousmit-seth-987185409/" target="_blank" className={styles.socialLink}>
              <LinkedInIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Email">
            <Link href="mailto:mousmitseth6.2@gmail.com" className={styles.socialLink}>
              <EmailIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Phone / WhatsApp">
            <Link href="tel:+916372570589" className={styles.socialLink}>
              <PhoneIcon />
            </Link>
          </Tooltip>

          <Tooltip title="GitHub">
            <Link href="https://github.com/Akash-cripto" target="_blank" className={styles.socialLink}>
              <GitHubIcon />
            </Link>
          </Tooltip>

          <Tooltip title="AediaX Tech Private Limited">
            <Link href="https://aediax.com/intern/AEDI84087" target="_blank" className={styles.socialLink}>
              <BusinessIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Attabira, Bargarh, Odisha">
            <Link href="https://share.google/rj89Jrink6Nf3MztE" target="_blank" className={styles.socialLink}>
              <LocationOnIcon />
            </Link>
          </Tooltip>

        </Box>
      </Box>

      {/* Divider */}
      <Box className={styles.divider}></Box>

      {/* Copyright */}
      <Typography variant="body2" className={styles.text}>
        © {currentYear} <strong>Mousmit Seth</strong> · Intern, AediaX Tech Private Limited
      </Typography>
    </Box>
  );
}

export default Footer;
