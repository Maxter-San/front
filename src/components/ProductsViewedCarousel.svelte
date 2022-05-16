<script>
  import userStore from '../stores/userStore';
  import ProductItem from '../components/ProductItem.svelte';
  import request from '../utils/request';

  export let filters;

  let products = [];

  $: if($userStore) {
    const userId = $userStore.id;
    request('productsViewed').post({
      userId: userId,
      limit: 3,
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

  .item {
    width: calc(100% / 3);
  }
</style>

{#if $userStore}
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
{/if}
