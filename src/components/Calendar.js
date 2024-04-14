// Calendar.js
import React from 'react';
import styles from './Calendar.module.css';

const Calendar = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const leadingDays = Array.from({ length: firstDayOfMonth }, (_, index) => null);


  const monthDays = Array.from({ length: daysInMonth }, (_, index) => index + 1);


  const specialDays = [1, 3, 5, 6, 8, 9, 10, 12, 13, 17, 18, 19]; 

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.daysGrid}>
        {leadingDays.map((_, index) => (
          <div key={`empty-${index}`} className={styles.day}></div>
        ))}
        {monthDays.map(day => (
          <div 
            key={day} 
            className={
              specialDays.includes(day)
                ? `${styles.day} ${styles.currentDay}` // Apply .currentDay if it's a special day
                : styles.day
            }
          >
            {day}
          </div>
        ))}
      </div>
      <button className={styles.checkInButton}>Check In</button>
    </div>
  );
};

export default Calendar;

