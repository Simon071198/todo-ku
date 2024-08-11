import React from 'react';

function Footer() {
  const date = new Date().getFullYear();
  console.log('year', date);

  return (
    // <div>
    <footer>
      <p>Copyright ©️ {date}</p>
    </footer>
    // </div>
  );
}

export default Footer;
