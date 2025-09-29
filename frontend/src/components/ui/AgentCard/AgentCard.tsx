import logo from '../../../assets/Ellipse 34.png';

const AgentCard = () => {
    return (
        <div className='w-[288px] p-[24px] gap-2 flex flex-col items-center h-[300px] border-1 border-[#D9D9D9] rounded-[16px]'>
            <img src={logo} className='h-[88px] w-[88px]' />
                
                    <p className='heading-5'>علی پرتو</p>
                    <p className='body-xxs'>امتیاز ۴ از ۵</p>
                    <p className='body-xxs'>۵۰۰ آگهی فعال</p>
            
                <button className='px-[32px] h-[40px] border-1 border-[#CB1B1B] rounded-[8px] button-md !text-[#CB1B1B]'>نمایش پروفایل</button>
            </div>

    )
}

export default AgentCard