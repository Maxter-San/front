<script>
  import userStore from '../stores/userStore';
  import {
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";
import PurchasesResults from '../components/PurchasesResults.svelte';
import Header from '../components/Header.svelte';
</script>

<Header />

{#if $userStore}
  <br/><br/><br/><br/><br/>
  <Grid>
    <Row>
      <Column lg={1} />
      <Column lg={14}>
        <br/>
        <h2>Tus compras realizadas</h2>
        <br/>
      </Column>
    </Row>
  </Grid>
  <PurchasesResults />
{:else}
  <p>
    <b>Registrate para poder comprar</b>
  </p>
{/if}
