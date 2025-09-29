import React from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router";

interface IProps {
  LinkTo?: string;
  onClick?: () => void;
}

const ActionButton: React.FC<IProps> = ({ LinkTo, onClick }) => {
  return (
    <div className="flex justify-center gap-2">
      {LinkTo && (
        <Link
          to={`/admin/${LinkTo}`}
          className="text-orange-500 cursor-pointer hover:text-orange-400"
        >
          <FaEdit size={22} />
        </Link>
      )}
      {onClick && (
        <span className="text-red-500 cursor-pointer hover:text-red-400">
          <FaRegTrashAlt size={22} onClick={onClick} />
        </span>
      )}
    </div>
  );
};

export default ActionButton;
