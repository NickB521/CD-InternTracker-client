import React, { useState } from 'react';
import { useEffect } from 'react';

const WeeklySchedule = () => {
    
    const [currentMonth, setCurrentMonth] = useState(new Date());
    
    const [selectedDay, setSelectedDay] = useState(null);
    
    const [tasks, setTasks] = useState({}); // Object to store tasks for each date
    const [taskInput, setTaskInput] = useState('');
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    
    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    // Save tasks manually to localStorage
    const saveTasksToLocalStorage = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        alert('Tasks saved successfully!');
    };

    // Highlight today's date on page load
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
        setSelectedDay(day);
        setIsModalOpen(true); // Open task modal when a day is clicked
    };

    const handleAddTask = () => {
        if (taskInput.trim()) {
            const taskKey = `${currentMonth.getFullYear()}-${currentMonth.getMonth()}-${selectedDay}`;
            setTasks((prevTasks) => ({
                ...prevTasks,
                [taskKey]: prevTasks[taskKey] ? [...prevTasks[taskKey], taskInput] : [taskInput],
            }));
            setTaskInput('');
        }
    };

    const handleRemoveTask = (taskKey, taskIndex) => {
        setTasks((prevTasks) => {
            const updatedTasks = { ...prevTasks };
            updatedTasks[taskKey].splice(taskIndex, 1); // Remove the selected task
            if (updatedTasks[taskKey].length === 0) {
                delete updatedTasks[taskKey]; // Remove the key if no tasks are left
            }
            return updatedTasks;
        });
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
                    <button onClick={handlePrevMonth} className="arrow-btn">&lt;</button>
                    <button onClick={handleNextMonth} className="arrow-btn">&gt;</button>
                </div>
            </div>
            <div className="calendar">
                {/* Calendar Header */}
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
                    <div key={idx} className="calendar-day-header">{day}</div>
                ))}

                {/* Empty Days */}
                {Array(firstDayOfWeek).fill(null).map((_, idx) => (
                    <div key={`empty-${idx}`} className="calendar-day empty"></div>
                ))}

                {/* Days of the Month */}
                {days.map((day) => {
                 const taskKey = `${currentMonth.getFullYear()}-${currentMonth.getMonth()}-${day}`;
                 return (
                  <div
                    key={day}
                     className={`calendar-day ${selectedDay === day ? 'selected' : ''}`}
                      style={{ position: 'relative' }} // Ensure relative positioning for the task indicator
                     >
                      <button className="day-btn" onClick={() => handleDayClick(day)}>
                       {day}
                 </button>
                    {tasks[taskKey] && tasks[taskKey].length > 0 && (
                    <div className="task-indicator"></div>
                 )}
              </div>
            );
         })}
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Tasks for {`${currentMonth.getFullYear()}-${currentMonth.getMonth() + 1}-${selectedDay}`}</h3>
                        <ul>
                            {(tasks[`${currentMonth.getFullYear()}-${currentMonth.getMonth()}-${selectedDay}`] || []).map(
                                (task, idx) => (
                                    <li key={idx}>
                                        {task}
                                        <button
                                            className="remove-task-btn"
                                            onClick={() =>
                                                handleRemoveTask(
                                                    `${currentMonth.getFullYear()}-${currentMonth.getMonth()}-${selectedDay}`,
                                                    idx
                                                )
                                            }
                                        >
                                            ✕
                                        </button>
                                    </li>
                                )
                            )}
                        </ul>
                        <input
                            type="text"
                            value={taskInput}
                            onChange={(e) => setTaskInput(e.target.value)}
                            placeholder="Enter a task"
                        />
                        <button onClick={handleAddTask}>Add Task</button>
                        <button onClick={saveTasksToLocalStorage}>Save Tasks</button>
                        <button onClick={() => setIsModalOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};


export default WeeklySchedule;
