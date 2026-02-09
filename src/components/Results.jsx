import React, { useState, useEffect } from 'react';

const Results = () => {
  const flyers = [
    { src: '/assets/results/flyer-iba-1.jpg', alt: 'IBA Success Story' },
    { src: '/assets/results/flyer-bup-1.png', alt: 'BUP Success Story' },
    { src: '/assets/results/flyer-iba-2.jpg', alt: 'IBA Success Story 2' }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % flyers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [flyers.length]);

  return (
    <section id="results">
      <div className="container">
        <div className="res-flex">
          <div className="res-content">
            <span className="badge">Success Stories</span>
            <h2 className="text-primary">Our Impact in Numbers</h2>
            <p>
              Blueprint By Scholars has become a powerhouse of success, with a growing roster of students who have already secured their seats in their dream universities through our mentorship-driven ecosystem.
            </p>
            <p>
              "With the right guidance, you can be next." We celebrate every student success story as a milestone in our mission to transform the admissions journey.
            </p>
            <div className="res-stats">
              <div className="stat-item">
                <span className="stat-num">500+</span>
                <span className="stat-label">Successful Scholars</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">95%</span>
                <span className="stat-label">Admission Rate</span>
              </div>
            </div>
          </div>
          <div className="res-image">
            <div className="flyer-gallery">
              {flyers.map((flyer, index) => (
                <div
                  key={index}
                  className={`flyer-item ${index === activeIndex ? 'active' : ''}`}
                >
                  <img src={flyer.src} alt={flyer.alt} />
                </div>
              ))}
              <div className="flyer-indicators">
                {flyers.map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .res-flex {
          display: flex;
          align-items: center;
          gap: 5rem;
        }
        
        .res-content {
          flex: 1.2;
        }
        
        .res-image {
          flex: 0.8;
          width: 100%;
        }
        
        .flyer-gallery {
          position: relative;
          border-radius: 2rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px var(--shadow);
          aspect-ratio: 1/1; /* Selected flyers are mostly square or 4/5 */
          background: var(--bg-card);
        }
        
        .flyer-item {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
          transform: scale(1.05);
        }
        
        .flyer-item.active {
          opacity: 1;
          transform: scale(1);
        }
        
        .flyer-item img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        
        .flyer-indicators {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.75rem;
          z-index: 10;
        }
        
        .indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: var(--transition);
        }
        
        .indicator.active {
          background: var(--primary);
          transform: scale(1.3);
        }
        
        .res-stats {
          display: flex;
          gap: 4rem;
          margin-top: 3rem;
        }
        
        .stat-num {
          display: block;
          font-size: 3rem;
          font-weight: 800;
          color: var(--primary);
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
        }

        @media (max-width: 992px) {
          .res-flex {
            flex-direction: column;
            text-align: center;
          }
          .res-stats {
            justify-content: center;
          }
          .res-image {
            width: 100%;
            max-width: 500px;
          }
        }
      `}} />
    </section>
  );
};

export default Results;

