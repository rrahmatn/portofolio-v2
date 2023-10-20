import React from 'react'
import { CardProps } from '../types'


const Card: React.FC<CardProps> = ({ title, description, picture }) => {
    return (
        <div className="w-80 h-fit min-h-max mx-auto flex flex-col justify-center items-center">
            <div className='w-44 h-44 flex items-center justify-center rounded-full border-2 border-current overflow-visible'>
                <figure className='w-32 h-32 flex items-end justify-center rounded-full bg-current overflow-visible'>
                    <img src={`/asets/img/hire/${picture}`} alt="rrahmatn" className='w-44 drop-shadow-md absolute h-fit rounded-b-full' />
                </figure>
            </div>
            <h5 className='h4 font-semibold my-2'>{title}</h5>
            <p className='p text-center'>{description}</p>
        </div>
    )
}

export default Card