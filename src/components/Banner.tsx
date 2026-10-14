'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./banner.module.css";
import { useSession } from "next-auth/react";

export default function Banner() {
	const router = useRouter();
	const banner = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg'];
	const [currentIndex, setCurrentIndex] = useState(0);
	const { data: session } = useSession();
	console.log(session?.user.token);

	return (
		<div className={styles.banner} onClick={() => {
			setCurrentIndex((currentIndex + 1) % banner.length);
		}}>
			<Image src={banner[currentIndex]} alt="Banner" objectFit="cover" fill={true} priority />
			<div className={styles.bannerText}>
				<h1 className="text-3xl font-semibold">where every event finds its venue</h1>
				<h3 className="text-xl font-serif">Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we connecting people to perfect place.</h3>
			</div>
			{session && (
				<div className="z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl">
					Welcome {session.user?.name}
				</div>
			)}
			<button
				className="bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover-border-tranparent"
				onClick={(e) => {
					e.stopPropagation();
					router.push('/venue')
				}}
			>
				Select Venue NOW
			</button>
		</div>
	);
}