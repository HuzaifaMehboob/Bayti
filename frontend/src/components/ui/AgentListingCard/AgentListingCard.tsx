import logo from '../../../assets/Ellipse 34.png';

const AgentListingCard = ({ isLast }: {isLast?:boolean}) => {
  if (isLast) {
    // Special "more agents" card
    return (
      <div className='w-[100px] h-[100px] rounded-[16px] flex items-center justify-center '>
        <div className='gap-1 flex flex-col items-center'>
        <p className='text-[#CB1B1B] font-bold text-lg cursor-pointer'>۱۲۷+</p>
        <p className='text-[#CB1B1B] text-xs cursor-pointer'>مشاور دیگر</p>
        </div>
      </div>
    )
  }

  // Normal agent card
  return (
    <div className='w-[100px] p-[12px] gap-2 flex flex-col items-center h-[100px] rounded-[16px] '>
      <img src={logo} className='h-[100px] w-[100px]' alt="Agent" />
      <p className='heading-6'>علی پرتو</p>
    </div>
  )
}

export default AgentListingCard
