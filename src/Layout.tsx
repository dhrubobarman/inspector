import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="container py-8">{children}</div>;
};

export default Layout;
