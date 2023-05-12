import LazyLoad from "vanilla-lazyload";

// Працює з об'єктами з класом ._lazy
const lazyMedia = new LazyLoad({
	elements_selector: '[data-src],[data-srcset]',
	class_loaded: '_lazy-loaded',
	use_native: true
});

// Оновити модуль
//lazyMedia.update();