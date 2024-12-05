import React, { useState, useEffect } from 'react';

const ModeToggle = () => {
  // Load dark mode preference from localStorage or default to false (light mode)
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // On component mount, check the saved mode from localStorage
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
      // Set dark mode if 'dark' is found in localStorage
      setIsDarkMode(true);
      document.body.classList.add('dark'); // Apply dark class to body
    } else {
      // Default to light mode if no saved preference
      setIsDarkMode(false);
      document.body.classList.remove('dark'); // Ensure light mode is applied
    }
  }, []);

  // Handle the toggle switch
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove('dark');
      localStorage.setItem('mode', 'light'); // Save light mode to localStorage
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('mode', 'dark'); // Save dark mode to localStorage
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleMode}
        className="w-12 h-6 bg-gray-300 rounded-full relative"
      >
        <span
          className={`w-6 h-6 bg-white rounded-full absolute top-0 left-0 transition-all ${
            isDarkMode ? 'translate-x-6' : ''
          }`}
        />
      </button>
    </div>
  );
};

export default ModeToggle;
