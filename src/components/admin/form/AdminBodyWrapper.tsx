import type React from "react";

interface IProps {
  children: React.ReactNode;
}

const AdminBodyWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <div className="p-2 mt-2 border border-gray-300 rounded shadow min-h-[600px]">
      {children}
    </div>
  );
};

export default AdminBodyWrapper;
