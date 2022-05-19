<script>
  import Header from "../components/Header.svelte";
  import {
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";
  import { 
    Card,
    CardTitle,
    CardSubtitle,
  } from 'svelte-materialify';
  import AddProductControls from "../components/AddProductControls.svelte";

  export let productId;
  export let product;
</script>

<style>
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
</style>

<Card style="min-width:100%;" >
  <Grid>
    <br />
    <Row>
      <Column lg={1}/>
      <Column lg={14}>     
        <CardTitle>
          <br/>
          <h2>{product.name}</h2>
          <br/><br/>
        </CardTitle>
      </Column>
    </Row>
    <Row>
      <Column lg={1}/>
      <Column lg={8}>
        <img src={product.photo} alt="Producto" />
      </Column>
      <Column>
        <AddProductControls product={product} />
      </Column>
    </Row>
    <Row>
      <Column lg={1}/>
      <Column lg={14}>
        <span class="text-overline">
          Descripción <br />
          {product.description}
        </span>
      </Column>
    </Row>
    <Row>
      <Column>
        <br /><br />
      </Column>
    </Row>
  </Grid>
</Card>