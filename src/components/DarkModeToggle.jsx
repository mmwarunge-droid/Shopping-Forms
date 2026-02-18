function DarkModeToggle ({darkMode, setDarkMode}) {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={()=> setDarkMode(!darkMode)} style={{ marginBottom: '20px' }}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
