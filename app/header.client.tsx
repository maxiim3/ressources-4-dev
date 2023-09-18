'use client'

import {useEffect, useState} from 'react'
import {twMerge} from 'tailwind-merge'
import {z} from 'zod'
import {T_Children, T_ClassName} from '@/app/types'

export function Header() {

   const searchParams = new URLSearchParams()

   const [userInput, setUserInput] = useState('')

   console.log(searchParams.get('tags'))
   const updateUserInput = (userInput: string) => {
      const formattedString = userInput.split(' ').join('-').toLowerCase()
      setUserInput(formattedString)
   }

   useEffect(() => {
      console.log(userInput)

   }, [userInput])


   return <header className={'flex flex-col items-center w-full py-8 gap-2 bg-base-300'}>
      {/*   Search input */}
      <div>
         <input onChange={event => updateUserInput(event.currentTarget.value)}
                className={'bg-white w-96 rounded-lg py-2 px-4'}
                placeholder={'Search for tags'} /></div>
      <ul className={'w-96 h-12 flex flex-wrap gap-4'}>
         <Badge className={'bg-blue-600 '}>Dev</Badge>
         <Badge className={'bg-orange-500'}>Dev</Badge>
         <Badge className={'bg-yellow-300 text-slate-950'}>Dev</Badge>
      </ul>

   </header>
}

const Badge = (props: T_ClassName & T_Children) => (
   <li className={twMerge('relative badge rounded-sm pl-6 pr-3 py-2.5 badge-info font-mono  ', props.className)}>
      <svg className={'absolute left-1'} width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'>
         <path
            d='M3 2.5C3 2.22386 3.22386 2 3.5 2H11.5C11.7761 2 12 2.22386 12 2.5V13.5C12 13.6818 11.9014 13.8492 11.7424 13.9373C11.5834 14.0254 11.3891 14.0203 11.235 13.924L7.5 11.5896L3.765 13.924C3.61087 14.0203 3.41659 14.0254 3.25762 13.9373C3.09864 13.8492 3 13.6818 3 13.5V2.5ZM4 3V12.5979L6.97 10.7416C7.29427 10.539 7.70573 10.539 8.03 10.7416L11 12.5979V3H4Z'
            fill='currentColor' fill-rule='evenodd' clip-rule='evenodd'></path>
      </svg>
      {props.children}</li>
)
