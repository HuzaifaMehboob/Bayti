import logo from '../../../assets/Ellipse 8.png';
import { useTranslation } from 'react-i18next';

const PropertyReviewCard = () => {
    const {t} = useTranslation();
  return (
    <div className="w-[282px] h-[335px] space-y-3 px-6 py-[32px] border-1 border-[#EDEDED] text-[#505050] text-center rounded-[16px] flex flex-col items-center">
        <img src={logo} className='w-[60px] h-[60px]' />
        <p>{t('reviewDemo.reviewer_name')}</p>
        <div className='pb-2 border-b-3 border-b-[#CB1B1B]'>{t('reviewDemo.rating_text')}</div>
        <p className='body-xxxs !text-[#505050]'>{t('reviewDemo.review')}</p>

    </div>
  )
}

export default PropertyReviewCard