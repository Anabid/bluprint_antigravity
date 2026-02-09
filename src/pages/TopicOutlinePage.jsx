import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const TopicOutlinePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const syllabus = [
    { id: 1, subject: "Math", topic: "Numbers Basics" },
    { id: 2, subject: "English", topic: "Grammar Review" },
    { id: 3, subject: "Math", topic: "Fractions & Ratio" },
    { id: 4, subject: "English", topic: "Phrase/Sentence" },
    { id: 5, subject: "Math", topic: "Numbers Advanced" },
    { id: 6, subject: "Math", topic: "Percentage" },
    { id: 7, subject: "English", topic: "Subject-Verb" },
    { id: 8, subject: "Math", topic: "Profit-Loss" },
    { id: 9, subject: "English", topic: "Pronouns" },
    { id: 10, subject: "Math", topic: "Inequalities & Interest" },
    { id: 11, subject: "English", topic: "Subjunctive" },
    { id: 12, subject: "Math", topic: "Average & Age" },
    { id: 13, subject: "English", topic: "Conditionals" },
    { id: 14, subject: "Math", topic: "Mixture" },
    { id: 15, subject: "English", topic: "Adjective/Adverb" },
    { id: 16, subject: "Math", topic: "Speed, Distance & Time" },
    { id: 17, subject: "English", topic: "Comparison" },
    { id: 18, subject: "Math", topic: "Work Done" },
    { id: 19, subject: "English", topic: "Connectors" },
    { id: 20, subject: "Math", topic: "Set, Permutation & Probability" },
    { id: 21, subject: "English", topic: "SC" },
    { id: 22, subject: "Math", topic: "Triangles, Polygons" },
    { id: 23, subject: "English", topic: "Error Detection" },
    { id: 24, subject: "Math", topic: "Circles & Solid Geometry" },
    { id: 25, subject: "English", topic: "Reading" },
    { id: 26, subject: "GK", topic: "General Knowledge 1" },
    { id: 27, subject: "English", topic: "Writing" },
    { id: 28, subject: "GK", topic: "General Knowledge 2" },
    { id: 29, subject: "English", topic: "Review Test" },
    { id: 30, subject: "Analytical", topic: "Puzzles" },
    { id: 31, subject: "Analytical", topic: "Data Sufficiency" },
    { id: 32, subject: "Analytical", topic: "Critical Reasoning" },
  ];

  return (
    <div className="page-wrapper">
      <header className="page-header container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>
        <Link to="/" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--border)', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: '600', color: 'var(--text-main)', textDecoration: 'none' }}>
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </header>

      <section className="syllabus-page-content">
        <div className="container">
          <div className="text-center section-header-block">
            <span className="badge">Academic Mastery</span>
            <h1 className="text-primary">Standardized 32-Topic Outline</h1>
            <p style={{ maxWidth: '700px', margin: '0 auto' }}>
              Our meticulously structured pedagogical system ensures students master every variable of the IBA and BBA entrance examinations.
            </p>
          </div>

          <div className="table-container">
            <table className="syllabus-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Subject</th>
                  <th>Topic Name</th>
                </tr>
              </thead>
              <tbody>
                {syllabus.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id.toString().padStart(2, '0')}</td>
                    <td className="subject-col">{item.subject}</td>
                    <td className="topic-col">{item.topic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="syllabus-footer text-center" style={{ marginTop: '4rem' }}>
            <p className="text-muted" style={{ fontWeight: '500' }}>
              Note: The course outline is tentative and may be subject to change to better serve student needs.
              Solve classes are held frequently to address and clarify any difficulties.
            </p>
            <div style={{ marginTop: '3rem' }}>
              <Link to="/#enrollment" className="btn btn-primary">Secure My Seat Now</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{
        __html: `
        .page-wrapper {
          min-height: 100vh;
          background-color: var(--bg-main);
        }

        .syllabus-page-content {
          padding-top: 4rem;
          padding-bottom: 8rem;
        }

        .table-container {
          overflow-x: auto;
          background: var(--bg-card);
          border-radius: 2rem;
          border: 1px solid var(--border);
          box-shadow: 0 40px 60px -15px var(--shadow);
        }

        .syllabus-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .syllabus-table th, .syllabus-table td {
          padding: 1.5rem 2.5rem;
          border-bottom: 1px solid var(--border);
          color: var(--text-main);
        }

        .syllabus-table th {
          background: rgba(30, 64, 175, 0.1);
          color: var(--primary);
          text-transform: uppercase;
          font-size: 0.875rem;
          letter-spacing: 0.2em;
          font-weight: 800;
        }

        .syllabus-table tr:hover {
          background: rgba(30, 64, 175, 0.05);
        }

        .subject-col {
          color: var(--primary);
          font-weight: 700;
        }

        .topic-col {
          color: var(--text-main);
          font-weight: 500;
        }

        .btn-outline:hover {
          background: var(--bg-card);
          border-color: var(--primary) !important;
          color: var(--primary) !important;
        }

        .page-header {
          padding: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        @media (max-width: 768px) {
          .syllabus-page-content {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
          .syllabus-table th, .syllabus-table td {
            padding: 1rem 1.5rem;
          }
          h1 { font-size: 2.5rem; }
        }

        @media (max-width: 480px) {
          .page-header {
            padding: 1.25rem;
            gap: 1rem;
          }
          .syllabus-page-content {
            padding-top: 1.5rem;
            padding-bottom: 3rem;
          }
          .syllabus-table th, .syllabus-table td {
            padding: 0.625rem 0.5rem;
            font-size: 0.75rem;
          }
          .syllabus-table th {
            font-size: 0.65rem;
          }
          .btn-outline {
            padding: 0.5rem 1rem !important;
            font-size: 0.75rem;
          }
          .table-container {
            border-radius: 1rem;
          }
          h1 { font-size: 1.75rem; }
        }
      `}} />
    </div>
  );
};

export default TopicOutlinePage;
