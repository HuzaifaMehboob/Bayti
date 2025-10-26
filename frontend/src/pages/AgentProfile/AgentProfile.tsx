import AgentProfileDescriptionSection from '../../components/AgentProfileDescriptionSection/AgentProfileDescriptionSection'
import AgentProfileHeroSection from '../../components/AgentProfileHeroSection/AgentProfileHeroSection'
import AgentListingCard from '../../components/ui/AgentListingCard/AgentListingCard'
import PropertyCard from '../../components/ui/PropertyCard/PropertyCard'
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation} from 'react-i18next';
import PropertyReviewCard from '../../components/ui/PropertyReviewCard/PropertyReviewCard';

const AgentProfile = () => {
    const {t} = useTranslation()
    const displayedAgents = 11

    return (
        <div className='space-y-8'>
            <AgentProfileHeroSection />
            <AgentProfileDescriptionSection />

            <div className='mx-auto mt-20 gap-10 max-w-[1220px] w-full px-2 md:px-0 md:w-[90%]'>
                <h2 className='heading-3'>مشاورین توسی</h2>

                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 mt-10 mb-20'>
                    {Array.from({ length: displayedAgents }).map((_, index) => (
                        <AgentListingCard key={index} />
                    ))}

                    {/* Last Card (More Agents) */}
                    <AgentListingCard isLast={true} />
                </div>
            </div>

            <div className='mx-auto mt-30 gap-10 max-w-[1220px] w-full px-2 md:px-0 md:w-[90%]'>
                <h2 className='heading-3'>آگهی‌های املاک توسی</h2>

                {/* Filters Row */}
                <div className="flex flex-wrap items-center gap-3 mt-4">
                    {t("AgentFilters", { returnObjects: true }).map((item, index) => (
                        <div
                            className='flex items-center border border-[#E1E1E1] rounded-[8px] px-4 py-2 gap-2 cursor-pointer'
                            key={index}
                        >
                            <p className='body-xs'>{item.label}</p>
                            <IoIosArrowDown className='ml-2 text-gray-500' />
                        </div>
                    ))}
                </div>

                {/* Property Cards */}
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 mt-10 mb-20 px-auto'>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <PropertyCard key={index} />
                    ))}
                </div>

                <button className='px-[52px] h-[50px] flex justify-center items-center mx-auto bg-[#CB1B1B] rounded-[8px] button-md !text-white mb-20'>
                    مشاهده بیشتر
                </button>
            </div>

            <div className='mx-auto mt-30 gap-10 max-w-[1220px] w-full px-2 md:px-0 md:w-[90%]'>
                <h2 className='heading-3'>نظرات کاربران</h2>

                <div className='my-10  px-2 snap-x snap-mandatory overflow-x-auto'>
                    <div className='flex items-start gap-4 '>
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div key={index} className='snap-start flex-none w-[90%] sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto '>
                                <PropertyReviewCard />
                            </div>
                        ))}
                    </div>
                </div>
            </div>



        </div>
    )
}

export default AgentProfile
