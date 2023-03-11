import React from 'react'

export const SummaryContent = ({children, title = 'Título'}) => {
  return (
    <div className='py-2 flex flex-col gap-4 pb-8'>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>
            {children}
        </p>
    </div>
  )
}
