import React from 'react'
import { CardProps } from '../types'


const Card: React.FC<CardProps> = ({ title, description, picture }) => {
    return (
        <div className="w-80 h-fit min-h-max mx-auto flex flex-col justify-center items-center">
            <div className='w-48 h-48 flex items-center justify-center rounded-full border-2 border-current overflow-visible'>
                <figure className='w-40 h-40 flex items-end rounded-full bg-current overflow-visible'>
                    <img src={`/asets/img/hire/${picture}`} alt="me" className='w-52 h-52 rounded-b-full' />
                </figure>
            </div>
            <h5 className='h4 font-semibold my-2'>{title}</h5>
            <p className='p text-center'>{description}</p>
        </div>
    )
}

export default Card