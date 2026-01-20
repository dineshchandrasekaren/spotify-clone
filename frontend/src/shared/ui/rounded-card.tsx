import React from "react";

const RoundedCard = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div className={`rounded-lg  bg-zinc-900 md:p-4 p-2  ${className}`}>
    {children}
  </div>
);

export default RoundedCard;
