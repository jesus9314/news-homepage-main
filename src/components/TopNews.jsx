import React from 'react'
import { New } from './New'
import { dataNews } from '../data/data'

export const TopNews = () => {
  return (
    <div className='mt-24 flex flex-col gap-16'>
        {
          dataNews.map( ({title, content,image}, i) =>(
            <New title={title} image={image} index={i}>
              {content}
              </New>
          ) )
        }
    </div>
  )
}
