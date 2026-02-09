import React from 'react';

const Team = () => {
    const instructors = [
        {
            name: "Math Specialist",
            role: "IBA BBA Instructor",
            image: "/assets/team/math-1.jpg"
        },
        {
            name: "English Head",
            role: "IBA BBA Instructor",
            image: "/assets/team/english-1.jpg"
        },
        {
            name: "Senior Mentor",
            role: "IBA BBA Instructor",
            image: "/assets/team/instructor-3.jpg"
        }
    ];

    return (
        <section id="team" className="team-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="badge">Our Mentors</span>
                    <h2 className="text-primary">Meet The Team</h2>
                    <p className="subtitle">
                        Learn from the best. Our instructors are top scorers from IBA and major universities,
                        dedicated to designing your success.
                    </p>
                </div>

                <div className="team-grid">
                    {instructors.map((member, index) => (
                        <div key={index} className="team-card">
                            <div className="team-image">
                                <img src={member.image} alt={member.name} />
                                <div className="team-overlay">
                                    <div className="team-info">
                                        <h3>{member.name}</h3>
                                        <p>{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .team-section {
                    background: var(--bg-card);
                    padding: 8rem 0;
                }
                
                .section-header {
                    margin-bottom: 4rem;
                    max-width: 700px;
                    margin-left: auto;
                    margin-right: auto;
                }
                
                .subtitle {
                    color: var(--text-muted);
                    font-size: 1.1rem;
                    margin-top: 1rem;
                }
                
                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2.5rem;
                }
                
                .team-card {
                    background: var(--bg-main);
                    border-radius: 2rem;
                    overflow: hidden;
                    box-shadow: 0 10px 30px -10px var(--shadow);
                    transition: var(--transition);
                    border: 1px solid var(--border);
                }
                
                .team-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px -15px var(--shadow);
                }
                
                .team-image {
                    position: relative;
                    aspect-ratio: 1/1;
                    overflow: hidden;
                }
                
                .team-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    display: block;
                    background: #f8fafc;
                }
                
                .team-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(30, 64, 175, 0.9), transparent);
                    display: flex;
                    align-items: flex-end;
                    padding: 2rem;
                    opacity: 0;
                    transition: var(--transition);
                }
                
                .team-card:hover .team-overlay {
                    opacity: 1;
                }
                
                .team-info h3 {
                    color: white;
                    margin: 0;
                    font-size: 1.25rem;
                }
                
                .team-info p {
                    color: rgba(255, 255, 255, 0.8);
                    margin: 0.25rem 0 0;
                    font-size: 0.9rem;
                    font-weight: 500;
                }

                @media (max-width: 768px) {
                    .team-section {
                        padding: 4rem 0;
                    }
                    .section-header {
                        margin-bottom: 2.5rem;
                    }
                    .team-grid {
                        grid-template-columns: 1fr;
                        max-width: 400px;
                        margin: 0 auto;
                        gap: 1.5rem;
                    }
                    .team-overlay {
                        opacity: 1;
                        padding: 1.25rem;
                    }
                }

                @media (max-width: 480px) {
                    .team-section {
                        padding: 3rem 0;
                    }
                    .team-card {
                        border-radius: 1rem;
                    }
                    .team-overlay {
                        padding: 1rem;
                    }
                    .team-info h3 {
                        font-size: 1rem;
                    }
                    .team-info p {
                        font-size: 0.8rem;
                    }
                    .subtitle {
                        font-size: 0.95rem;
                    }
                }
            `}} />
        </section>
    );
};

export default Team;
