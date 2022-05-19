<script>
   import userStore from '../stores/userStore';
   import {
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";
   import ShoppingCartProducts from '../components/ShoppinCartProducts.svelte';
   import ShoppingCartBuy from '../components/ShoppingCartBuy.svelte'
import Header from '../components/Header.svelte';

</script>

<Header />

{#if $userStore}
   <br/><br/><br/><br/><br/>
   <Grid>
      {#if $userStore.userCart.items.length > 0}
      <Row>
         <Column lg={1}> </Column>
         <Column lg={14}>
            <br/>
            <h2>Tu carrito</h2>
            <br/>
            <ShoppingCartProducts />
         </Column>
      </Row>
      <br/>
      <Row>
         <Column lg={1}> </Column>
         <Column lg={14}>
            <ShoppingCartBuy />
         </Column>
      </Row>
      {:else}
      <Row>
         <Column lg={1}> </Column>
         <Column lg={14}>
            <br/>
            <h2>Aún no tienes ningún producto en el carrito...</h2>
         </Column>
      </Row>
      {/if}
   </Grid>
{/if}