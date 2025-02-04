import React, { useEffect, useState } from 'react';
import './Loading.css'; // Create and import a separate CSS file for styling

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Use useEffect to set a timeout for hiding the spinner after 1-2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set to false after 1.5 seconds
    }, 1500); // 1.5 seconds timeout

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  // If not loading, return null (or your actual content)
  if (!isLoading) {
    return null; // This could be your app content or the next page
  }

  return (
    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
