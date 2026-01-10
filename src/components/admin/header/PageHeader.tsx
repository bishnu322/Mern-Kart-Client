import React from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router";

interface IProps {
  title: string;
  subTitle?: string;
  linkTo?: string;
  buttonText?: string;
}

const PageHeader: React.FC<IProps> = ({
  title,
  subTitle,
  linkTo,
  buttonText,
}) => {
  return (
    <div className="flex items-center justify-between p-2 border border-gray-300 rounded shadow">
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold text-gray-700">{title}</h1>
        <p className="text-[15px] ml-1 text-gray-500 font-semibold">
          {subTitle}
        </p>
      </div>
      <div>
        {buttonText && linkTo && (
          <Link
            to={linkTo}
            className="flex items-center p-2 px-3 text-sm font-bold rounded cursor-pointer bg-violet-600 gap-1 text-gray-50 hover:bg-violet-700"
          >
            <IoMdAdd size={20} />
            <p>{buttonText}</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
