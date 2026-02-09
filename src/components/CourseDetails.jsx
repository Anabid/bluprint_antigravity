import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = () => {

  return (
    <section id="courses" className="bg-alt">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <span className="badge">Program Architecture</span>
          <h2 className="text-primary">IBA & BUP Admission Course</h2>
          <p>Our 32-topic pedagogical structure is meticulously updated for real exam rigor.</p>
        </div>

        <div className="course-breakdown grid">
          <div className="card">
            <h3 className="text-primary">Core Curriculum</h3>
            <ul className="details-list">
              <li><span>16</span> Intensive Math Classes</li>
              <li><span>12</span> Comprehensive English Classes</li>
              <li><span>3</span> Focused Analytical Classes</li>
              <li><span>2</span> General Knowledge (GK) Classes</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-primary">Rigorous Assessment</h3>
            <ul className="details-list">
              <li><span>10+</span> IBA-Standard Mock Tests</li>
              <li><span>3-5</span> BUP-Standard Mock Tests</li>
              <li>Frequent Solve Classes</li>
              <li>24/7 Dedicated Online Support</li>
            </ul>
          </div>
        </div>

        <div className="syllabus-cta text-center" style={{ marginTop: '6rem' }}>
          <h3 className="text-primary">Master Our 32-Topic Blueprint</h3>
          <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            Get access to our standardized course outline designed to bridge the gap between high school potential and IBA elite standards.
          </p>
          <Link to="/topic-outline" className="btn btn-primary">View Full 32-Topic Outline</Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .course-breakdown {
          grid-template-columns: repeat(2, 1fr);
        }
        
        .details-list {
          list-style: none;
          margin-top: 2rem;
        }
        
        .details-list li {
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          color: var(--text-main);
          font-weight: 500;
        }
        
        .details-list li span {
          color: var(--primary);
          font-weight: 800;
          font-size: 1.5rem;
          min-width: 2.5rem;
        }
        
        .table-container {
          overflow-x: auto;
          background: var(--bg-card);
          border-radius: 1.5rem;
          border: 1px solid var(--border);
          box-shadow: 0 25px 50px -12px var(--shadow);
        }
        
        .syllabus-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        
        .syllabus-table th, .syllabus-table td {
          padding: 1.25rem 2rem;
          border-bottom: 1px solid var(--border);
          color: var(--text-main);
        }
        
        .syllabus-table th {
          background: rgba(30, 64, 175, 0.1);
          color: var(--primary);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          font-weight: 700;
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

        @media (max-width: 768px) {
          .course-breakdown {
            grid-template-columns: 1fr;
          }
          .syllabus-table th, .syllabus-table td {
            padding: 1rem;
          }
        }
      `}} />
    </section>
  );
};

export default CourseDetails;
