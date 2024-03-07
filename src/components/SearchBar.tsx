'use client'
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const SearchButton = ({otherclasses}:{otherclasses:string}) => {
  return (
    <button className={`-ml-3 z-10  ${otherclasses}`} type='submit'><Image
    src={'/magnifying-glass.svg'}
    height={40}
    width={40}
    alt='search icon' /></button>
  )
}
const SearchBar = () => {
    
    const [manufacturer, setManufacturer] = useState('')
    const [modal, setModal]=useState('')
    const router = useRouter()

    const handleSearch=(e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if(manufacturer == '' && modal == ''){
       return alert('Please fill in the searchbar')
      }
      updateSearchParams(modal.toLowerCase(), manufacturer.toLowerCase())
      }
    const updateSearchParams = (modal:string, manufacturer:string) => {
      const searchParams = new URLSearchParams(window.location.search);
      if(modal){
        searchParams.set('modal', modal);
      } else {searchParams.delete('modal')}
      
      
      if(manufacturer){
        searchParams.set('manufacturer', manufacturer);
      } else
      {
        searchParams.delete('manufacturer')
      }
 const newPathname= `${window.location.pathname}?${
  searchParams.toString()
 }`
 router.push(newPathname, {scroll:false})
}

  return (
    <form onSubmit={handleSearch} className='searchbar'>
        <div className='searchbar__item'>
            <SearchManufacturer 
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
            />
            <SearchButton otherclasses=''/>
        </div>
        <div className='searchbar__item'>
          <Image src='/model-icon.png'
          alt='modal icon'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20] ml-4'
          
          />
          <input type="text" placeholder='Tiguan' className='searchbar__input' value={modal} 
          onChange={(e)=>setModal(e.target.value)}
          name={'modal'}
        

          ></input>
          <SearchButton otherclasses='sm:hidden'/>
          
        </div>
        <SearchButton otherclasses='max-sm:hidden'/>


    </form>
  )
}

export default SearchBar