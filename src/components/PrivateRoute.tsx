"use client"
import { Loader2 } from 'lucide-react'
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
    
    if (status === "loading" || !session){
        return <Loader2/>
    }
  return (
    <>{children}</>
  )
}

export default PrivateRoute