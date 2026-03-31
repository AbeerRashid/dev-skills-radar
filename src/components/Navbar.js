import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
    return (
    <nav className={styles.navbar}>
        <span className={styles.brand}>Dev Skills Radar</span>
            <Link href="/">Home</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/about">About</Link>
        </nav>
    );
}