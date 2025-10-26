import React from 'react'
import { RxCross2 } from "react-icons/rx";

type OptionShape = string | { label: string; value: string };

interface DropdownProps {
  className?: string;
  options?: OptionShape[];
  value?: string | number;
  onChange?: (value: string) => void;
  children?: React.ReactNode;
}

const Dropdown = ({ className, onChange, children }: DropdownProps) => {
  // Keep component minimal for now: render children and provide a clear action
  return (
    <div className={className}>
      <RxCross2 size={18} className="absolute top-2 right-2 cursor-pointer" onClick={() => onChange?.('')} />
      {children}
    </div>
  );
};

export default Dropdown;