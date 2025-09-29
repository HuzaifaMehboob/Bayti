import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

interface SearchbarProps {
    placeholder?: string;
    value?: string;
    searchedValue?: string;
}

const Searchbar = ({placeholder, value, searchedValue}: SearchbarProps) => {
  return (
    <div className='w-full h-full px-2 gap-3 bg-transparent border-1 border-[#ADADAD] rounded-[8px] flex items-center'>
        <BiSearch size={22} className="text-gray-700"/>
        <input placeholder={placeholder || 'شهر مورد نظر را اضافه کنید'}
        value={value}
        className="flex flex-1 outline-none"
        />
        {/* {searchedValue && ( */}
            <div className="px-2 gap-2 py-1 border-1 border-[#ADADAD] rounded-[8px] flex items-center">
                {searchedValue || 'تهران'}
                <RxCross2 size={15}/>
            </div>
        {/* )} */}

    </div>
  )
}

export default Searchbar