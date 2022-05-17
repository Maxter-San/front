<script>
   import userStore from '../stores/userStore';
   import ShoppingCartProducts from '../components/ShoppinCartProducts.svelte';
   import {
    Content,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";

</script>

{#if $userStore}
   <br/><br/><br/><br/><br/>
   <Grid>
      <Row>
         <Column lg={1}> </Column>
         <Column lg={14}>
            <br/>
            <h2>Tu carrito</h2>
            <br/>
            <ShoppingCartProducts />
         </Column>
      </Row>
   </Grid>
{/if}