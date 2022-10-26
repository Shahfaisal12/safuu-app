import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Account from '../elements/Account'
import Swap from '../elements/Swap'
import Base from '../Layout/Base'
import Home from '../pages/Home'
import PageNotFound from '../pages/PageNotFound'

const RoutesPage = () => {
    return (
        <>
            <BrowserRouter>
                <Base>
                    <Routes >
                        <Route index path='/' element={<Home />} />
                        <Route path='/account' element={<Account />} />
                        <Route path='/swap' element={<Swap />} />
                        <Route path='/*' element={<PageNotFound />} />
                    </Routes>
                </Base>
            </BrowserRouter>
        </>
    )
}

export default RoutesPage