import type { WorkDTO } from "@/lib/entities/dtos/work.dto";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css/core";

interface Props {
	works: WorkDTO[];
}

export default function WorksCarousel({ works }: Props) {
	return (
		<Splide>
			<SplideSlide>Hello World</SplideSlide>
			<SplideSlide>Hello World</SplideSlide>
			<SplideSlide>Hello World</SplideSlide>
		</Splide>
	);
}
