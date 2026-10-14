import styles from "./topmenu.module.css";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Link from "next/link";

export default async function TopMenu() {

	const session = await getServerSession(authOptions);


	return (

		<div className={styles.menucontainer}>
			{
				session ? <Link href="/api/auth/signout"><div className="flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm">Sign-Out of {session.user?.name}</div></Link>
					: <Link href="/api/auth/signin"><div className="flex items-center absolute left-0 h-full px-2">Sign in</div></Link>
			}
			<TopMenuItem title="Booking" pageRef="/booking" />
			<img
				src="/img/logo.png"
				alt="Logo"
				className={styles.logoimg}
				width={0}
				height={0}
				sizes="100vh"
			/>
		</div>
	);
};
