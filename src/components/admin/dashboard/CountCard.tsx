import React from "react";

interface IProps {
  label: string;
  count: number;
}

const CountCard: React.FC<IProps> = ({ count, label }) => {
  return (
    <div className="flex flex-col w-full p-3 border border-dashed shadow-xl border-violet-400  bg-violet-100 rounded-md">
      <h1 className="text-xl font-bold text-gray-800">{label}</h1>
      <span className="text-xl font-bold text-end text-violet-600">
        {count}
      </span>
    </div>
  );
};

export default CountCard;
