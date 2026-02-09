import React from 'react';
import { BookOpen, Users, Headset, Zap, Target, Layout } from 'lucide-react';

const Features = () => {
    const benefits = [
        {
            icon: <BookOpen strokeWidth={1.5} />,
            title: "Master the Syllabus",
            description: "Stay ahead with carefully curated lecture sheets and study materials updated for the latest exam trends."
        },
        {
            icon: <Users strokeWidth={1.5} />,
            title: "Expert Mentorship",
            description: "Navigate the path to success with professional guidelines and regular assessments that track your growth."
        },
        {
            icon: <Headset strokeWidth={1.5} />,
            title: "24/7 Rapid Support",
            description: "Never get stuck on a problem; our continuous online support ensures your questions are answered instantly."
        },
        {
            icon: <Zap strokeWidth={1.5} />,
            title: "High-Energy Learning",
            description: "Thrive in a supportive environment with fun, engaging instructors who make complex topics easy to grasp."
        },
        {
            icon: <Target strokeWidth={1.5} />,
            title: "Focused Growth",
            description: "Get the personalized attention you need to bridge your specific learning gaps and maximize your score."
        },
        {
            icon: <Layout strokeWidth={1.5} />,
            title: "Real-Exam Rigor",
            description: "Build confidence with rigorous mock exams designed to replicate the exact pressure of the real admission test."
        }
    ];

    return (
        <section id="why-choose-us" className="bg-alt">
            <div className="container">
                <div className="text-center" style={{ marginBottom: '5rem' }}>
                    <span className="badge">Why Blueprint?</span>
                    <h2 className="text-primary">Bridging Potential and Performance</h2>
                    <p style={{ maxWidth: '650px', margin: '0 auto' }}>
                        Our methodology is designed to turn potential into performance through a nurturing, accessible learning environment rooted in academic mastery.
                    </p>
                </div>

                <div className="grid grid-3x2">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="card">
                            <div className="icon-box">
                                {benefit.icon}
                            </div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
