// Home page component that displays the booking list
import styles from "./page.module.css";
import BookingList from "./components/BookingList";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <BookingList />
      </main>
    </div>
  );
}
