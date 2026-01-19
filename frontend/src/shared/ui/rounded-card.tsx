import React from "react";

const RoundedCard = ({
  children,
  flex = 1,
}: {
  children: React.ReactNode;
  flex?: number;
}) => (
  <div className={`rounded-lg bg-zinc-900 md:p-4 p-2 flex-${flex}`}>
    {children}
  </div>
);

export default RoundedCard;
