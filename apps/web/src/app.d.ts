// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module "*.module.css" {
	const classes: Record<string, string>;
	export default classes;
}

declare module "*.svg?inline" {
	const content: string;
	export default content;
}

declare module "*.svg" {
	const content: string;
	export default content;
}

declare module "*.png" {
	const content: string;
	export default content;
}

declare module "*.jpg" {
	const content: string;
	export default content;
}

declare module "*.jpeg" {
	const content: string;
	export default content;
}

declare module "*.webp" {
	const content: string;
	export default content;
}

declare module "*.woff2" {
	const content: string;
	export default content;
}

declare module "*.ttf" {
	const content: string;
	export default content;
}

export {};
