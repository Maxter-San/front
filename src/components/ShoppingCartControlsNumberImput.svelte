<script>
    import request from '../utils/request';
    import userStore from '../stores/userStore';
    import {
    NumberInput,
  } from "carbon-components-svelte";

  export let cartProduct;
  let quant;

  async function quantityUpdate(){
    alert(quant.value);
    const updatedUser = await request(`cart/${$userStore.userCart.id}/items`).post({
      productId: cartProduct.productId,
      quantity: quant.value,
    });

    $userStore = updatedUser;
  };

</script>

<NumberInput
  label="Cantidad:"
    min={1}
    value={cartProduct.quantity}
    invalidText="La cantidad no puede ser menor a 1."
    bind:ref={quant}
    on:click={quantityUpdate}
/>