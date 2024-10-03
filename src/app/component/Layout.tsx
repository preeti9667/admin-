'use client'
import React from 'react';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import style from '@/app/style/dashboard.module.css'
import Providers from '../reducer/Providers';

type LayoutProps = {
  children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> =({children}) => {
  return (
  <Providers>
    <div className={style.dashboard}>
      <div className={style.main}>
        <Sidebar />
        <div className={style.content}>
           <Navbar />
        
          {children}

        </div>
      </div>
     </div>
    
    </Providers>
  );
};

export default Layout;
