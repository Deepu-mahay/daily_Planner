import React from 'react'
export function CustomEvent({event}){
    return(
        <div className='px-2 py-1 bg-blue-600 text-white rounded-md text-sm shadow'>
            <strong>{event.title}</strong>
            {event.description &&(<div className='text-xs italic'>{event.description}</div>)}

        </div>
    )
}