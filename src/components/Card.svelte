<script>
  export let title = "Title";
  export let subtitle = "Description";
  export let thumb = "placeholder.png";
</script>

<style>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 20%;
    float: left;
    margin: 5px;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .container {
    padding: 2px 16px;
  }
</style>

<div class="card">
  <img src={thumb} alt="Project" style="width:100%" />
  <div class="container">
    <h4>
      <b>{title}</b>
    </h4>
    <p>{subtitle}</p>
  </div>
</div>
