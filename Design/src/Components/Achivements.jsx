import React from 'react'
import { achivementsData } from '../Data/achivementsData'

const Achivements = () => {
    return (
        <div id='achievements' className='p-4 sm:p-6 m-3 border-2 border-white rounded-2xl'>
            <h1 className='text-2xl px-3 py-2 tracking-[4px] font-bold text-green-400'>ACHIEVEMENTS</h1>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4'>
                {
                    achivementsData.map((temp, index) => (
                        <div key={index} className='flex flex-col items-center justify-center p-4 border border-white/30 rounded-xl bg-zinc-950/40 hover:border-green-400 transition-all'>
                            <h1 className='text-3xl font-extrabold text-green-400'>{temp.achivement}</h1>
                            <p className='text-sm text-zinc-300 font-medium mt-1 text-center'>{temp.name}</p>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Achivements