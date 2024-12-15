type Props = React.ComponentProps<"div"> & {
	style: "h1" | "h2" | "h3" | "title" | "body" | "label";
};

export function Typography({ style, children, className, ...props }: Props) {
	switch (style) {
		case "h1": {
			return (
				<h1 className={`font-display font-extralight text-6xl text-black dark:text-white ${className}`} {...props}>
					{children}
				</h1>
			);
		}
		case "h2": {
			return (
				<h2 className={`font-display font-light text-4xl text-black dark:text-white ${className}`} {...props}>
					{children}
				</h2>
			);
		}
		case "h3": {
			return (
				<h3 className={`font-display font-light text-2xl text-black dark:text-white ${className}`} {...props}>
					{children}
				</h3>
			);
		}
		case "title": {
			return (
				<div className={`font-body font-normal text-lg text-black dark:text-white ${className}`} {...props}>
					{children}
				</div>
			);
		}
		case "body": {
			return (
				<div className={`font-body font-normal text-base text-black dark:text-white ${className}`} {...props}>
					{children}
				</div>
			);
		}
		case "label": {
			return (
				<div className={`font-body font-normal text-sm text-black dark:text-white ${className}`} {...props}>
					{children}
				</div>
			);
		}
	}
}
