import React, { useEffect, useState } from 'react';
 
const PermisionComponet = ({ children }) => {
  const [redirect, setRedirect] = useState(false);
  const [showContent, setShowContent] = useState(true);  

  useEffect(() => {
    const _token = localStorage.getItem('accessTokennnnn');
    if (!!!_token) {
      setRedirect(true);
    }
  }, []);

  useEffect(() => {
    if (redirect) {
      setShowContent(false);
    }
  }, [redirect]);

  const handleFormSubmit = (e) => {
    if (redirect) {
      e.preventDefault(); 
    }
  };

  return (
    <div>
      {showContent ? (
        <form onSubmit={handleFormSubmit}>
          {children}
        </form>
      ) : (''
      )}
    </div>
  );
};

export default PermisionComponet;