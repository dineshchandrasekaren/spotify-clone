import React from "react";

const RoundedCard = ({
  children,
  flex = 1,
}: {
  children: React.ReactNode;
  flex?: number;
}) => (
  <div className={`rounded-lg bg-zinc-900 p-4 flex-${flex}`}>{children}</div>
);

export default RoundedCard;
