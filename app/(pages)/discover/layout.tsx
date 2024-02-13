import React from 'react'
import DiscoverNavbar from './_components/navbar';

const PagesLayout = ({
    children,
}:{
    children: React.ReactNode;
}) => {
  return (
    <div>
      <DiscoverNavbar/>
      <main className='bg-white h-full'>
        {children} 
      </main>
    </div>
  )
}

export default PagesLayout