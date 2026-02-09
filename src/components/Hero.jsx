import React from 'react';
import Logo from './Logo';

const Hero = () => {
  const universities = ["IBA DU", "BUP", "NSU", "BRAC", "CU", "IBA JU"];

  return (
    <section className="hero">
      <div className="container">
        <nav style={{ marginBottom: '6rem', display: 'flex', justifyContent: 'center' }}>
          <Logo size="lg" />
        </nav>

        <div className="hero-content text-center">
          <span className="badge">IBA & BBA ADMISSION 2024-25</span>
          <h1>Design Your Success with <span className="text-primary">Real Exam Rigor</span></h1>
          <p className="hero-subtitle">
            Secure your future at the nation’s most prestigious business schools with the ultimate Blueprint By Scholars mentorship program.
          </p>
          <div className="cta-group">
            <a href="#enrollment" className="btn btn-primary">Start Your Journey</a>
          </div>

          <div className="university-logos">
            <p className="logos-title">Your Blueprint to Success at</p>
            <div className="logos-grid">
              {universities.map((uni, index) => (
                <div key={index} className="uni-item">{uni}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hero {
          padding-top: 4rem;
          padding-bottom: 6rem;
          background: radial-gradient(circle at top right, rgba(30, 64, 175, 0.1), transparent 45%),
                      radial-gradient(circle at bottom left, rgba(30, 64, 175, 0.05), transparent 40%);
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          max-width: 750px;
          margin: 0 auto 3rem auto;
          color: var(--text-muted);
        }
        
        .cta-group {
          margin-bottom: 6rem;
        }
        
        .university-logos {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 4rem;
        }
        
        .logos-title {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          margin-bottom: 2rem;
          font-weight: 700;
          color: var(--text-muted);
        }
        
        .logos-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2.5rem 5rem;
        }
        
        .uni-item {
          font-weight: 800;
          font-size: 1.5rem;
          opacity: 0.5;
          transition: var(--transition);
          color: var(--text-main);
        }
        
        .uni-item:hover {
          opacity: 1;
          color: var(--primary);
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .logos-grid {
            gap: 1.5rem 2.5rem;
          }
          .uni-item {
            font-size: 1.125rem;
          }
        }
      `}} />
    </section>
  );
};

export default Hero;
