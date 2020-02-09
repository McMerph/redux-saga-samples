import React from 'react';
import { Link } from 'gatsby';

export default function IndexPage() {
  return (
    <ul>
      <li>
        <Link to="/counter/">Counter</Link>
      </li>
      <li>
        <Link to="/auth/">Auth</Link>
      </li>
    </ul>
  );
}
