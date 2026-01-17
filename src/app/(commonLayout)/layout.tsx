import { Navbar } from "@/components/layout/Navebar";
import { ReactNode } from "react";


export default function CommonLayout
({children}:{children : ReactNode}) {
  return (
    <div><h1>CommonLayout........</h1>
    <Navbar/>
        
        {children }
    </div>
  )
}
