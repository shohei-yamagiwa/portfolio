import { HomeAnimation } from "@/app/components/HomeAnimation";

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
	return <HomeAnimation duration={4.0}>{children}</HomeAnimation>;
}
