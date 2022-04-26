import React from 'react'

const TechnologyLi = (props: { item: string, description: string}) => {
  return (
    <>
      <li className='text-xl list-none text-left font-bold text-cinnabar-300 mt-8'>{props.item}</li>
      <p className='ml-4 mb-4 text-left first-letter:ml-2'>{props.description}</p>
    </>
  )
}

export default TechnologyLi