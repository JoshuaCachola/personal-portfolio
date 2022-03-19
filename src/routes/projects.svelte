<script lang="ts">
  import MediaQuery from 'svelte-media-query';
  import { DESKTOP, MOBILE } from '$lib/constants';
  import { projects } from '$lib/projects';

  import Project from '$lib/project/Project.svelte';
  
  let projectIdx = 0;
  $: currentProject = projects[projectIdx];

  function handleChangeProject(idx: number) {
    projectIdx = idx;
  }
</script>

<section class="flex justify-evenly items-center h-screen">
  <!-- Desktop View -->
  <MediaQuery query={DESKTOP} let:matches>
    {#if matches}
      <div class="flex flex-col w-96">
        <h2 class="freehand text-amber-100 text-5xl z-10 underline text-center mb-8">Projects</h2>
        <div class="flex justify-evenly">
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
    {/if}
  </MediaQuery>

  <!-- Mobile View -->
  <MediaQuery query={MOBILE} let:matches>
    {#if matches}
    <div class="flex flex-col">
      <h2 class="freehand text-amber-100 text-2xl z-10 underline text-center mb-8">Projects</h2>
        {#if currentProject}
          <Project {currentProject} />
        {/if}
      <div class="flex justify-evenly">
        {#each projects as projects, i}
          <img src={projects.img} alt="project-img" class="h-12 w-12 cursor-pointer filter {projectIdx === i ? 'h-24 w-24' : 'h-20 w-20'}" on:click={() => handleChangeProject(i)} />
        {/each}
      </div>
    </div>
    {/if}
  </MediaQuery>
</section>
