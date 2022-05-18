<script>
  import { fitsh } from "fitsh"
  import AddProductControls from "../components/AddProductControls.svelte";
  import Header from "../components/Header.svelte";
  import userStore from '../stores/userStore';
  
  export let productId;

  let product;
  let loading = true;

  $: if($userStore){
    let userId = $userStore.id;
    fitsh(`http://localhost:3000/product-last-viewed/`).post({
      userId: userId,
      productId: productId,
    });
  }

  $: fitsh(`http://localhost:3000/product-view/`).post({
    productId: productId,
  });
  $: fitsh(`http://localhost:3000/product`)(productId).get().then((data) => {
    product = data;
    loading = false;
  });

</script>

<Header />

<br/><br/><br/><br/><br/>
{#if loading}
  cargando...
{:else}
  {JSON.stringify(product)}
  <AddProductControls productId={productId} />
{/if}
