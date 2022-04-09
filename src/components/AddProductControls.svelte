<script>
  import request from '../utils/request';
  import userStore from '../stores/userStore';

  export let productId;

  let quantity = 1;

  async function onClick() {
    const updatedUser = await request(`cart/${$userStore.userCart.id}/items`).post({
      productId: productId,
      quantity: quantity,
    });

    $userStore = updatedUser;
  }
</script>

{#if $userStore}
  <input type="number" bind:value={quantity} />
  <button on:click={onClick}>Agregar al carrito</button>
{:else}
  <p>
    <b>Registrate para poder comprar</b>
  </p>
{/if}
