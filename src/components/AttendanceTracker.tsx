import React from 'react';
import styles from './AttendanceTracker.module.css';

const AttendanceTracker = () => {

  const attendanceData = Array.from({ length: 90 }, (_, i) => Math.random() > 0.3);

  return (
    <div className="flex flex-col">
      <div><h2 className={styles.title}>Attendance in the past 3 months</h2></div>
      <div className="flex flex-row">
        {attendanceData.map((present, index) => (
          <div
            key={index}
            className={`${styles.daySquare} ${present ? styles.present : styles.absent}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AttendanceTracker;
