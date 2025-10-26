import React from 'react'
import { RxCross2 } from "react-icons/rx";

type OptionShape = string | { label: string; value: string };

interface DropdownProps {
  className?: string;
  options?: OptionShape[];
  value?: string | number;
  onChange?: (value: string) => void;
  children?: React.ReactNode;
  type?: 'select' | 'range';
  min?: number;
  max?: number;
}

const Dropdown = ({ className, options, value, onChange, children, type = 'select', min, max }: DropdownProps) => {
  // normalize options to {label,value}
  const normalized = (options ?? []).map((opt) =>
    typeof opt === 'string' ? { label: opt, value: opt } : opt
  ) as { label: string; value: string }[];

  const valueStr = value === undefined || value === null ? '' : String(value);

  // if the passed value doesn't match any option, inject it so the select displays it
  const hasValueInOptions = normalized.some((o) => o.value === valueStr);

  return (
    <div className={className}>
      <RxCross2 size={18} className="absolute top-2 right-2 cursor-pointer" onClick={() => onChange?.('')} />
      {children}
    </div>
  );
};

export default Dropdown;