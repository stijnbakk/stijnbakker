<script lang="ts">
	import { onMount } from 'svelte';
    // import page
    import { page } from '$app/stores';

	type TMenuItem = {
		title: string;
		href?: string;
		subMenu?: TMenuItem[];
	};
	const menuItems: TMenuItem[] = [
		{
			title: 'About',
			href: '/about'
		},
		// {
		// 	title: 'Writings',
		// 	href: '/writings'
		// },
		{
			title: 'Freelance',
			href: '/freelance'
		},
		// {
		// 	title: 'Other',
		// 	subMenu: [
		// 		{
		// 			title: 'Project Ventura',
		// 			href: '/ventura'
		// 		},
		// 		{
		// 			title: 'Topics of interest',
		// 			href: '/topics-of-interest'
		// 		},
		// 		{
		// 			title: 'Photography',
		// 			href: '/photography'
		// 		},
		// 		{
		// 			title: 'Concepts',
		// 			href: '/concepts'
		// 		}
		// 	]
		// }
	];
	let isOpen = false;
	let screenWidth = 0;
</script>

<div class="h-full flex-grow-0">
	<ul class="flex gap-5">
		{#each menuItems as menuItem}
			<li>
				<a href={menuItem.href} 
                    class={
                        `
                            ${menuItem.href === $page.url.pathname ? 'underline' : ''}
                             text-sm py-1 block hover:underline underline-offset-2 lowercase        
                        `
                       
                    
                    }

					>{menuItem.title}</a
				>
			</li>
		{/each}
	</ul>
</div>
