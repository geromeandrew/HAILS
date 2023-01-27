import React from 'react'
import { useState } from 'react'
import ReCal from 'react-calendar'
import '../assets/styles/Calendar.css'

function Calendar() {
    const [date, setDate] = useState(new Date());

    return (
    <div className='calendar'>
        <div className='calendar-container'>
            <ReCal onChange={setDate} value={date} />
        </div>
    </div>
    );
}

export default Calendar