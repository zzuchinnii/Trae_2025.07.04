import React from 'react';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <span className="text-2xl font-bold text-gray-800 hover:text-blue-500">
        Petaloom
      </span>
    </Link>
  );
};

export default Logo;