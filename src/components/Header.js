import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        
        <Link to="/">Just another Corona tracker</Link>
        {/* <ul>
          <li>
            <Link to="/page-2/">Page 2</Link>
          </li>
        </ul> */}
      </Container>
    </header>
  );
};

export default Header;
