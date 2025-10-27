import logo from '../../../assets/Real Estate Logo 1.png';

interface RealEstateOffice {
  name: string;            // Office name (e.g., "Alborz Real Estate")
  address: string;         // Full address
  satisfaction: string;    // Satisfaction text (could also be split into numeric score)
  activeListings: string;  // Active listings text (could also be split into number)
  viewReviews: string;     // Text to view reviews (may include review count)
}

interface Props {
  data?: RealEstateOffice
}

const OfficesCard = ({ data }: Props) => {
  return (
    <div className='w-[288px] h-[336px] flex flex-col items-center text-center border-1 border-[#E1E1E1] rounded-[16px] space-y-2 px-[32px] py-[32px]'>
        <div className='gap-2 flex flex-col items-center'>
            <img src={logo} />
            <h3 className='heading-5'>{data?.name}</h3>
            <h5 className='body-s'>{data?.address}</h5>
            <p className='body-xs text-[#717171]'>{data?.satisfaction}</p>
            <p className='body-xs text-[#717171]'>{data?.activeListings}</p>
            <p className='body-xs text-[#717171]'>{data?.viewReviews}</p>
        </div>
        
    </div>
  )
}

export default OfficesCard