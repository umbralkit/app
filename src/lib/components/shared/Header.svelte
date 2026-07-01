<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
</script>

<AppBar>
	<AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
		<AppBar.Lead>
			<!--			<button type="button" class="btn-icon btn-icon-lg hover:preset-tonal">-->
			<!--				<MenuIcon />-->
			<!--			</button>-->
		</AppBar.Lead>
		<AppBar.Headline>
			<button type="button" class="text-2xl flex gap-2 float-left mr-4" onclick={() => goto(resolve("/"))}>
				<Icon icon="mdi:moon-and-stars" width="1.3em" height="1.3em" />
				<span>UmbralKit</span>
			</button>
		</AppBar.Headline>
		<AppBar.Trail>
			<a class="btn hover:preset-tonal" href="https://github.com/umbralkit" target="_blank">
				<Icon icon="mdi:github" width="1.6em" height="1.6em" />
			</a>
		</AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>