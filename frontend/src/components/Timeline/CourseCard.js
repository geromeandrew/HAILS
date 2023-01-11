import React from 'react'
import '../../assets/styles/Timeline.css'

export default function CourseCard(props) {


  return (
    <div className='course-card'>
        <div className='card-image'>
            <img alt={props.alt} src= {props.image} />
        </div>
        <div className='card-text'>
            <p className='card-title'>{props.title}</p>
            <p className='card-info'>{props.info}</p>
        </div>
    </div>
  )
}
