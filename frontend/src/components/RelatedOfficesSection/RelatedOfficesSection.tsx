import { useTranslation } from 'react-i18next'
import OfficesCard from '../ui/OfficesCard/OfficesCard'

const RelatedOfficesSection = () => {
  const { t } = useTranslation()
  const cards = t('RelatedOffices.offices', { returnObjects: true }) as any[]

  return (
    <div className="w-full h-auto space-y-4">
      <h3 className="heading-3">
        {t('RelatedOffices.relatedRealEstateOffices')}
      </h3>

      {/* ✅ Horizontal scroll container */}
      <div className="flex gap-4 items-stretch overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide">
        {cards.map((card, index) => (
          <div key={index} className="flex-shrink-0">
            <OfficesCard data={card} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedOfficesSection
