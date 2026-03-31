import styles from "@/styles/SkillCard.module.css";

export default function SkillCard({ name, skill, rating, onRatingChange }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>
        {name} - {rating}{" "}
      </h3>

      <input
        type="range"
        min="1"
        max="10"
        value={rating}
        onChange={(e) => onRatingChange(Number(e.target.value))}
        className={styles.slider}
      />
      <button onClick={() => onRatingChange(0)} className={styles.removeButton}>
        Remove
      </button>
    </div>
    
  );
}
