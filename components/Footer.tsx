import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="relative flex justify-center snap-end">
      <span className="absolute bottom-3 mx-auto text-[rgba(128,128,128,1)]">
        @ Copyright Sagi Mines {new Date().getFullYear()}
      </span>
    </footer>
  );
};

export default Footer;
