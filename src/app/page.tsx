import { css } from "pandacss";

export default function Home() {
	return (
		<>
			<div
				className={css({
					color: "red",
				})}
			>
				Hello PandaCSS!
			</div>
		</>
	);
}
