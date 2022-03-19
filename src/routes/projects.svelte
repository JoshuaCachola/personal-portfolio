<script lang="ts">
	import background from '$lib/images/projects-bg.jpg';
	import background2 from '$lib/images/background2.png';
	import skateImg from '$lib/images/skate.svg';
	import splitImg from '$lib/images/splitsmart.svg';
	import provaImg from '$lib/images/prova.svg';
	import thirteentImg from '$lib/images/thirteen.svg';

  import Project from '$lib/project/Project.svelte';
  import type { ProjectInterface } from '$lib/interfaces';
	const projects: ProjectInterface[] = [
		{
			name: 'Skate Spot',
			description: 'Crowd-sourced social platform for everything skateboarding.',
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
			description: 'Track your runs to meet your goals.',
			img: provaImg,
			caption: 'Running by Dimiter Petrov from NounProject.com'
		},
		{
			name: 'Thirteen',
			description: 'A Southeastern Asian card game played between 2-4 players.',
			img: thirteentImg,
			caption: 'Cards by Made from NounProject.com'
		}
	];
  
  let projectIdx = 0;
  $: currentProject = projects[projectIdx];

  function handleChangeProject(idx: number) {
    projectIdx = idx;
  }
</script>

<section class="flex justify-evenly items-center h-screen">
  <div class="flex flex-col">
    <h2 class="freehand text-amber-100 text-5xl z-10 underline text-center mb-8">Projects</h2>
    <div class="flex justify-between">
      {#each projects as projects, i}
        <img src={projects.img} alt="project-img" class="h-20 w-20 cursor-pointer filter {projectIdx === i ? 'h-24 w-24' : 'h-20 w-20'}" on:click={() => handleChangeProject(i)} />
      {/each}
    </div>
  </div>
	
  <div class="w-96">
    {#if currentProject}
      <Project {currentProject} />
    {/if}
  </div>
	
</section>
