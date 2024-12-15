import { Background } from "@/app/components/Background";
import type { Metadata } from "next";
import { Playwrite_US_Modern, Raleway } from "next/font/google";

import "./globals.css";

const playwrite = Playwrite_US_Modern({
	variable: "--font-display",
});

const raleway = Raleway({
	variable: "--font-body",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Shohei Yamagiwa",
	description: "Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${playwrite.variable} ${raleway.variable}`}>
				<Background>{children}</Background>
			</body>
		</html>
	);
}
