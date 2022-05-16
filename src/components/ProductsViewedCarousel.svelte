<script>
  import userStore from '../stores/userStore';
  import ProductItem from '../components/ProductItem.svelte';
  import request from '../utils/request';

  let products = [];

  $: if($userStore) {
    const userId = $userStore.id;
    request('productsViewed').post({
      userId: userId,
    }).then((response) => {
      products = response;
    });
  }
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
  <section class="box">
    {#each products as product}
      <div class="item">
        <ProductItem
          product={product}
          stringDescription="Tu ultimo producto visto"
        />
      </div>
    {/each}
  </section>
{/if}
