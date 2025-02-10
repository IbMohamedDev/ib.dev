import React from 'react'

export default function Project(props) {
  return (
   
    <div className='item'>
       <h3 className='title'>{props.title}</h3>
       
        <p className='p'>{props.info}</p>
       <div className='links'>

       
      <a href={props.github}>
      <img width={20} height={20} src={props.img}></img>
      </a> 
     
     <a href={props.project_link}>
     <svg width={20} aria-label="Share" viewBox="0 0 24 24"><path fill="none" stroke="#000" stroke-width="2" d="M19,13 L19,23 L1,23 L1,5 L1,5 L11,5 M14,1 L23,1 L23,10 M10,14 L22.9999998,1 L10,14 Z"></path></svg>

     </a>
      
        </div>
    
    
    </div>
  )
}
