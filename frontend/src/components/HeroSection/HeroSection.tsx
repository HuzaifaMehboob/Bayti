import coverImage from '../../assets/Landing photo (1).png';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { IoSearch } from "react-icons/io5";

const HeroSection = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        document.documentElement.lang = i18n.language;
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
      }, [i18n.language]);

  return (
    <div
      className="h-[690px] w-full bg-center bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url("${coverImage}")` }}
    >
      {/* Example overlay if needed */}
      <div className="absolute inset-0 max-w-fit text-center mx-auto flex flex-col items-center mt-28 justify-center">
        <h2 className='display-2 text-[#EDEDED] mb-3'>{t('hero.title')}</h2>
        <h4 className='heading-3 text-[#EDEDED] mb-12'>{t('hero.subtitle')}</h4>
        <div className='px-4 py-2 w-[80%] md:w-[600px] lg:w-[816px] h-[108px] bg-white rounded-2xl'>
            <div className='flex w-full border-b-[#ADADAD] border-b-2 justify-between items-center'>
                <button className='w-1/2 py-1 text-lg'>{t('hero.buy')}</button>
                <button className='w-1/2 py-1 text-lg'>{t('hero.rent')}</button>
            </div>
            <div className='flex items-center gap-2 h-[40px] my-2'>
                <IoSearch size={20} color={'#505050'} />
                <input placeholder={t('hero.searchPlaceholder')} className='outline-none focus-none menu_items'/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
