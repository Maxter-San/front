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
    display: flex;
    gap: 6px
  }
</style>

{#if $userStore}
  <section>
    {#each products as product}
      <ProductItem
        product={product}
        stringDescription="Tu ultimo producto visto"
      />
    {/each}
  </section>
{/if}
