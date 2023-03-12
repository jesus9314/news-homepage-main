import React from 'react'
import { New } from './New'
import { dataNews } from '../data/data'

export const TopNews = () => {
  return (
    <div className='mt-24 md:mt-10 flex flex-col gap-8 md:gap-16 md:flex-row'>
        {
          dataNews.map( ({title, content,image}, i) =>(
            <New title={title} image={image} index={i} key={i}>
              {content}
              </New>
          ) )
        }
    </div>
  )
}
