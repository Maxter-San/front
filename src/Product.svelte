<script>
  import { navigate } from "svelte-navigator";
  import request from './utils/request';

  let productId;

	let products = [];
	$: request("products").get({ sortByViews: desc }).then((data) => {
    products = data;
  });

  async function fetchProduct() {
    const res = await request("product_view").post({
      productId: 1,
    });
    location.reload();

    const json = await res.json();
    navigate("/");
    
    console.log(json);
  } 

</script>

<main>
	<ul>
		{#each products as product}
			<li>{product.id + "- " + product.name}</li>
			<!--<Item item={product} /> -->
		{/each}
	</ul>

  <input type="text" bind:value={productId} placeholder="productID" />
  <button on:click={fetchProduct}>fetch</button>
</main>

<style>
  li{
    text-align: left;
  }
</style>