import React, { useContext } from 'react'
import FadeUp from './FadeUp'
import { MyContext } from '../context/ContextProvider'
// eslint-disable-next-line
const cache = 'w-56'
export default function Skill({ icon, text, s, mdS, iconSize }) {
    const { theme } = useContext(MyContext)
    return (
        <FadeUp
            text={
                <div className={`flex flex-row skill group transition-all hover:bg-white hover:text-${theme}-700 items-center  justify-evenly space-x-5 border px-1 py-4 md:px-5 md:py-4 rounded-lg`}>
                    <div className={`text-white  ${iconSize ? iconSize : 'md:text-5xl'} text-6xl group-hover:text-${theme}-700`}>
                        {icon}
                    </div>
                    <span className={`${s ? s : 'text-4xl'} md:${mdS ? mdS : 'text-4xl'} font-semibold`} >{text}</span>
                </div>
            }
        />
    )
}
