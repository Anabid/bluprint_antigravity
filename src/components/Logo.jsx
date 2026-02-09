import React from 'react';

const Logo = ({ size = "md" }) => {
    // We'll use CSS to toggle between the two logo versions based on the theme
    const height = size === "lg" ? "140px" : "90px";

    return (
        <div className="logo-container" style={{ display: 'flex', alignItems: 'center' }}>
            <img
                src="/assets/brand/logo-blue.png"
                alt="Blueprint By Scholars"
                className="logo-img logo-light"
                style={{ height: height, width: 'auto', display: 'block' }}
            />
            <img
                src="/assets/brand/logo-white.png"
                alt="Blueprint By Scholars"
                className="logo-img logo-dark"
                style={{ height: height, width: 'auto', display: 'none' }}
            />
            <style jsx="true">{`
                [data-theme='dark'] .logo-light {
                    display: none !important;
                }
                [data-theme='dark'] .logo-dark {
                    display: block !important;
                }
            `}</style>
        </div>
    );
};

export default Logo;
