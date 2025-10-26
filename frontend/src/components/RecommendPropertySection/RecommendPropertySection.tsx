import { useTranslation } from 'react-i18next'
import PropertyCard from '../ui/PropertyCard/PropertyCard';

const RecommendPropertySection = () => {
    const { t } = useTranslation();
    const relatedItems = t('RecommendedProperties.locations', { returnObjects: true });

    return (
        <div className='w-full h-auto '>
            <h1 className='text-[#353535] heading-3'>{t('RecommendedProperties.heading')}</h1>
            <div className="flex flex-wrap gap-3 w-auto items-center mt-6">
                {relatedItems.map((item, index) => (
                    <div
                        key={index}
                        className="px-3 py-1 border border-[#EDEDED] rounded-[4px] text-sm"
                    >
                        {item?.label}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 mt-10 gap-2 md:gap-6 space-y-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <PropertyCard key={index} />
                ))}
            </div>

        </div>
    )
}

export default RecommendPropertySection