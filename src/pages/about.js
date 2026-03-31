import styles from "@/styles/About.module.css";

export default function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About this App</h1>
            <p className={styles.description}> Dev Skills Radar is a personal dashboard where you can rate your skills across different technologies and see them visualized in real time. It's a great way to track your progress and identify areas for improvement.</p>
            <h2 className={styles.subtitle}>How to use it</h2>
            <ul>
                <li> Go to the skills page</li>
                <li> Rate yourself on each skill from 1 to 10 </li>
                <li> Watch the chart update in real time</li>
                <li> Add or remove skills as you grow</li>
            </ul>
        </div>
    );
}