import React from 'react';
import { MapPin, Globe, Users, Clock } from 'lucide-react';

const Enrollment = () => {
  return (
    <section id="enrollment">
      <div className="container">
        <div className="text-center section-header-block">
          <span className="badge">Hybrid Presence</span>
          <h2 className="text-primary">Enrolment Modes & Pricing</h2>
          <p>Online and offline modes receive equal brand weight, ensuring the same "Real Exam Rigor" for every student.</p>
        </div>

        <div className="grid enrollment-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {/* Offline Mode */}
          <div className="card pricing-card">
            <div className="mode-badge">Offline Hub</div>
            <h3 className="text-primary">Physical Classrooms</h3>
            <p className="card-subtitle">Personalized Mentorship at Our Hubs</p>

            <div className="price-tag">
              <span className="old-price">16,000 BDT</span>
              <span className="current-price">14,000 BDT</span>
              <span className="discount-label">HSC Exam Discount</span>
            </div>

            <ul className="perks-list">
              <li><MapPin size={20} className="text-primary" /> Farmgate, Mouchak, Uttara</li>
              <li><Users size={20} className="text-primary" /> 25–30 Students (Personalized)</li>
              <li><Clock size={20} className="text-primary" /> 2-Hour Class | 3 Classes/Week</li>
            </ul>

            <a href="#contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Enroll Offline</a>
          </div>

          {/* Online Mode */}
          <div className="card pricing-card">
            <div className="mode-badge">Digital Hub</div>
            <h3 className="text-primary">Live Interactive</h3>
            <p className="card-subtitle">Via Google Meet (24/7 Support)</p>

            <div className="price-tag">
              <span className="old-price">10,000 BDT</span>
              <span className="current-price">8,000 BDT</span>
              <span className="discount-label">HSC Exam Discount</span>
            </div>

            <ul className="perks-list">
              <li><Globe size={20} className="text-primary" /> Digital Hub (Google Meet)</li>
              <li><Users size={20} className="text-primary" /> 25–30 Students (Personalized)</li>
              <li><Clock size={20} className="text-primary" /> 2-Hour Class | 3 Classes/Week</li>
            </ul>

            <a href="#contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Enroll Online</a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .pricing-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          padding: 4rem 2.5rem;
          border-width: 2px;
        }
        
        .pricing-card:hover {
          border-color: var(--primary);
        }
        
        .mode-badge {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(30, 64, 175, 0.1);
          padding: 0.4rem 1.2rem;
          border-radius: 0.5rem;
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border: 1px solid var(--primary);
        }
        
        .card-subtitle {
          margin-top: 0.5rem;
          font-weight: 600;
          color: var(--text-muted);
        }
        
        .price-tag {
          margin: 2.5rem 0 3rem 0;
          background: rgba(255, 255, 255, 0.03);
          padding: 2rem;
          border-radius: 1rem;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .old-price {
          display: block;
          text-decoration: line-through;
          color: #EF4444;
          font-size: 1.25rem;
          font-weight: 700;
          opacity: 0.8;
          margin-bottom: 0.25rem;
        }
        
        .current-price {
          display: block;
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--text-main);
          line-height: 1;
        }
        
        .discount-label {
          display: inline-block;
          margin-top: 1rem;
          font-size: 0.75rem;
          font-weight: 800;
          background: var(--primary);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 0.25rem;
          text-transform: uppercase;
        }
        
        .perks-list {
          list-style: none;
          text-align: left;
          width: 100%;
          margin-bottom: 3rem;
        }
        
        .perks-list li {
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--text-main);
          font-weight: 500;
          font-size: 0.95rem;
        }

        @media (max-width: 992px) {
          .enrollment-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem;
          }
        }

        @media (max-width: 480px) {
          .pricing-card {
            padding: 2rem 1.5rem;
          }
          .mode-badge {
            top: 1rem;
            right: 1rem;
            font-size: 0.625rem;
            padding: 0.3rem 0.75rem;
          }
          .current-price {
            font-size: 2.5rem;
          }
          .old-price {
            font-size: 1rem;
          }
          .price-tag {
            margin: 1.5rem 0 2rem 0;
            padding: 1.25rem;
          }
          .perks-list li {
            gap: 0.75rem;
            font-size: 0.85rem;
          }
          .perks-list {
            margin-bottom: 2rem;
          }
        }
      `}} />
    </section>
  );
};

export default Enrollment;
