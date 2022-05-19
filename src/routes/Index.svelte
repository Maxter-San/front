<script>
  import { fitsh } from 'fitsh';
  import {onMount} from 'svelte';
  import userStore from '../stores/userStore';
  import {
    Content,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";
  import ProductsCarousel from '../components/ProductsCarousel.svelte';
  import ProductsViewedCarousel from '../components/ProductsViewedCarousel.svelte';
  import AdCarousel from '../components/adCarousel.svelte';
  import CategorySelection from '../components/CategorySelection.svelte';
  import Header from '../components/Header.svelte';
</script>

<Header />

<h6> </h6>
<br/><br/><br/>
<AdCarousel/>
  <Grid>
    <Row>
      <Column lg={1}> </Column>
      <Column lg={14}>
      <br/>
      <h2>En tendencia</h2>
      <br/>
      <ProductsCarousel filters={{ limit: '10', viewsSort: 'desc' }} />
      </Column>
    </Row>
    <br/>
    {#if $userStore}
    <Row>
      <Column lg={1}> </Column>
      <Column lg={14}>
      <br/>
      <h2>Tus últimos productos vistos</h2>
      <br/>
      <ProductsViewedCarousel filters={{ limit: '10', viewsSort: 'desc' }} />
      </Column>
    </Row>
    <br/>
    {/if}
    <Row>
      <Column lg={1}> </Column>
      <Column lg={14}>
      <br/>
      <h2>Categorías</h2>
      <br/>
      <CategorySelection />
      </Column>
    </Row>
    <br />
  </Grid>