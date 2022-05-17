<script>
  import Carousel from 'svelte-carousel'
  // ...

  let images = ["/b01.jpg"];
</script>

<style>
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>


<Carousel
  autoplay
  autoplayDuration={5000}
  autoplayProgressVisible
  pauseOnFocus
>
  {#each images as src}
    <div class="img-container">
      <img {src} alt="ad01" />
    </div>
  {/each}
</Carousel>