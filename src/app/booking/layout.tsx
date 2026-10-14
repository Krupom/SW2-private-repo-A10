import styles from './booking.module.css'
import BookingMenu from "@/components/BookingMenu"; 

export default function BookingPLayout({ children }: LayoutProps<"/booking">) {
    return (
        <div className={styles.sectionlayout}>
            <BookingMenu />
            {children}
        </div>
    );
}