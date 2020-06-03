<style>
  img {
    display: block;
    margin: auto;
  }

  figcaption {
    text-align: center;
  }
</style>

<h1>Parallel bundling</h1>

<p>
  The Parallel Bundling is a data visualization technique that uses edge
  bundling in parallel coordinates to enable categorical analysis
</p>

<p>
  A typical parallel coordinates can view many dimensions at once by laying the
  axes in parallel, with crossing lines to represent the data points:
</p>
<div width="100%">
  <figure>

    <figcaption />
    <img
      width="100%"
      src="parallel-bundling-prints/classic.png"
      alt="A classic parallel coordinates" />
  </figure>

</div>

<p>
  However, this visualization is highly cluttered, with overlapping lines hiding
  the information. This problem is worse in categorical axes, since most of the
  axis is unused, which increases the density of the lines on the screen.
</p>

<p>
  Parallel Bundling uses two techniques to solve this problema: (1) stretching
  of categorical axes, and (2) edge bundling
</p>

<p>
  The algorithm of parallel bundling stretches the categorical axes, so that the
  density of lines significantly reduces at those areas:
</p>

<div width="100%">
  <figure>

    <figcaption />
    <img
      width="30%"
      src="parallel-bundling-prints/categorical axes.png"
      alt="The stretched categorical axes" />
    <figcaption>
      On the left the classical axis layout, and on the right the axis used in
      Parallel Bundling
    </figcaption>
  </figure>

</div>

<p>
  The edge bundling enables grouping similar lines. To do that, the user clicks
  on a categorical axis, which groups the lines in each category of that data
  dimension. The lines tend to the centroid of the group, showing the features
  of classes. This is the final result:
</p>

<div width="100%">
  <figure>

    <figcaption />
    <img
      width="100%"
      src="parallel-bundling-prints/bundled.png"
      alt="The parallel bundling" />
    <figcaption>
      The parallel bundling visualization technique. Notice a new information:
      the red cluster has slightly higher values in Dimension 7. This
      information was completely hidden in the classic parallel coordinates.
    </figcaption>
  </figure>
</div>

<p>
  The Parallel Bundling is available as a Web App at
  <a href="https://rodrigodivino.github.io/parallel-bundling/">
    https://rodrigodivino.github.io/parallel-bundling/
  </a>
  ). The app is static, so your data never leaves your computer.
</p>
