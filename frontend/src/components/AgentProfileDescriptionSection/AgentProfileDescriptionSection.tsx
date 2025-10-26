import { CiLocationOn } from "react-icons/ci";
import { BsHouseCheck } from "react-icons/bs";
import { GoShare } from "react-icons/go";
import { GoBookmark } from "react-icons/go";
import i18n from "../../i18n";

const AgentProfileDescriptionSection = () => {
    return (
        <div className='mx-auto mt-40 gap-10 max-w-[1220px] w-full px-2 md:px-0 md:w-[90%] '>
            <div className='w-full h-auto flex justify-between px-4'>

                <div className={`space-y-4 ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
                    <h3 className='heading-3'>املاک توسی</h3>
                    <p className='body-s text-gray-700 mt-2'>میزان رضایتمندی کاربران: ۴/۹ از ۵0</p>
                    <p className='heading-5'>تخصص ما یافتن خانه دلخواه شماست.</p>
                    <div className="flex gap-2 items-center">
                        <CiLocationOn size={20} className="inline" />
                        <p>تهران، نیاوران، سه راه یاسر</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <BsHouseCheck size={20} className="inline" />
                        <p> بیش از ۴۰۰۰ آگهی‌های فعال</p>
                    </div>

                    <button className='px-[32px] h-[40px] border-1 border-[#CB1B1B] rounded-[8px] button-md !text-[#CB1B1B] mt-4'>تماس با املاک</button>
                </div>

                <div className="w-auto h-auto space-y-12 flex flex-col items-end mt-10">
                    <div className='gap-2 flex items-center'>
                        <GoShare size={20} />
                        <GoBookmark size={20} />
                    </div>

                    <div className="px-[36px] py-[32px] gap-[24px] flex flex-col max-w-fit max-h-fit items-center border-1 border-[#E1E1E1] rounded-[16px]">
                        <p className="body-xs">میزان رضایتمندی کاربران: ۴/۹ از ۵</p>
                        <p>گزارش تخلف </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AgentProfileDescriptionSection