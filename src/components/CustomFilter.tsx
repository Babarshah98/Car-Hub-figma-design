'use client'
import {useState, Fragment} from 'react'
import { CustomFilterProps} from '../../types'
import { useRouter } from 'next/navigation'
import {Listbox, Transition} from '@headlessui/react'
import Image from 'next/image'
import Router from 'next/navigation'
import { updateSearchParams } from '../../utils'





  export default function CustomFilter({ title, options }: CustomFilterProps) {
    const router = useRouter();
    const [selected, setSelected] = useState(options[0]); // State for storing the selected option
  
    // update the URL search parameters and navigate to the new URL
    const handleUpdateParams = (e: { title: string; value: string }) => {
      const newPathName = updateSearchParams(title, e.value.toLowerCase());
  
      router.push(newPathName , {scroll:false});
    };
  return (
    <div className='w-fit'>
      <Listbox  value={selected} onChange={(e) => {setSelected(e); handleUpdateParams(e);}} >
        <div className='z-10 relative w-fit'>
          <Listbox.Button className='custom-filter__btn'>
            <span className='block truncate'>{selected.title}</span>
            <Image src='/chevron-up-down.svg'
            width={20}
            height={20}
            alt='alt'
            className='ml-4 object-contain '/>
          </Listbox.Button>
          <Transition as={Fragment} leave='transition ease-in duration-200' 
          leaveFrom='opacity-100' leaveTo='opacity-0'>
            <Listbox.Options className='custom-filter__options'>
              {options.map((option) => (
                <Listbox.Option key={option.title}
                value={option} 
                className={({active}) =>`relative py-2 px-4 cursor-default select-none ${
                  active ? 'bg-primary-blue text-white' : 'bg-grey-900'
                }`}>
                  {({selected}) =>(
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {option.title}
                    </span>
                  )}
                
              </Listbox.Option> 
              ))}
              </Listbox.Options>
          </Transition>
        </div>

      </Listbox>
    </div>
  )
}

