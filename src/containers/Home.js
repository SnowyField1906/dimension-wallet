import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useEthers } from '@usedapp/core'

import Welcome from './Welcome'

function Home() {
    const { account, activateBrowserWallet } = useEthers()

    return (
        <Route exact path="/">
            {account ? <Navigate to="/Wallet" /> : <Welcome activateBrowserWallet={activateBrowserWallet}/>}
        </Route>
    )
}

export default Home
