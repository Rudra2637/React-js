import React from 'react'
import Footer from './Components/footer/Footer'
import Header from './Components/header/Header'
import {Outlet} from 'react-router-dom'

function Layout(){
    return(
        <>
            <Header />

            <Outlet />
            
            <Footer />

        </>
    )
}

export default Layout;