import React from "react";

interface TableTitleProps {
  children: string;
  className?: string;
}

const TableTitle: React.FC<TableTitleProps> = ({ children, className = "" }) => {
  return (
    <h2 className={`text-xl font-semibold text-gray-800 mb-4 ${className}`}>
      {children}
    </h2>
  );
};

export default TableTitle;