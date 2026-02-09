import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle Theme"
            style={{
                position: 'fixed',
                top: '2rem',
                right: '2rem',
                zIndex: 1000,
                width: '3.5rem',
                height: '3.5rem',
                borderRadius: '50%',
                backgroundColor: 'var(--primary)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                transition: 'var(--transition)'
            }}
        >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}

            <style dangerouslySetInnerHTML={{
                __html: `
        .theme-toggle:hover {
          transform: scale(1.1) rotate(10deg);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
        }
        
        .theme-toggle:active {
          transform: scale(0.95);
        }
      `}} />
        </button>
    );
};

export default ThemeToggle;
