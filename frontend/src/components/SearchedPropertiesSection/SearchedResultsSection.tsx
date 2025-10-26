import React from 'react'
import { useTranslation } from 'react-i18next'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiBars4 } from "react-icons/hi2";
import PropertyCard from '../ui/PropertyCard/PropertyCard';
import AdditionalFiltersModal from '../dialogs/AdditionalFiltersModal';

const SearchedResultsSection = () => {
    const { t, i18n } = useTranslation();
    const [openFilterModal, setOpenFilterModal] = React.useState(false);

    return (
        <div className='w-full h-auto '>
            <h1 className='text-[#353535] heading-3'>{t('SearchResults.relatedRealEstateOffices')}</h1>
            <div className='w-full flex items-center justify-between'>
                <p className='text-[#CB1B1B] body-xs !font-semibold'>{t('SearchResults.rentalPropertiesFound')}</p>
                {openFilterModal && (<AdditionalFiltersModal setOpenFilterModal={setOpenFilterModal}/>)}
                <button onClick={()=>setOpenFilterModal(true)}className='py-2 border-1 border-[#ADADAD] px-3 gap-2 flex items-center rounded-[8px]'>
                    <HiBars4 size={15} />
                    <p>{t('filters.moreFilters')}</p>
                    <MdOutlineKeyboardArrowDown size={15} />
                </button>
            </div>
            <div className="grid grid-cols-2 mt-10 gap-2 md:gap-6 space-y-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <PropertyCard key={index} />
                ))}
            </div>

        </div>
    )
}

export default SearchedResultsSection