import React from "react";

interface IProps {
  label: string;
  count: number;
}

const CountCard: React.FC<IProps> = ({ count, label }) => {
  return (
    <div className="flex flex-col border border-dashed border-violet-400  p-3 bg-violet-100 shadow-xl rounded-md w-full">
      <h1 className="text-xl font-bold text-gray-800">{label}</h1>
      <span className="text-end text-violet-600 font-bold text-xl">
        {count}
      </span>
    </div>
  );
};

export default CountCard;
