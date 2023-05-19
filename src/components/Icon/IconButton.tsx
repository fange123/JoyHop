import Image from 'next/image';
import React from 'react';

interface IProps {
  className?: string;
  children: JSX.Element | string;
  icon: string;
}

const IconButton: React.FC<IProps> = ({children, icon, className}) => {
  return (
    <button
      type="button"
      className={`mt-3 flex h-14 w-64 items-center justify-around rounded-md border border-black bg-white text-black shadow-md hover:bg-transparent ${className}`}>
      <div className="mr-3">
        <Image alt="" src={icon} className="h-full w-auto" />
      </div>
      <div>
        <div className="-mt-1 font-sans text-2xl font-semibold">{children}</div>
      </div>
    </button>
  );
};

export default IconButton;
