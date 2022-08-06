import React from 'react'
import { formatEther } from 'ethers/lib/utils';

function Balance(props) {
    if (props.network) {
        return (
            <p className='text-white font-semibold text-xl'>{formatEther(props.balance[props.network]).substring(0, 7)}</p>
        )
    }
    else {
        return <p className='text-white font-semibold text-xl'>Choose network</p>
    }
}

export default Balance
