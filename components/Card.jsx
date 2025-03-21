import styles from "../styles/Card.module.css";

export default function Card ({ title, text }) {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}