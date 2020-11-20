import React from "react";

type LinkButtonProps = {
  href: string;
  className?: string;
  children: any;
};

const LinkButton = ({ href, className, children }: LinkButtonProps) => {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default LinkButton;
