import styles from "./SummaryItem.module.css";

export default function SummaryItem({ category, score, icon }) {
  const colorVal =
    (category === "Reaction" && "var(--color-light-red)") ||
    (category === "Memory" && "var(--color-orangey-yellow)") ||
    (category === "Verbal" && "var(--color-green-teal)") ||
    (category === "Visual" && "var(--color-cobalt-blue)");

  const bgColor =
    (category === "Reaction" && "rgba(255, 87, 87, 0.05)") ||
    (category === "Memory" && "rgba(255, 176, 31,0.05)") ||
    (category === "Verbal" && "rgba(0, 189, 145,0.05)") ||
    (category === "Visual" && "rgba(17, 37, 212,0.05)");

  return (
    <div className={styles.summaryItem} style={{ backgroundColor: bgColor }}>
      <img className={styles.image} src={icon} alt="icon" />
      <p style={{ color: colorVal }} className={styles.category}>
        {category}
      </p>
      <p className={styles.score}>
        <span className={styles.actualScore}>{score}</span> / 100
      </p>
    </div>
  );
}
