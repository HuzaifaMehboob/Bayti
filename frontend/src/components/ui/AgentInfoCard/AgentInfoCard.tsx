import logo from '../../../assets/Ellipse 34.png';
import office_logo from '../../../assets/Real Estate Logo 1.png';

const AgentInfoCard = () => {
    return (
        <div className='w-[384px] p-[24px] gap-4 flex h-[217px] border-1 border-[#D9D9D9] rounded-[16px]'>
            <img src={logo} className='h-[88px] w-[88px]' />
            <div className='space-y-2 flex flex-1 flex-col'>
                <div className='flex gap-2'>
                    <img src={office_logo} className='w-[36px] h-[25px] ' />
                    <p className='heading-6'>املاک ولیعصر</p>
                </div>
                <div className='space-y-[2px]'>
                    <p className='heading-4'>علی پرتو</p>
                    <p className='body-xxs'>امتیاز ۴ از ۵</p>
                    <p className='body-xxs'>۵۰۰ آگهی فعال</p>
                </div>
                <button className='px-[32px] h-[40px] bg-[#CB1B1B] rounded-[8px] button-md !text-white'>اطلاعات تماس</button>
            </div>
        </div>
    )
}

export default AgentInfoCard