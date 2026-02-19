import React from 'react'

function DarkModeToggle ({darkMode, toggleDarkMode}) {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={()=> toggleDarkMode(!darkMode)}
    style={{marginBottom: '20px', padding: '8px 14px', borderRadius: '4px', border: 'none', cursor: 'pointer'}}
    
    >
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
