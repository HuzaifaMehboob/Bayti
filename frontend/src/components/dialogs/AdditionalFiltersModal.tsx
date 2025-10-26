import React from 'react'
import { useTranslation } from 'react-i18next';
import { MdOutlineCancel } from "react-icons/md";

const AdditionalFiltersModal = ({setOpenFilterModal}: {setOpenFilterModal: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const {t, i18n} = useTranslation();

  const filters = t('AdditionalFilters.filters', { returnObjects: true }) as any[];
   const [selectedOptions, setSelectedOptions] = React.useState<{ [key: number]: string }>({});

  const handleSelect = (filterIndex: string, option: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [filterIndex]: option
    }));
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        setOpenFilterModal(false);
      }
    };
  return (
     <div
      className="fixed inset-0 bg-black/20  flex flex-col items-center justify-center z-99999"
      onClick={handleOverlayClick}
      >
         <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="userlogin-title"
        className="bg-white rounded-2xl shadow-lg w-full max-w-[90%] md:max-w-1/2 mx-4 p-6 relative animate-fadeIn max-h-[90vh] overflow-y-auto"
      >
        <div>
          <div>
            <div className='w-1/2 flex items-center justify-between'>
              <button onClick={()=>setOpenFilterModal(false)}><MdOutlineCancel size={22}/></button>
              <h4 className='header-4'>{t("filters.name")}</h4>
            </div>

            <div className='flex flex-col my-3'>
              {filters?.map((filter,index)=>(
                <div key={index} className='space-y-1 flex flex-col my-2'>
                  <h5 className='header-7'>{filter.heading}</h5>
                  <div className='flex max-w-fit border border-gray-400 rounded-md overflow-hidden '>
                    {filter.options.map((option, idx) => {
                      const isSelected = selectedOptions[filter.heading] === option;
                      return (
                      <span key={idx} onClick={()=>handleSelect(filter.heading,option)} className={`border flex hover:cursor-pointer items-center justify-center border-gray-300 px-5 py-1 caption-lg ${isSelected 
                            ? 'bg-[#CB1B1B] text-white' 
                            : 'text-gray-700 hover:bg-gray-100'}`} caption-lg>
                        {option}
                      </span>
                      );
                    })}
                  </div>
                </div>
              ))}

            </div>

           <div className="flex gap-4 mt-6">
            <button className="bg-[#CB1B1B] text-white px-6 py-2 rounded-md hover:bg-[#a51414] transition">
              {t("AdditionalFilters.buttons.search")}
            </button>
            <button
              className="border border-gray-400 px-6 py-2 rounded-md hover:bg-gray-100 transition"
              onClick={() => setSelectedOptions({})}
            >
              {t("AdditionalFilters.buttons.reset")}
            </button>
          </div>
             
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default AdditionalFiltersModal