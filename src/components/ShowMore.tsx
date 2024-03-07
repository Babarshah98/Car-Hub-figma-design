'use client'
import React from 'react'
import { showMoreProps } from '../../types'
import { useRouter } from 'next/navigation'
import { updateSearchParams } from '../../utils'
import CustomButton from './CustomButton'


const ShowMore = ({pageNumber, isNext}:showMoreProps) => {
   const router= useRouter()
   const newLimit= (pageNumber+1) * 10;
   const handleNavigation=()=>{
    const newPathname= updateSearchParams('limit', `${newLimit}`)
    
    router.push(newPathname, {scroll:false})
   }
   
   

   

  return (
    <div className='w-full flex-center gap-5 mt-10'>
        {!isNext && (<CustomButton title='Show More'
          btnType='button'
          containerStyles='bg-primary-blue rounded-full text-white'
          Handleclick={handleNavigation} /> )}
    </div>
  )
}

export default ShowMore