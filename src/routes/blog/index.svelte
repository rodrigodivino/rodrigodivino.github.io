<script>
  import Card from "../../components/Card.svelte";
  const posts = [
    {
      title: "An Introduction to Multivariate Data Analysis",
      subtitle: "What is it used for, and some techniques at your disposal",
      ref: "./blog/multivariate-introduction",
      thumb: "blog/multivariate-data-analysis/multivariate-cover.jpeg"
    }
  ];
</script>

<style>

</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

{#each posts as { title, subtitle, ref, thumb }}
  <a href={ref}>
    <Card {title} {subtitle} {thumb} />
  </a>
{/each}
