import React from 'react';
import styles from './ExamCountdown.module.css';

const ExamCountdown = () => {
  const examDate = new Date('June 14, 2024 00:00:00').getTime(); // Convert to timestamp
  const today = new Date().getTime(); // Convert to timestamp
  const timeLeft = examDate - today;
  const daysLeft = Math.round(timeLeft / (1000 * 60 * 60 * 24));

  const goalScore = "7.0";

  return (
    <div className={styles.container}>
      <div className={styles.header}>Exam Date: {new Date(examDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
      <div className={styles.daysLeft}>
        <span className={styles.number}>{daysLeft}</span> days left
      </div>
      <div className={styles.divider}></div>
      <div className={styles.goal}>
        My Goal
        <div className={styles.goalScore}>{goalScore}+</div>
      </div>
      <div className={styles.divider}></div> 
      <div className={styles.footer}>
        <a href="#setting-goals">Setting Examination Goals</a>
      </div>
    </div>
  );
};

export default ExamCountdown;
