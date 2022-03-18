<script lang="ts">
  import background from "$lib/images/projects-bg.jpg";
  import background2 from "$lib/images/background2.png";

  const projects: {name: string, description: string}[] = [{
      name: "SkateSpot", 
      description: "Crowd-sourced social platform for skaters."}
    // }, {
    //   name: "Splitsmart",
    //   description: "A social and easy way to split the bill."
    // }, {
    //   name: "Prova",
    //   description: "An easy way to track your runs."
    // }, {
    //   name: "Thirteen",
    //   description: "A Southeastern Asian card game played with 2-4 players."
    // }
  ];

</script>

<section class="flex flex-col justify-center items-center h-screen">
  <h2 class="freehand text-amber-100 text-5xl z-10">Projects</h2>
  <div class="w-full h-1/2 bg-cover" style="background-image: url({background});">
    <div class="h-full assistant opacity-90 text-slate-700" style="background-image: url({background2});">
      <div class="font-semibold w-11/12 m-auto flex flex-col relative">
        {#each projects as project}
          <div class="w-1/2 h-full bg-black absolute top-2 left-2 border-r-[1px] border-b-[1px] border-black"/>
          <div class="w-1/2 bg-white opacity-100 z-10 border-r-[1px] border-b-[1px] border-black">
            <h3>{project.name}</h3>
            <p class="font-extralight">{project.description}</p>
            <div class="flex space-around">

            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
