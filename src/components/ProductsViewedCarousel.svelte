<script>
  import userStore from '../stores/userStore';
  import ProductItem from '../components/ProductItem.svelte';
  import request from '../utils/request';

  export let filters = {};

  let products = [];

  $: if($userStore) {
    const userId = $userStore.id;
    request('productsViewed').post({
      userId: userId,
      ...filters,
    }).then((response) => {
      products = response;
    });
  };
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

{#if $userStore}
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
{/if}
