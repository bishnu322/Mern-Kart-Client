import React from "react";

interface IProps {
  children: React.ReactNode;
}
const AdminBodyTitle: React.FC<IProps> = ({ children }) => {
  return (
    <h1 className="text-xl font-semibold text-gray-800 my-1">{children}</h1>
  );
};

export default AdminBodyTitle;
