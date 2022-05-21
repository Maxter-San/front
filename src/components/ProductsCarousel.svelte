<script>
  import ProductItem from '../components/ProductItem.svelte';
  import userStore from '../stores/userStore';
  import request from '../utils/request';

  export let filters;

  let products = [];

  $: request('products').get(filters).then((response) => {
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

</style>

<section>
  <div class="box">
    {#each products as product}
      <div>
        <ProductItem 
          product={product}
        />
      </div>
    {/each}
  </div>
</section>
