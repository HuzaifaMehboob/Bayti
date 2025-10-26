// import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import Searchbar from '../../components/Searchbar/Searchbar'
import OfficesCard from '../../components/ui/OfficesCard/OfficesCard'
import React from 'react'

const RealEstatePage = () => {
  const {t} = useTranslation()

  // local search state (kept minimal and consistent with AgentListingPage)
  const [searchedValue, setSearchedValue] = React.useState('')
//   const [officesData, setOfficesData] = React.useState<any[]>([])
    const officesData = t('RelatedOffices.offices', { returnObjects: true }) as any[];

  const cards = t('RelatedOffices.offices',{returnObjects:true})

  return (
    <div className='mx-auto mt-40 gap-10 max-w-[1220px] w-full px-2 md:px-0 md:w-[90%]  '>
        <h2 className='heading-3'>{t('navbar.li', { returnObjects: true })[2]}</h2>
        <div className='w-[90%] md:w-3/6 h-12 mt-4'>
            <Searchbar data={officesData} searchedValue={searchedValue} setSearchedValue={setSearchedValue} />
        </div>

        <div className='grid justify-items-center md:justify-items-start grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto md:mx-0 mt-10 mb-20'>
            {Array.from({length:9}).map((_,index)=> (
                <OfficesCard key={index} data={cards[0]} />
            ))}
        </div>

        <button className='px-[52px] h-[50px] flex justify-center items-center mx-auto bg-[#CB1B1B] rounded-[8px] button-md !text-white mb-20'>
            مشاهده بیشتر
        </button>
    </div>
  )
}

export default RealEstatePage