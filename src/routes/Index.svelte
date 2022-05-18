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
  import AdCarousel from '../components/AdCarousel.svelte'
  import ProductItem from '../components/ProductItem.svelte';
</script>


<h6> </h6>
<br/><br/><br/>
  <Grid>
    <Row>
      <Column lg={1}> </Column>
      <Column lg={16}>
        <AdCarousel/>
      </Column>
    </Row>
    <Row>
      <Column lg={1}> </Column>
      <Column lg={14}>
      <br/>
      <h2>En tendencia</h2>
      <br/>
      <ProductsCarousel filters={{ limit: '10', viewsSort: 'desc' }} />
      </Column>
    </Row>
    <Row>
      <Column lg={1}> </Column>
      <Column lg={14}>
      <br/>
      <h2>Tus últimos productos vistos</h2>
      <br/>
      <ProductsViewedCarousel filters={{ limit: '3', viewsSort: 'desc' }} />
      </Column>
    </Row>
  </Grid>