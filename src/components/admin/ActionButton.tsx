import React from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router";

interface IProps {
  LinkTo: string;
  onClick: () => void;
}

const ActionButton: React.FC<IProps> = ({ LinkTo, onClick }) => {
  console.log(LinkTo);
  return (
    <div className="flex justify-center gap-4">
      <Link to={`/admin/${LinkTo}`} className="text-orange-500 cursor-pointer">
        <FaEdit size={20} />
      </Link>
      <span className="text-red-600 cursor-pointer">
        <FaRegTrashAlt size={20} onClick={onClick} />
      </span>
    </div>
  );
};

export default ActionButton;
