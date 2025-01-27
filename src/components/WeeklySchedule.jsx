import React, { useState } from 'react';
import { useEffect } from 'react';

const WeeklySchedule = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(null);
    const [tasks, setTasks] = useState({}); // Object to store tasks for each date
    const [hoveredDay, setHoveredDay] = useState(null);

    // Highlight the current date on page load
    useEffect(() => {
        const today = new Date();
        if (
            today.getFullYear() === currentMonth.getFullYear() &&
            today.getMonth() === currentMonth.getMonth()
        ) {
            setSelectedDay(today.getDate());
        }
    }, [currentMonth]);

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
    };

    const handleDayClick = (day) => {
        const taskKey = `${currentMonth.getFullYear()}-${currentMonth.getMonth()}-${day}`;
        const task = prompt(`Enter a task for ${currentMonth.toLocaleString('default', { month: 'long' })} ${day}:`);
        if (task) {
            setTasks((prevTasks) => ({
                ...prevTasks,
                [taskKey]: prevTasks[taskKey] ? [...prevTasks[taskKey], task] : [task], // Add task to existing array
            }));
        }
        setSelectedDay(day);
    };

    const getCalendarDays = (month) => {
        const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
        const lastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0);
        const daysInMonth = lastDay.getDate();

        const firstDayOfWeek = firstDay.getDay();

        const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
        return { firstDayOfWeek, days };
    };

    const { firstDayOfWeek, days } = getCalendarDays(currentMonth);

    return (
        <div className="weekly-schedule">
            <div className="header">
                <h2 className="month-title">
                    {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
                </h2>
                <div className="arrows">
                    <button onClick={handlePrevMonth} className="arrow-btn">
                        &lt;
                    </button>
                    <button onClick={handleNextMonth} className="arrow-btn">
                        &gt;
                    </button>
                </div>
            </div>
            <div className="calendar">
                {/* Calendar Header */}
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
                    <div key={idx} className="calendar-day-header">
                        {day}
                    </div>
                ))}

                {/* Empty Days */}
                {Array(firstDayOfWeek)
                    .fill(null)
                    .map((_, idx) => (
                        <div key={`empty-${idx}`} className="calendar-day empty"></div>
                    ))}

                {/* Days of the Month */}
                {days.map((day) => {
                    const taskKey = `${currentMonth.getFullYear()}-${currentMonth.getMonth()}-${day}`;
                    return (
                        <div
                            key={day}
                            className={`calendar-day ${selectedDay === day ? 'selected' : ''}`}
                            onMouseEnter={() => setHoveredDay(day)}
                            onMouseLeave={() => setHoveredDay(null)}
                        >
                            <button className="day-btn" onClick={() => handleDayClick(day)}>
                                {day}
                            </button>
                            {hoveredDay === day && tasks[taskKey] && (
                                <div className="task-tooltip">
                                    <ul>
                                        {tasks[taskKey].map((task, idx) => (
                                            <li key={idx}>{task}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


export default WeeklySchedule;
