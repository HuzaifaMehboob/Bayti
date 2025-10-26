import { BiSearch } from "react-icons/bi";

interface SearchbarProps {
    placeholder?: string;
    data?: any[];
    searchedValue?: string;
    setSearchedValue?: (value: string) => void | undefined;

}

const Searchbar = ({data,placeholder,setSearchedValue, searchedValue}: SearchbarProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setSearchedValue?.(newValue);
    };

  return (
    <div className="w-full h-full">
    <div className='w-full h-full px-2 gap-3 bg-transparent border-1 border-[#ADADAD] rounded-[8px] flex items-center'>
        <BiSearch size={22} className="text-gray-700"/>
        <input placeholder={placeholder || 'شهر مورد نظر را اضافه کنید'}
        value={searchedValue}
        onChange={handleChange}
        className="flex flex-1 outline-none"
        />
        {/* {searchedValue && (
            <div className="px-2 gap-2 py-1 border-1 border-[#ADADAD] rounded-[8px] flex items-center">
                {searchedValue || 'تهران'}
                <RxCross2 size={15}/>
            </div>
        )} */}

    </div>
    <div className={`relative mt-1 p-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 ${searchedValue ? 'block' : 'hidden'}`}>
          {data?.map((item, index) => (
            <div
              key={index}
              className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
              onClick={() => setSearchedValue?.(item)}
            >
              {item}
            </div>
          ))}
          {!data?.length && (
            <div className="px-2 py-1 text-gray-500">
              {searchedValue ? 'No results found' : 'Type to search'}
            </div>
          )}
    </div>
    </div>
  )
}

export default Searchbar