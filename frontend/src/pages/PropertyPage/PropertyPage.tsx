import img1 from '../../assets/Photo.png';
import img2 from '../../assets/Photo (1).png';
import img3 from '../../assets/Photo (2).png';
import img4 from '../../assets/Photo (3).png';
import img5 from '../../assets/Photo (4).png';
import { GoShare } from "react-icons/go";
import { GoBookmark } from "react-icons/go";
import PropertyGallerySection from '../../components/PropertyGallerySection/PropertyGallerySection'
import { FaBuilding } from "react-icons/fa"; // Floor
import { FaBed } from "react-icons/fa"; // Bedrooms
import { MdSquareFoot } from "react-icons/md"; // Area
// import { BiMoney, BiCalendar } from "react-icons/bi";
import { extrapropertyDetails, facilities } from '../../constants/PropertyFacilities';
import PropertyCard from '../../components/ui/PropertyCard/PropertyCard';
import AgentInfoCard from '../../components/ui/AgentInfoCard/AgentInfoCard';

const propertyDetails = [
    {
        label: "طبقه",
        value: "۳ از ۴",
        icon: FaBuilding,
    },
    {
        label: "اتاق",
        value: "۲ خواب",
        icon: FaBed,
    },
    {
        label: "متراژ",
        value: "۱۱۵ متر",
        icon: MdSquareFoot,
    },
];


const rentDetails = [
    {
        label: "ودیعه",
        value: "۶۰۰ میلیون تومان",
        // icon: BiMoney,
    },
    {
        label: "اجاره ماهیانه",
        value: "۳۰ میلیون تومان",
        // icon: BiCalendar,
    },
];


const PropertyPage = () => {
    const images = [img1, img2, img3, img4, img5];

    return (
        <div className='mx-auto mt-40 gap-10 max-w-[1220px] w-full px-2 md:px-0 md:w-[90%] '>
            <PropertyGallerySection images={images} />
            <div className='w-full flex justify-between mt-15'>
                <div className='w-full md:w-1/2 space-y-12'>

                    <div className='flex items-center justify-between'>
                        <p className='body-s'>رهن و اجاره آپارتمان تهران</p>
                        <div className='gap-2 flex items-center'>
                            <GoShare size={20} />
                            <GoBookmark size={20} />
                        </div>
                    </div>
                    {/* Property Description */}
                    <div className='space-y-6'>
                        <h3 className='heading-5'>۲۰۰ متر، محدوه ونک، بلوار دانش</h3>
                        <div className='w-full flex items-center py-4 rounded-[12px]  justify-between bg-[#f1efef]'>
                            {propertyDetails?.map((item, index) => (
                                <div key={index} className='flex flex-col items-center justify-center space-y-2 w-1/3'>
                                    <div className='flex items-center gap-2'>
                                        <item.icon />
                                        <p>{item.label}</p>
                                    </div>
                                    <p>{item.value}</p>
                                </div>
                            ))}
                        </div>


                        <div className='space-y-4'>
                            {rentDetails.map((item, index) => (
                                <div key={index} className='w-full py-2 border-1 border-[#E1E1E1] rounded-[8px] flex items-center justify-between px-4'>
                                    <p className='header-4'>{item.label}</p>
                                    <p className='heading-6'>{item.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className='w-full py-2 border-1 border-[#E1E1E1] rounded-[8px] flex items-center justify-between px-4'>
                            <div className='space-y-2'>
                                <p className='heading-6'>ساعاتی پیش تهران</p>
                                <p className='heading-6'>شناسه آگهی: ۲۳۴۴</p>
                            </div>
                            <p className=''>گزارش تخلف آگهی</p>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <h5 className="heading-5">امکانات</h5>
                        <div className='grid grid-cols-2 space-y-4 w-full '>
                            {
                                facilities.map((item,index)=> (
                                    <div className='flex items-center gap-2 ' key={index}>
                                        <item.icon size={20} />
                                        <p className='body-s'>{item.label}</p>
                                        <p>{`: ${item.value}`}</p>
                                    </div>
                                ))
                            }

                        </div>

                    </div>

                        <div className='space-y-4'>
                        <h5 className="heading-5">توضیحات</h5>
                        <div className='space-y-2'>
                            {extrapropertyDetails.map((item) => (
                                <p key={`${item.label}-${item.value}`} className='body-s '>{`${item.label}: ${item.value}`}</p>

                            ))}
                        </div>

                    </div>



                </div>

                <div className='hidden md:w-1/2 mt-32 md:flex justify-center'>
                            <AgentInfoCard/>
                </div>
            </div>
                    <div className='space-y-4 mt-20 '>
                        <h5 className='heading-5'>آگهی‌های مشابه</h5>
                        <div className='flex flex-col md:flex-row items-center space-x-4 overflow-x-auto flex-shrink-0'>
                            {Array.from({length:4}).map((_,index) => (
                                <PropertyCard key={index}/>
                            ))}
                        </div>
                    </div>
        </div>
    )
}

export default PropertyPage