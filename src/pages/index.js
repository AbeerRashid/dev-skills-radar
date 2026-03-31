import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
  <div className={styles.container}>
  <h1 className={styles.title}>Welcome to Dev Skills Radar</h1>
  <p className={styles.subtitle}>Rate your dev skills and see them visualized in real time!</p>
  <Link href="/skills" className={styles.button}>
    View Your Skills Here
  </Link>
  </div>
);
}