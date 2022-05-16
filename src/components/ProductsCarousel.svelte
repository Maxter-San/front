<script>
  import { fitsh } from 'fitsh';
  import ProductItem from '../components/ProductItem.svelte';

  import userStore from '../stores/userStore';

  export let filters;

  let products = [];

  $: fitsh('http://localhost:3000/products').get(filters).then((response) => {
    products = response;
  });
  
</script>

<style>
  section {
    flex: 1;
    display: flex;
    overflow: auto;
  }

  .box {
    display: flex;
    min-height: min-content;
    gap: 6px;
  }

  .item {
    width: calc(100% / 3);
  }
</style>

<section>
  <div class="box">
    {#each products as product}
      <div class="item">
        <ProductItem 
          product={product}
        />
      </div>
    {/each}
  </div>
</section>
