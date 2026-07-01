<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import state from '$lib/StateManager';
	import Header from '$lib/components/shared/Header.svelte';
	import Sidebar from '$lib/components/shared/Sidebar.svelte';

	let { children } = $props();
	const year = $derived(new Date().getFullYear());
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="grid grid-rows-[auto_1fr_auto] min-h-screen" data-mode={state.current.theme}>
	<Header />
	<div class="container mx-auto grid grid-cols-1 xl:grid-cols-[200px_minmax(0px,1fr)] pb-16">
		<aside class="sticky top-0 col-span-1 hidden h-auto p-4 xl:block"><Sidebar /></aside>
		<main class="col-span-1 space-y-4 p-4">{@render children()}</main>
	</div>
	<footer class="p-4 text-center sticky bottom-0 h-16">♥ UmbralKit {year}</footer>
</div>
