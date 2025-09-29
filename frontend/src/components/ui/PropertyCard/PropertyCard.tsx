import product_listing1 from '../../../assets/product_listing1.png';
import { HiBookmark } from "react-icons/hi2";
import { HiOutlineBookmark } from "react-icons/hi";
import { useState } from 'react';

const PropertyCard = () => {
  const [isBookmarked, isSetBookmarked] = useState(false);
  return (
    <div className='w-full max-w-[288px] h-auto md:h-[317px] rounded-lg overflow-hidden border-2 border-gray-200'>
        <div className='h-[100px] md:h-[169px] w-full relative'>
            <img src={product_listing1} className='object-contain' />
            <div className="absolute top-2 left-2 bg-[#0C0C0C]/40 text-white body-xxs md:body-xs px-2 py-1 rounded-md">
          ۲ ساعت پیش
        </div>
        </div>
        <div className='px-[14px] pt-[10px] pb-[24px] space-y-2 md:space-y-1 rtl'>
            <div className='flex items-center justify-between'>
            <p className='body-xs'>رهن و اجاره آپارتمان تهران</p>
            {isBookmarked ? <HiBookmark onClick={()=>isSetBookmarked(true)} size={18}/> : <HiOutlineBookmark onClick={()=>isSetBookmarked(false)} size={18}/>}
            </div>
            <p className='body-xs'>۱۳۸ متر، ساقدوش، بنی فاطمه، گلستان</p>
            <p className='heading-6'>۱ میلیارد تومان رهن</p>
            <p className='heading-6'>۳۰ میلیون تومان اجاره</p>
        </div>

    </div>
  )
}

export default PropertyCard