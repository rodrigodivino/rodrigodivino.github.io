<script>
    import Card from "../../components/Card.svelte"
    const projects = [{
        title: "VAST Challenge 2019",
        subtitle: "Fictional Earthquake Data Analysis",
        file: "project1",
        thumb: "placeholder.png"
    }]
</script>

<style>

</style>

{#each projects as {title, subtitle, file, thumb}}
    <Card {title} {subtitle} {file} {thumb}></Card>
{/each}


