<script>
  import userStore from '../stores/userStore';
  import { fitsh } from 'fitsh';
  import request from '../utils/request';
  import ProductItemCart from '../components/ProductItemCart.svelte';

  let cartProducts = [];

  $: if($userStore) {
    let userCartId = $userStore.userCart.id;
    request(`cart`)(userCartId).get().then((data) => {
      cartProducts = data.products;
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
    /* width: calc(100% / 3); */
  }
</style>

<section>
  <div class="box">
    {#each cartProducts as cartProduct}
      <div class="item">
        <ProductItemCart 
          cartProduct={cartProduct}
        />
      </div>
    {/each}
  </div>
</section>
