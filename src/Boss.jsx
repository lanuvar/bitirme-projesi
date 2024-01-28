import React, { useState, useEffect } from 'react';

const Navbar = ({ username }) => {
  return (
    <nav>
      <p>Welcome, {username}</p>
    </nav>
  );
};

const RegistrationForm = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // useEffect içindeki kod, username state'i güncellendiğinde çalışacak
    // ve Navbar'ı güncel bilgilerle tekrar render edecek.
  }, [username]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <label>Username:</label>
      <input type="text" value={username} onChange={handleUsernameChange} />

      {/* Navbar'a username'i prop olarak iletiyoruz */}
      <Navbar username={username} />
    </div>
  );
};

export default RegistrationForm;
