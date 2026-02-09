import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const navLinks = [
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'Team', href: '#team' },
    { label: 'Courses', href: '#courses' },
    { label: 'Results', href: '#results' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/' + href);
    } else {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          <a href="/" className="navbar__logo" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
            <Logo size="sm" />
          </a>

          <div className="navbar__links">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="navbar__link"
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="navbar__actions">
            <button onClick={toggleTheme} className="navbar__theme-btn" aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a
              href="#enrollment"
              className="btn btn-primary navbar__cta"
              onClick={(e) => { e.preventDefault(); handleNavClick('#enrollment'); }}
            >
              Enroll Now
            </a>
            <button
              className="navbar__hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-nav ${mobileOpen ? 'mobile-nav--open' : ''}`}>
        <div className="mobile-nav__links">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav__link"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enrollment"
            className="btn btn-primary mobile-nav__cta"
            onClick={(e) => { e.preventDefault(); handleNavClick('#enrollment'); }}
          >
            Enroll Now
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1rem 0;
          transition: var(--transition);
          background: transparent;
        }

        .navbar--scrolled {
          background: var(--bg-main);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 4px 20px -4px var(--shadow);
          padding: 0.625rem 0;
        }

        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar__logo {
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        .navbar__links {
          display: flex;
          gap: 2rem;
        }

        .navbar__link {
          text-decoration: none;
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: var(--transition);
          position: relative;
        }

        .navbar__link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: var(--transition);
        }

        .navbar__link:hover {
          color: var(--primary);
        }

        .navbar__link:hover::after {
          width: 100%;
        }

        .navbar__actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .navbar__theme-btn {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.625rem;
          border: 1px solid var(--border);
          background: var(--bg-card);
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .navbar__theme-btn:hover {
          color: var(--primary);
          border-color: var(--primary);
          transform: rotate(15deg);
        }

        .navbar__cta {
          padding: 0.625rem 1.5rem;
          font-size: 0.8rem;
        }

        .navbar__hamburger {
          display: none;
          background: none;
          border: none;
          color: var(--text-main);
          cursor: pointer;
          padding: 0.25rem;
        }

        /* Mobile nav overlay */
        .mobile-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 99;
          background: var(--bg-main);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .mobile-nav--open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-nav__links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .mobile-nav__link {
          text-decoration: none;
          color: var(--text-main);
          font-size: 1.5rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: var(--transition);
        }

        .mobile-nav__link:hover {
          color: var(--primary);
        }

        .mobile-nav__cta {
          margin-top: 1rem;
          padding: 1rem 2.5rem;
        }

        @media (max-width: 992px) {
          .navbar__links {
            display: none;
          }
          .navbar__cta {
            display: none;
          }
          .navbar__hamburger {
            display: flex;
          }
        }
      `}} />
    </>
  );
};

export default Navbar;
