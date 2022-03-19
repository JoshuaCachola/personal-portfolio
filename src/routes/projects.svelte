<script lang="ts">
	import background from '$lib/images/projects-bg.jpg';
	import background2 from '$lib/images/background2.png';
	import skateImg from '$lib/images/skate.svg';
	import splitImg from '$lib/images/splitsmart.svg';
	import provaImg from '$lib/images/prova.svg';
	import thirteentImg from '$lib/images/thirteen.svg';

	const projects: { name: string; description: string; img: string; caption: string }[] = [
		{
			name: 'SkateSpot',
			description: 'Crowd-sourced social platform for skaters.',
			img: skateImg,
			caption: 'Skate by Angela Angelini from NounProject.com'
		},
		{
			name: 'Splitsmart',
			description: 'A social and easy way to split the bill.',
			img: splitImg,
			caption: 'Save Money by NAPISAH from NounProject.com'
		},
		{
			name: 'Prova',
			description: 'An easy way to track your runs.',
			img: provaImg,
			caption: 'Running by Dimiter Petrov from NounProject.com'
		},
		{
			name: 'Thirteen',
			description: 'A Southeastern Asian card game played with 2-4 players.',
			img: thirteentImg,
			caption: 'Cards by Made from NounProject.com'
		}
	];
</script>

<section class="flex flex-col justify-center items-center h-screen bg-white">
	<h2 class="freehand text-amber-100 text-5xl z-10">Projects</h2>
	<div class="w-full h-auto bg-cover" style="background-image: url({background});">
		<div
			class="h-full assistant opacity-90 bg-cover w-full text-slate-700"
			style="background-image: url({background2});"
		>
			<div class="font-semibold w-5/6 m-auto flex flex-col relative">
				{#each projects as project, i}
					<h3
						class="freehand z-20 text-amber-100 text-2xl flex {i % 2 === 0
							? 'justify-start'
							: 'justify-end'}"
					>
						{project.name}
					</h3>
					<div
						class="flex relative {i % 2 === 0
							? 'justify-start project-left'
							: 'justify-end project-right'}"
					>
						<div
							class="w-3/4 h-full bg-black absolute top-1 border-r-[1px] border-b-[1px] border-black {i %
								2 ===
							0
								? 'left-1'
								: '-right-1'}"
						/>
						<div
							class="w-3/4 bg-white opacity-100 z-10 border-r-[1px] border-b-[1px] border-black flex justify-between"
						>
							<img src={project.img} alt="project-img" class="w-28 h-28 bg-amber-100" />
							<p class="font-extralight">{project.description}</p>
							<div class="flex space-around" />
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
