import React from 'react';
import styles from './AttendanceTracker.module.css';

const AttendanceTracker = () => {

  const attendanceData = Array.from({ length: 90 }, (_, i) => Math.random() > 0.3);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Attendance in the past 3 months</h2>
      <div className={styles.grid}>
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
