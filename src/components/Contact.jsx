import React from 'react';
import { Phone, Mail, Facebook, MapPin, Globe, ExternalLink } from 'lucide-react';

const Contact = () => {
  const hubs = [
    {
      name: "Farmgate",
      type: "Physical Hub",
      mapLink: "https://www.google.com/maps/place/Blueprint+Education+-+IBA+%26+SAT/@23.7545212,90.3866081,1098m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3755b9b935474edb:0x60b28a362d5c6230!8m2!3d23.7545212!4d90.389183!16s%2Fg%2F11xfj3g5x0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
      img: "/assets/farmgate_map.png"
    },
    {
      name: "Mouchak",
      type: "Physical Hub",
      mapLink: "https://www.google.com/maps/place/The+Daily+Pollipran+(Head+Office-2)/@23.7457165,90.4125723,21z/data=!3m1!5s0x3755b88f7aac4b2b:0x8062fc0a1b146769!4m6!3m5!1s0x3755b9a3b630f4a3:0x3ca5b8bc68215c85!8m2!3d23.7456632!4d90.4126352!16s%2Fg%2F11h9bj_l66!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
      img: "/assets/mouchak_map.png"
    },
    {
      name: "Uttara",
      type: "Physical Hub",
      mapLink: "https://www.google.com/maps/search/bluprint+education+uttara/@23.8630759,90.3985802,17.55z/data=!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
      img: "/assets/uttara_map.png"
    },
    {
      name: "Online",
      type: "Digital Hub (Google Meet)",
      mapLink: "#enrollment",
      img: null
    }
  ];

  return (
    <section id="contact">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <span className="badge">Connect With Us</span>
          <h2 className="text-primary">Visit Our Hubs</h2>
          <p>Experience our supportive learning environment firsthand at any of our four hubs.</p>
        </div>

        <div className="grid hub-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '6rem' }}>
          {hubs.map((hub) => (
            <div key={hub.name} className="hub-card-wrapper">
              <a
                href={hub.mapLink}
                className="card hub-card"
                target={hub.name === "Online" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {hub.img ? (
                  <div className="hub-image-container">
                    <img src={hub.img} alt={`${hub.name} Location`} className="hub-thumb" />
                    <div className="hub-overlay">
                      <ExternalLink size={20} />
                      <span>View on Map</span>
                    </div>
                  </div>
                ) : (
                  <div className="hub-icon-only">
                    <Globe className="text-primary" size={32} strokeWidth={1.5} />
                  </div>
                )}
                <div className="hub-info">
                  <h3 style={{ marginTop: '1.25rem', marginBottom: '0.4rem', fontSize: '1.25rem' }}>{hub.name}</h3>
                  <p className="badge" style={{ fontSize: '0.6rem', marginBottom: 0, padding: '0.3rem 0.75rem' }}>{hub.type}</p>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="contact-footer-group">
          <div className="card contact-card">
            <h3 className="text-primary">Official Channels</h3>
            <p>Our admissions team is ready to assist you. Reach out through any of our standardized digital and telephonic channels:</p>

            <div className="contact-methods">
              <div className="method">
                <div className="icon-box-small">
                  <Phone size={20} className="text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="method-label">Phone Support</p>
                  <p className="method-value">01581 455910</p>
                  <p className="method-value">01617 171944</p>
                </div>
              </div>

              <div className="method">
                <div className="icon-box-small">
                  <Mail size={20} className="text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="method-label">Email</p>
                  <p className="method-value">blueprinteducationbd@gmail.com</p>
                </div>
              </div>

              <div className="method">
                <div className="icon-box-small">
                  <Facebook size={20} className="text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="method-label">Facebook</p>
                  <p className="method-value">Blueprint Education</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-final text-center">
            <h2 className="text-primary">Design Your Success</h2>
            <p>"With the right guidance, you can be next." Admission is ongoing for the next batch. Secure your spot today.</p>
            <a href="#enrollment" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>Secure My Seat</a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hub-card {
          text-align: center;
          padding: 1.5rem !important;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          transition: var(--transition);
          overflow: hidden;
        }
        
        .hub-card:hover {
          border-color: var(--primary) !important;
        }

        .hub-image-container {
          width: 100%;
          aspect-ratio: 4/3;
          position: relative;
          border-radius: 0.75rem;
          overflow: hidden;
          background: var(--bg-alt);
        }

        .hub-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .hub-card:hover .hub-thumb {
          transform: scale(1.1);
        }

        .hub-overlay {
          position: absolute;
          inset: 0;
          background: rgba(30, 64, 175, 0.8);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: white;
          opacity: 0;
          transition: opacity 0.3s ease;
          font-weight: 700;
          font-size: 0.875rem;
        }

        .hub-card:hover .hub-overlay {
          opacity: 1;
        }

        .hub-icon-only {
          width: 100%;
          aspect-ratio: 4/3;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-alt);
          border-radius: 0.75rem;
        }

        .icon-box-small {
          width: 3rem;
          height: 3rem;
          background: rgba(30, 64, 175, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.75rem;
          flex-shrink: 0;
        }
        
        .contact-footer-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        
        .contact-methods {
          margin-top: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .method {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        
        .method p {
          margin: 0;
        }
        
        .method-label {
          font-weight: 800;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          color: var(--primary);
          margin-bottom: 0.25rem !important;
        }
        
        .method-value {
          color: var(--text-main) !important;
          font-weight: 600;
          font-size: 1.125rem;
        }
        
        .cta-final h2 {
          font-size: 3.5rem;
          margin-bottom: 2rem;
        }
        
        .cta-final p {
          font-size: 1.25rem;
          margin-bottom: 3rem;
          font-style: italic;
        }

        @media (max-width: 1200px) {
          .hub-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 992px) {
          .contact-footer-group {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }
          .method {
            justify-content: flex-start;
          }
        }

        @media (max-width: 600px) {
          .hub-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
};

export default Contact;
