import React from 'react'
import { Navigate } from 'react-router-dom';
import { useEthers } from "@usedapp/core";

function Transaction() {
    const { account } = useEthers();

    if (!account) {
        return (
            <Navigate to="/dApp-useDApp-project/" />
        )
    }
    return (
        <div>
            <p>123</p>
        </div>
    )
}

export default Transaction
