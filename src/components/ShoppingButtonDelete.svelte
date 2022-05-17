<script>
  import request from '../utils/request';
  import userStore from '../stores/userStore';
  import {
   Button,
  } from "carbon-components-svelte";
  import TrashCan from "carbon-icons-svelte/lib/TrashCan.svelte"; 

  export let cartProduct;

  async function productDelete(){
  const updatedUser = await request(`cart/${$userStore.userCart.id}/delete`).post({
    productId: cartProduct.productId,
  });

  $userStore = updatedUser;
};
</script>


<Button tooltipPosition="right" kind="danger-tertiary" iconDescription="Borrar" icon={TrashCan} on:click={productDelete} />