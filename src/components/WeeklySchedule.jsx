import React, { useState } from 'react';

const WeeklySchedule = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
    };

   
    const getCalendarDays = (month) => {
        const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
        const lastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0);
        const daysInMonth = lastDay.getDate();

       
        const firstDayOfWeek = firstDay.getDay(); 
        
       
        const days = [];
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }
        
        return { firstDayOfWeek, days };
    };

    const { firstDayOfWeek, days } = getCalendarDays(currentMonth);

    return (
        <div className="weekly-schedule">
            <div className="header flex justify-between items-center">
                <h2 className="text-orange-500 font-bold">
                    {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
                </h2>
                <div className="arrows flex">
                    <button onClick={handlePrevMonth} className="arrow-btn">&lt;</button>
                    <button onClick={handleNextMonth} className="arrow-btn">&gt;</button>
                </div>
            </div>
            <div className="calendar grid grid-cols-7 gap-2">
                {/* Render the calendar header (days of the week) */}
                <div className="calendar-header flex">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="calendar-day-header">{day}</div>
                    ))}
                </div>

                {/* Render the days of the current month */}
                <div className="calendar-body grid grid-cols-7 gap-2">
                    {/* Empty days before the first day of the month */}
                    {Array(firstDayOfWeek).fill(null).map((_, idx) => (
                        <div key={idx} className="calendar-day empty"></div>
                    ))}
                    
                    {/* Days of the current month */}
                    {days.map(day => (
                        <div key={day} className="calendar-day">
                            <button className="day-btn">{day}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WeeklySchedule;
