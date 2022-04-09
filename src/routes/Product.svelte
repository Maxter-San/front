<script>
  import { fitsh } from "fitsh"
  import AddProductControls from "../components/AddProductControls.svelte";

  export let productId;

  let product;
  let loading = true;

  $: fitsh(`http://localhost:3000/product-view/`).post({
    productId: productId,
  });
  $: fitsh(`http://localhost:3000/product`)(productId).get().then((data) => {
    product = data;
    loading = false;
  })

</script>

{#if loading}
  cargando...
{:else}
  {JSON.stringify(product)}
  <AddProductControls productId={productId} />
{/if}
