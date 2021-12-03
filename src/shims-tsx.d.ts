import Vue, { VNode } from 'vue'
import { Farmer } from './model/farmer';

declare module 'vue/types/options' {
	interface ComponentOptions<V extends Vue> {
		env?: any
	}
}
declare module 'vue/types/vue' {
	// Global properties can be declared on the `VueConstructor` interface
	interface VueConstructor {
		env: any
	}
}
declare module 'vue/types/vue' {
	interface Vue {
		env: any
	}
	interface VueConstructor {
		options: any
	}
}

declare global {
	namespace JSX {
		// tslint:disable no-empty-interface
		interface Element extends VNode {}
		// tslint:disable no-empty-interface
		interface ElementClass extends Vue {}
		interface IntrinsicElements {
			[elem: string]: any
		}
	}
	interface Document {
		onwebkitfullscreenchange: (event: Event) => void
		onmozfullscreenchange: (event: Event) => void
		MSFullscreenChange: (event: Event) => void
		webkitExitFullscreen: () => void
		mozCancelFullScreen: () => void
		msExitFullscreen: () => void
	}
	interface HTMLElement {
		webkitRequestFullscreen: () => void
		mozRequestFullScreen: () => void
		msRequestFullscreen: () => void
	}
	interface Window {
		Module: any
		__STARPASS_CODE__: string
		__FARMER__: {farmer: Farmer, farmers: number}
	}
}
