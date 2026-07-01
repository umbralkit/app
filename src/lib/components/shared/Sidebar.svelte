<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PathnameWithSearchOrHash, RouteIdWithSearchOrHash } from '$app/types';

	type NavItem = {
		path: RouteIdWithSearchOrHash | PathnameWithSearchOrHash;
		title: string;
	};

	type Navigation = {
		sections: NavItem[];
	};

	const navigation: Navigation = {
		sections: [
			{
				title: 'Niche Finder',
				path: '/niche-finder'
			},
			{
				title: 'Content Mix',
				path: '/content-mix'
			},
			{
				title: 'Task Breaker',
				path: '/task-breaker'
			},
			{
				title: 'Tone Tools',
				path: '/tone-tools'
			},
			{
				title: 'Analytics',
				path: '/analytics'
			},
			{
				title: 'Media Kit',
				path: '/media-kit'
			},
			{
				title: 'Habit Tracker',
				path: '/habit-tracker'
			}
		]
	};
</script>

<ul class="flex flex-col gap-1">
	{#each navigation.sections as section, index (index)}
		<li>
			<a class="btn w-full hover:preset-tonal aria-[current=page]:preset-tonal flex justify-between items-center px-2" href={resolve(section.path)}>
				<span>{section.title}</span>
			</a>
		</li>
	{/each}
</ul>