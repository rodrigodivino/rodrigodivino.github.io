<script>
	import Card from "../../components/Card.svelte"
	const posts = [{
        title: "An Introduction to Multivariate Data Analysis",
        subtitle: "What is it used for, and some techniques at your disposal",
        file: "multivariate-introduction",
        thumb: "placeholder.png"
    }]
</script>

<style>
	
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>


{#each posts as {title, subtitle, file, thumb}}
	<Card {title} {subtitle} {file} {thumb}></Card>
{/each}
