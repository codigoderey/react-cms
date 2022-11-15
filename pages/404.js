import Link from 'next/link';
import React from 'react';

const Page404 = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Go back to home</Link>
    </main>
  );
};

export default Page404;
