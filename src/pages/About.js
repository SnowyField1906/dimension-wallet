import React from 'react'
import { Navigate } from 'react-router-dom';
import { useEthers } from "@usedapp/core";

function About() {
    const { account } = useEthers();

    if (!account) {
        return (
            <Navigate to="/Dimension-Wallet/" />
        )
    }
    return (
        <div>
            <p>123</p>
        </div>
    )
}

export default About
