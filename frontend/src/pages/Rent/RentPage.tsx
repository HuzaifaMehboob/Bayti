import React from 'react'
import FilterBar from '../../components/FilterBar/FilterBar'
import SearchedResultsSection from '../../components/SearchedPropertiesSection/SearchedResultsSection'
import RelatedOfficesSection from '../../components/RelatedOfficesSection/RelatedOfficesSection'
import RecommendPropertySection from '../../components/RecommendPropertySection/RecommendPropertySection'
import SimpleMap from '../../components/SimpleMap/SimpleMap'

const RentPage = () => {
  return (
    <div className='mt-40'>
        <FilterBar/>
        <div className='mx-auto gap-10 flex justify-between max-w-[1220px] w-full px-2 md:px-0 md:w-[90%] '>
            <div className='w-full md:w-1/2 mt-20 space-y-12'>
                <SearchedResultsSection />
                <RelatedOfficesSection/>
                <RecommendPropertySection/>
            </div>
            <div className='flex flex-1 mt-48 h-[600px]'>
              <SimpleMap/>
            </div>
        </div>
    </div>
  )
}

export default RentPage