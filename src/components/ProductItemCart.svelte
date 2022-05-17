<script>
  import { 
    Card,
    CardTitle,
    CardSubtitle,
  } from 'svelte-materialify';
  import ShoppingCartControlsNumberImput from './ShoppingCartControlsNumberImput.svelte';
  import ShoppingButtonDelete from './ShoppingButtonDelete.svelte';

  export let cartProduct;

  let active = false;
  function toggle() {
    active = !active;
  }
</script>

<div class="backG">
  <div class="d-flex justify-center mt-4 mb-4">
    <Card style="max-width:350px;">
      <img src={cartProduct.product.photo} alt="background" onclick="location.href='/product/{cartProduct.id}'" />
      <CardTitle>{cartProduct.product.price}</CardTitle>
      <CardSubtitle>{cartProduct.product.name}</CardSubtitle>
      <ShoppingCartControlsNumberImput cartProduct={cartProduct} />
      <ShoppingButtonDelete cartProduct={cartProduct} />
    </Card>
  </div>
</div>

<style>

  img {
    width: 300px;
    height: 300px;
    object-fit: contain;
  }

  .backG {
		background-color: #ffffff !important;
	}

  img:hover {
		cursor: pointer;
	}

</style>
