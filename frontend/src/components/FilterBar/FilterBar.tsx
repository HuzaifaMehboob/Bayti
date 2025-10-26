import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Searchbar from '../Searchbar/Searchbar'

const FilterBar: React.FC = ({onSearch,value,setSearchedValue}:{onSearch?: any,value?:string,setSearchedValue?: (value:string) => void}) => {
    const { t, i18n } = useTranslation()
    // read filters metadata from locales; returnObjects allows arrays/objects
    const filters = (t('filters.filterMaps', { returnObjects: true }) as any) || [];


    const [openDropdown, setOpenDropdown] = useState<string>('')

    const handleDropdownToggle = (name: string) => {
        setOpenDropdown((prev) => (prev === name ? '' : name))
    }

    // close when clicking outside any element with .filter-panel or .filter-toggle
    useEffect(() => {
        const onDocClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (!target) return
            if (target.closest('.filter-panel') || target.closest('.filter-toggle')) return
            setOpenDropdown('')
        }
        document.addEventListener('click', onDocClick)
        return () => document.removeEventListener('click', onDocClick)
    }, [])

    return (
        <div className='h-12 w-full md:max-w-[90%] xl:max-w-[1220px] max-auto md:mx-0 lg:mx-auto flex md:flex-col lg:flex-row items-center gap-3'>
            <div className='hidden lg:flex gap-3 h-full md:h-1/2 lg:h-full'>
                {filters.map((filter: any, index: number) => (
                    <div key={index} className='relative h-full'>
                        <div
                            className={`h-full border-1 border-[#ADADAD] px-4 gap-2 flex items-center rounded-[8px] filter-toggle ${i18n.language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}
                            onClick={() => handleDropdownToggle(filter.name)}
                        >
                            <span className='body-xs'>{filter.name}</span>
                            <svg className='ml-2' width='12' height='12' viewBox='0 0 24 24'>
                                <path d='M7 10l5 5 5-5H7z' fill='currentColor' />
                            </svg>
                        </div>

                        {openDropdown === filter.name && (
                            <div className='bg-white absolute border border-gray-300 shadow-md z-50 translate-y-1 p-3 min-w-54 rounded-lg filter-panel'>
                                {filter.type === 'select' && (
                                    <div>
                                        {filter.options?.map((option: any, idx: number) => (
                                            <div key={idx} className='py-1 hover:bg-gray-100 cursor-pointer body-xxs flex items-center'>
                                                <input type='checkbox' id={`${filter.name}-${option}`} name={option} className='mr-2' />
                                                <label htmlFor={`${filter.name}-${option}`} className='cursor-pointer'>
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {filter.type === 'range' && (
                                    <div className='max-w-fit'>
                                        <div className='mb-3'>
                                            <h4 className='font-semibold mb-2'>{filter.name}</h4>
                                            <div className='grid grid-cols-2 gap-3'>
                                                <div>
                                                    <label className='text-xs text-gray-600'>Min</label>
                                                    <select className='w-full mt-1 border rounded px-3 py-2'>
                                                        <option value=''>Any</option>
                                                        {(() => {
                                                            const min = Number(filter.min ?? 0)
                                                            const max = Number(filter.max ?? 1000)
                                                            const steps = 6
                                                            const arr: number[] = []
                                                            for (let i = 0; i <= steps; i++) {
                                                                arr.push(Math.round(min + ((max - min) * i) / steps))
                                                            }
                                                            return arr.map((p) => (
                                                                <option key={p} value={p}>
                                                                    {p.toLocaleString()}
                                                                </option>
                                                            ))
                                                        })()}
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className='text-xs text-gray-600'>Max</label>
                                                    <select className='w-full mt-1 border rounded px-3 py-2'>
                                                        <option value=''>Any</option>
                                                        {(() => {
                                                            const min = Number(filter.min ?? 0)
                                                            const max = Number(filter.max ?? 1000)
                                                            const steps = 6
                                                            const arr: number[] = []
                                                            for (let i = 0; i <= steps; i++) {
                                                                arr.push(Math.round(min + ((max - min) * i) / steps))
                                                            }
                                                            return arr.map((p) => (
                                                                <option key={p} value={p}>
                                                                    {p.toLocaleString()}
                                                                </option>
                                                            ))
                                                        })()}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className='flex items-center gap-2 mt-2'>
                                    <button className='bg-[#CB1B1B] text-white px-3 py-1 rounded-md hover:bg-[#a51414] transition button-md'>
                                        {t('filters.apply')}
                                    </button>
                                    <button
                                        className='bg-gray-300 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-400 transition button-md'
                                        onClick={() => setOpenDropdown('')}
                                    >
                                        {t('filters.reset')}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className='flex w-[90%] mx-auto md:mx-0 md:flex-1 h-full'>
                <Searchbar placeholder={t('filters.addCity')} setSearchedValue={setSearchedValue} searchedValue={value} />
            </div>
        </div>
    )
}

export default FilterBar