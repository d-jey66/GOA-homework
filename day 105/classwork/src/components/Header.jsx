import React from 'react';
import { navigation } from '../constants';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          {navigation.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
