<script>
  import {navigate} from "svelte-navigator";

  let productId;

	let products = [];
	$: fetch("http://localhost:3000/products?sortByViews=desc").then(res => res.json()).then(data => products = data);

  async function fetchProduct() {
    const res = await fetch("http://localhost:3000/product_view", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: 1,
      })
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