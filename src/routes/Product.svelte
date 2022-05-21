<script>
  import Header from "../components/Header.svelte";
  import {
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";
  import { fitsh } from "fitsh"
  import request from '../utils/request';
  import userStore from '../stores/userStore';
  import ViewProduct from "../components/ViewProduct.svelte";

  export let productId;

  let product;
  let loading = true;

  $: if($userStore){
    let userId = $userStore.id;
    request(`product-last-viewed`).post({
      userId: userId,
      productId: productId,
    });
  }

  $: request(`product-view`).post({
    productId: productId,
  });

  $: request(`product`)(productId).get().then((data) => {
    product = data;
    loading = false;
  });
</script>

<style>
  .backG {
		background-color: #ffffff !important;
	}
</style>

<Header />

{#if loading}
  <br/><br/><br/><br/><br/>
  cargando...
{:else}
  <h6> </h6>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/>
  <Grid>
    <Row>
      <Column lg={1} />
      <Column lg={14}>
        <div class="backG">
          <ViewProduct productId={productId} product={product} />
        </div>
      </Column>
    </Row>
  </Grid>
{/if}