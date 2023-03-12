import React from 'react'

export const New = ({children, title, image, index}) => {
  return (
    <div className="flex">
        <figure className='w-1/3'>
            <img
            className='w-full object-cover'
            src={image} 
            alt="title"/>
        </figure>
        <div className="w-2/3 flex flex-col justify-between my-2 ml-8">
          <p className="font-extrabold text-5xl text-gray-400 md:text-2xl">{`0${index+1}`}</p>
          <h3 className='font-bold capitalize text-3xl md:text-xl'>{title}</h3>
          <p className='text-gray-500 text-xl md:text-sm'>
            {children}
          </p>
        </div>
    </div>
  )
}
