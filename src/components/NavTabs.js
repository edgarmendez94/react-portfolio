import React from 'react';

const styles = {
  navStyle: {
    background: '#f4b9b2',
  },
  txtStyle: {
    color: "black",
  },

};


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav style={styles.navStyle}> 
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
        style={styles.txtStyle}
          href="#AboutMe"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
        style={styles.txtStyle}
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
        style={styles.txtStyle}
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
        style={styles.txtStyle}
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me

        </a>
      </li>
    </ul>
    </nav>
  );
}

export default NavTabs;
