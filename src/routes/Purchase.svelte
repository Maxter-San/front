<script>
  import userStore from '../stores/userStore';
  import {
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";
  import ConfirmPurchaseInformation from '../components/ConfirmPurchaseInformation.svelte';
  import ConfirmPurchasePay from '../components/ConfirmPurchasePay.svelte';
import Header from '../components/Header.svelte';
</script>

<Header />

{#if $userStore}
  <br/><br/><br/><br/><br/>
  <Grid>
    <Row>
      <Column lg={1}> </Column>
      <Column lg={7}>
        <br/>
        <h2>Tu información</h2>
        <br/>
        <ConfirmPurchaseInformation />
      </Column>
      <Column lg={7}>
        <br/>
        <h2>Tu compra</h2>
        <br/>
        <ConfirmPurchasePay />
      </Column>
    </Row>
  </Grid>
{/if}



