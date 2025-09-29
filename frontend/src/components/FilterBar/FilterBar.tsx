import {useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbFilterSearch } from "react-icons/tb";
import Searchbar from '../Searchbar/Searchbar';

const FilterBar = () => {
    const { t, i18n } = useTranslation();
    const filters = t('filters.filterMaps', { returnObjects: true })

    useEffect(() => {
        document.documentElement.lang = i18n.language;
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    }, [i18n.language]);

    return (
        <div className='h-12 mx-auto gap-3 flex items-center max-w-[1220px] w-full md:w-[90%] '>
            <div className='hidden md:visible'>
                {filters.map((filter,index) => (
                    <button className='py-1 border-1 border-[#ADADAD] px-3 gap-2 flex items-center rounded-[8px]'>
                        {filter.name}
                        <MdOutlineKeyboardArrowDown size={15} />
                    </button>
                ))}

            </div>
            <button className='py-1 border-1 md:visible hidden border-[#ADADAD] px-3 gap-2 flex items-center rounded-[8px]'>
                    <TbFilterSearch size={15} />
                    <p>{t('filters.moreFilters')}</p>
            </button>
            <div className='flex w-[90%] mx-auto md:mx-0 md:flex-1 h-full'>
                <Searchbar placeholder={t('filters.addCity')} searchedValue={t('filters.tehran')}/>
            </div>

        </div>
    )
}

export default FilterBar