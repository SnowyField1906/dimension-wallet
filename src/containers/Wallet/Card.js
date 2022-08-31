import React from 'react'

import Balance from '../../components/Wallet/Balance'

function Card(props) {
    const background = "bg-card" + props.id;
    return (
        <div>
            <div className="hidden">
                <div className="bg-card1">
                    <div className="bg-card2">
                        <div className="bg-card3">
                            <div className="bg-card4">
                                <div className="bg-card5">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={background + " bg-cover mx-5 relative w-[307px] h-[183px] rounded-lg select-none"}>
                <div className="bg-black bg-opacity-5 absolute w-full h-full rounded-lg">
                    <div className='h-[10%] pt-3'>
                        <div className="text-white drop-shadow-xl font-light text-base font-sans text-center">ETHEREUM CREDIT CARD</div>
                    </div>
                    <div className="flex h-[55%] pt-9">
                        <div className='ml-6'>
                            <p className='text-white drop-shadow-xl text-[0.7rem] font-thin'>Addrerss</p>
                            {props.account && <p className="text-base text-white drop-shadow-xl font-bold">
                                {props.account.substring(0, 6) + ' ... ' + props.account.substring(props.account.length - 4, props.account.length)}
                            </p>}
                        </div>
                        <div className='absolute right-6 text-right'>
                            <p className='text-white text-[0.7rem] font-thin'>Network</p>
                            {props.account && <p className="text-base text-white drop-shadow-xl font-bold">
                                {props.network ? props.network : 'Choose network'}
                            </p>}
                        </div>

                    </div>

                    <div className="flex w-full h-[35%] bg-black bg-opacity-20 rounded-b-lg">

                        <div className='grid justify-items-stretch items-center'>
                            <div className='flex px-3 mt-3'>
                                <svg className="w-[6%] h-[6%] mx-3" style={{ color: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" >
                                    <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" fill="white" />
                                </svg>
                                {props.account && <Balance balance={props.balance} network={props.network} />}
                            </div>
                            <p className='px-6 mb-2 text-white drop-shadow-xl text-[0.7rem] font-thin'>Balance</p>
                        </div>

                        <div className='absolute right-3 px-2 place-self-center'>
                            <svg className='w-[50px] h-[50px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='white'>
                                <path d="M7.7,19.2c-4,0-7.2-3.2-7.2-7.2s3.2-7.2,7.2-7.2c4,0,7.2,3.2,7.2,7.2S11.7,19.2,7.7,19.2z M7.7,5.8
			c-3.4,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2c3.4,0,6.2-2.8,6.2-6.2S11.2,5.8,7.7,5.8z"/>
                                <path d="M16.3,19.2c-4,0-7.2-3.2-7.2-7.2s3.2-7.2,7.2-7.2c4,0,7.2,3.2,7.2,7.2S20.3,19.2,16.3,19.2z M16.3,5.8
			c-3.4,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2c3.4,0,6.2-2.8,6.2-6.2S19.7,5.8,16.3,5.8z"/>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card
