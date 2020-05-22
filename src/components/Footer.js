import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; { new Date().getFullYear() }, Created by Mika Lehtinen | <a href="https://lehtidigital.se" target="_blank">Lehtidigital.se</a></p>
        
      </Container>
    </footer>
  );
};

export default Footer;
