/** Prefix a public asset path with the configured base (e.g. "/diyar-sazeh/" on GitHub Pages). */
export const asset = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
