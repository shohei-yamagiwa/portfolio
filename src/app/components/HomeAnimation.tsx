"use client";

import { Typography } from "@/app/components/Typography";
import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";

interface Props {
	duration: number;
	children: Readonly<React.ReactNode>;
}

export function HomeAnimation({ duration, children }: Props) {
	const [scope, animate] = useAnimate();
	async function animateText() {
		await animate(scope.current, { opacity: 0 });
		await animate(scope.current, { opacity: 1 }, { ease: "easeIn", duration: duration / 3.0 });
		await animate(scope.current, { opacity: 0 }, { ease: "easeOut", duration: duration / 3.0, delay: duration / 3.0 });
		await animate(scope.current, { display: "none" });
	}
	useEffect(() => {
		animateText();
	});
	return (
		<div className="w-full">
			<motion.div ref={scope} className="fixed w-full h-svh flex flex-col justify-center items-center opacity-0">
				<Typography style="h1">Shohei Yamagiwa</Typography>
			</motion.div>
			<motion.div
				className="w-full h-fit"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: duration }}
			>
				{children}
			</motion.div>
		</div>
	);
}
