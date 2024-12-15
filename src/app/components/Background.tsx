interface Props {
	children?: React.ReactNode;
}

export function Background({ children }: Props) {
	return <div className="bg-light dark:bg-dark">{children}</div>;
}
