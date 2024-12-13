import { createClient } from "microcms-js-sdk";

const domain: string = process.env.NEXT_PUBLIC_CMS_SERVICE_DOMAIN ?? "";
const key: string = process.env.CMS_SERVICE_API_KEY ?? "";

export const db = createClient({
	serviceDomain: domain,
	apiKey: key,
});
