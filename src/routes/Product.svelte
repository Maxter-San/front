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

  window.jQuery(document).ready(function(){
      var div = window.jQuery("#animacion");
      function loop() {
        div.animate({height: '300px', opacity: '0.2'}, "slow");
        div.animate({width: '300px', opacity: '0.4'}, "slow");
        div.animate({height: '100px', opacity: '0.2'}, "slow");
        div.animate({width: '100px', opacity: '0.4'}, "slow");
        loop();
      }
      loop();
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
  <div style="background:#759eff;
  height:100px;
  width:100px;
  margin: auto;
    margin-bottom: auto;
    margin-top: 16%;
    text-align: center"
    id="animacion">cargando...</div>
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