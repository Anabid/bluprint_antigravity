import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Logo />
            <p style={{ marginTop: '1.5rem', maxWidth: '300px' }}>
              Transforming potential into performance through expert mentorship and "Real Exam Rigor".
            </p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Programs</h4>
              <a href="#courses">Admission Course</a>
              <Link to="/topic-outline">32-Topic Outline</Link>
              <a href="#enrollment">Mock Tests</a>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <a href="#why-choose-us">Benefits</a>
              <a href="#results">Success Stories</a>
              <a href="#enrollment">Pricing</a>
              <a href="#contact">Our Hubs</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Blueprint Education. All rights reserved. | <span className="text-primary" style={{ fontWeight: '700' }}>Design Your Success</span></p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .footer {
          padding: 6rem 0 0 0;
          background: #F1F5F9; /* Light Greyish Blue background for footer */
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .footer-brand p {
          color: #475569 !important; /* Muted Dark Grey */
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 5rem;
        }
        
        .footer-links {
          display: flex;
          gap: 6rem;
        }
        
        .link-group h4 {
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 2rem;
          color: var(--primary); /* Keep brand blue for headings */
        }
        
        .link-group a {
          display: block;
          color: #1E293B; /* Slate 800 - Deep dark text */
          text-decoration: none;
          margin-bottom: 1rem;
          font-weight: 600;
          transition: var(--transition);
          font-size: 0.9375rem;
        }
        
        .link-group a:hover {
          color: var(--primary);
          transform: translateX(5px);
        }
        
        .footer-bottom {
          padding: 2rem 0;
          background: #FFFFFF; /* Pure white for the very bottom strip to contrast with the light footer */
          text-align: center;
          font-size: 0.875rem;
          color: #0F172A; /* Dark Navy / Black */
          font-weight: 600;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        .footer-bottom p {
          margin-bottom: 0;
          color: #0F172A !important;
        }

        @media (max-width: 992px) {
          .footer-content {
            flex-direction: column;
            gap: 4rem;
          }
          .footer-links {
            gap: 4rem;
          }
        }

        @media (max-width: 600px) {
          .footer-links {
            flex-direction: column;
            gap: 3rem;
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;
