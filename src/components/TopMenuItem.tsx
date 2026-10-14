import styles from "./topmenu.module.css";
import Link from "next/link";
export default function TopMenuItem(itemInfo: { title: string, pageRef: string }) {
	return (
		<Link href={itemInfo.pageRef}>
			<div className={styles.itemcontainer}>
				{itemInfo.title}
			</div>
		</Link>
	);
};
