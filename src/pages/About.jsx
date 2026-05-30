import React from 'react';
import { Box, Typography, Card, CardContent, Link } from '@mui/material';
import { Helmet } from 'react-helmet';
import styles from '../styles/About.module.css';

function About() {
  return (
    <>
      {/* ===== SEO META TAGS ===== */}
      <Helmet>
        <title>About Mousmit Seth | Founder & CEO – AediaX Tech Private Limited</title>

        <meta
          name="description"
          content="Learn about Mousmit Seth, Founder & CEO of AediaX Tech Private Limited. An Indian full-stack software developer and entrepreneur building AI-driven enterprise and academic management systems."
        />

        <meta
          name="keywords"
          content="Mousmit Seth, AediaX Tech, AediaX Founder, Indian Software Developer, AI Startup India, Full Stack Developer, Bhubaneswar Entrepreneur"
        />

        <meta name="author" content="AediaX Tech Private Limited" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Social Sharing) */}
        <meta property="og:title" content="About Mousmit Seth | AediaX Tech" />
        <meta
          property="og:description"
          content="Founder & CEO of AediaX Tech Private Limited, building AI-powered software, enterprise platforms, and scalable digital systems."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="AediaX Tech Private Limited" />
        <meta property="og:url" content="https://aediax.com/about" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mousmit Seth | Founder of AediaX Tech" />
        <meta
          name="twitter:description"
          content="Indian full-stack developer and entrepreneur leading AediaX Tech Private Limited."
        />
      </Helmet>

      {/* ===== PAGE CONTENT ===== */}
     <Box id={styles.aboutSection} className={styles.aboutContainer}>

      <Typography id={styles.aboutTitle} variant="h2" className={styles.title}>
        About Mousmit Seth
      </Typography>

      <Typography id={styles.aboutSubtitle} variant="h5" className={styles.subtitle}>
        Intern, AediaX Tech Private Limited
      </Typography>

      {/* Biography */}
      <Typography id={styles.bioPara1} className={styles.bio}>
        Mousmit Seth (born 24 November 2005) is an Indian full-stack software developer,
        technology entrepreneur, and engineer from Lahanda, Attabira, Bargarh,
        Odisha (768111). It is believed that great software starts with a rock-solid understanding of the fundamentals. 
        When exams are not being studied for or code is not being debugged, side projects are usually being built,
        complex logical systems are being explored, and technical problem-solving is being investigated. 
        Opportunities to apply these skills to real-world challenges through internships and collaborative projects are always being sought.
      </Typography>


     <Typography id={styles.bioPara3} className={styles.bio}>
     </Typography>

      {/* Cards */}
      <Box id={styles.cardsWrapper} className={styles.cardContainer}>

        {/* Academic Background */}
        <Card id={styles.academicCard} className={styles.card}>
          <CardContent>
            <Typography id={styles.academicTitle} variant="h6" className={styles.cardTitle}>
              Academic Background
            </Typography>

            <Typography id={styles.academicText} className={styles.cardText}>
               A B.Sc. in Information Science and Technology (2024–2027) is currently being pursued at Gangadhar Meher University. 
      Fascination with technology goes beyond the mere consumption of digital products; a drive has always been maintained by a deep curiosity to understand how things work under the hood.
      This curiosity has been the driving force behind the pursuit of a career in software development and technology entrepreneurship.
            </Typography>
          </CardContent>
        </Card>

      </Box>
    </Box>
       </>
  );
}

export default About;
