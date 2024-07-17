'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useUser, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

function Header() {
    const {user, isSignedIn} = useUser();
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
        <div className=' flex flex-row items-center'>
            <Image  src={'/daikyo.svg'} alt='logo' width={75} height={30}/>
           
        </div>
        <div className='flex gap-3 items-end'>
        {isSignedIn ? (<UserButton/>) : <>
            <Link href='/dashboard'>
                <Button variant='outline' className="rounded-full">
                    Dashboard
                </Button>
            </Link>
            <Link href='/dashboard'>
                <Button  className="rounded-full">
                    Get Started 
                </Button>
            </Link>

        
        </>}
        </div>
        
        <div>
           
        </div>
        
    </div>
  )
}

export default Header