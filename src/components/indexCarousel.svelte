<script>
  import { fitsh } from 'fitsh';
  import ProductItem from '../components/ProductItem.svelte';
  import Carousel from 'svelte-carousel'
  import userStore from '../stores/userStore';

  let viewestProducts = [];
  //let viewestLastProducts = [];
  let viewestLastProduct = [];
  let carousel;
  let isLogged = false;

  $: fitsh('http://localhost:3000/products').get({
    sortByViews: 'desc',
    limit: 3,
  }).then((response) => {
    viewestProducts = response;
  });

  $: if($userStore){
    let userId = $userStore.id;
    let productId = $userStore.productId;
    isLogged = true;

    fitsh('http://localhost:3000/productsViewed').post({
      userId: userId,
    }).then((response) => {
      viewestLastProduct = response;
    });
    // fitsh('http://localhost:3000/productViewed').post({
    //   productId: productId,
    // }).then((response) => {
    //   viewestLastProduct = response;
    // });
  }

  const handleNextClick = () => {
    carousel.goToNext();
  }
</script>

<div>
  <Carousel
    bind:this={carousel}
    particlesToShow={1}
    autoplay=true
    pauseOnFocus
    >
      <section>
        {#each viewestProducts as product}
          <ProductItem 
          product={product}
          stringDescription="Producto más vendido" />
        {/each}
      </section>

      {#if isLogged}
        <section>
          {#each viewestLastProduct as product}
          <ProductItem
          product={product}
          stringDescription="Tu último producto visto" />
          {/each}
        </section>
      {/if}
     
      <!-- {#if isLogged}
        <section>
          {#each viewestLastProducts as product}
            <ProductItem 
            product={product}
            stringDescription="Tu ultimo producto visto" />
          {/each}
        </section>
      {/if} -->

      <section>Este es un carusel</section>
  </Carousel>
</div>

<Carousel
  autoplay=true
  pauseOnFocus
> 
  <div>aaa</div>
  <div>bbb</div>
  <div>ccc</div>
</Carousel>

<button on:click={handleNextClick}>Next</button>

<style>
section {
  display: flex;
  flex-wrap: wrap;
  gap: 0px;
}
div {
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 1000px;
}
</style>