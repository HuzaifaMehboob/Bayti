import React from 'react'
import image from '../../assets/Banner.png'
import logo from '../../assets/Real Estate Logo 1.png'
import { FaWhatsapp, FaLinkedin, FaInstagram, FaGlobe } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const AgentProfileHeroSection = () => {
  const {i18n} = useTranslation();
  
  const socials = [
    { name: 'WhatsApp', icon: <FaWhatsapp size={18} />, link: 'https://wa.me/989123456789', text: '+98 912 345 6789' },
    { name: 'LinkedIn', icon: <FaLinkedin size={18} />, link: 'https://linkedin.com/in/toosi', text: 'linkedin.com/in/toosi' },
    { name: 'Instagram', icon: <FaInstagram size={18} />, link: 'https://instagram.com/toosi_amlak', text: '@toosi_amlak' },
    { name: 'Website', icon: <FaGlobe size={18} />, link: 'https://ToosiAmlak.com', text: 'ToosiAmlak.com' },
  ]

  return (
    <div className='relative h-[600px]'>
      {/* Background Image */}
      <img src={image} className='w-full h-full object-cover' />

      {/* Contact/Social Section (Left) */}
      <div
        className={`absolute bottom-20 ${i18n.language === 'ar' ? 'left-20' : 'right-20'} max-w-fit bg-white shadow-lg rounded-xl px-6 py-4 space-y-3`}
        dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
      >
        {socials.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-3 text-black hover:opacity-80 transition'
          >
            {item.icon}
            <span className='text-sm'>{item.text}</span>
          </a>
        ))}
      </div>

      {/* Logo Section (Right, Half Overlapping Bottom) */}
      <div className={`absolute ${i18n.language === 'ar' ? 'right-20':'left-20'} bottom-0 translate-y-1/2 w-[200px] h-[200px] rounded-full bg-[#F9F9F9] shadow-md flex items-center justify-center`}>
        <img src={logo} className='max-w-[120px]' />
      </div>
    </div>
  )
}

export default AgentProfileHeroSection
