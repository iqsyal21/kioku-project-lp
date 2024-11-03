'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import './style.css';

export default function Layout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from localStorage when Layout mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = savedTheme === 'dark';
    document.documentElement.setAttribute(
      'data-theme',
      prefersDarkMode ? 'dark' : 'light'
    );
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    const newTheme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div data-theme={isDarkMode ? 'dark' : 'light'}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      {children}
    </div>
  );
}
