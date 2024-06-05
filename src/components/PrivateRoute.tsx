"use client"
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import {ReactNode, useEffect} from 'react'


const PrivateRoute = ({children}:{children: ReactNode}) => {
    const {data: session, status} = useSession()
    useEffect(() => {
      if (status === "loading") return;
      if(!session) {
        redirect('/signin')
      }
    }, [ session, status])
    
  return (
    <>{children}</>
  )
}

export default PrivateRoute