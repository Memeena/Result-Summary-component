import styles from "./Result.module.css";

export default function Result() {
  return (
    <div className={styles.result}>
      <h2 className={styles.heading}>Your Result</h2>
      <div className={styles.circle}>
        <span className={styles.resultScore}>76</span>
        <span className={styles.totalScore}>of 100</span>
      </div>
      <div className={styles.resultSummary}>
        <h2 className={styles.summaryHeading}>Great</h2>
        <p className={styles.summary}>
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </div>
  );
}
