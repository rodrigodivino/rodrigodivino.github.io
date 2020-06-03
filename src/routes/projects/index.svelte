<script>
  import Card from "../../components/Card.svelte";
  const projects = [
    {
      title: "VAST Challenge 2019",
      subtitle: "Fictional Earthquake Data Analysis",
      ref: "./projects/vast-challenge",
      thumb: "vast-challenge-prints/main_screen.PNG"
    }
  ];
</script>

<style>

</style>

{#each projects as { title, subtitle, ref, thumb }}
  <a href={ref}>
    <Card {title} {subtitle} {thumb} />
  </a>
{/each}
