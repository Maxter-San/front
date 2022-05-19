<script>
  import Carousel from 'svelte-carousel'
  // ...

  let images = ["./Ads/01.jpg", "./Ads/02.jpg", "./Ads/03.jpg", "./Ads/04.jpg", "./Ads/05.jpg", "./Ads/06.jpg", "./Ads/07.jpg"];
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