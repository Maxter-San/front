<script>
  import { fitsh } from 'fitsh';
  import {onMount} from 'svelte';
  import IndexCarousel from '../components/indexCarousel.svelte';
  import ProductItem from '../components/ProductItem.svelte';

  export let navigate;
  export let location;

  // let viewestProducts = [];

//   $: fitsh('http://localhost:3000/products').get({
//     sortByViews: 'desc',
//     limit: 10,
//   }).then((response) => {
//     viewestProducts = response;
//   }); 
</script>

<IndexCarousel />

<!-- <section>
  {#each viewestProducts as product}
    <ProductItem product={product} />
  {/each}
</section> -->


<!-- <style>
  section {
    display: flex;
    flex-wrap: wrap;
    gap: 0px;
  }
</style> -->