import styles from "./Summary.module.css";
import SummaryItem from "./SummaryItem";
import data from "../../data.json";

const summaryItems = data.map(({ category, score, icon }) => (
  <SummaryItem category={category} score={score} icon={icon} />
));
export default function Summary() {
  return (
    <div className={styles.summary}>
      <h2>Summary</h2>
      <div className={styles.item}>{summaryItems}</div>
      <button className={styles.btn}>Continue</button>
    </div>
  );
}
