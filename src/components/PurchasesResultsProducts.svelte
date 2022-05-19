<script>
  import {
    Row,
    Column,
  } from "carbon-components-svelte";

  import { 
    CardSubtitle,
    CardTitle,
  } from 'svelte-materialify';

  export let items;

  let subtotal=0;

  function total(item){
    subtotal += item.quantity * item.price;
    return "";
  }

</script>


{#each items as item} 
<hr />
<Row>
  <Column lg={1}/>
  <Column lg={12}>
    <CardSubtitle>{item.product.name}</CardSubtitle>
  </Column>
  <Column>
    <CardSubtitle>$ {item.price}</CardSubtitle>
  </Column>
</Row>
<Row>
  <Column lg={1}/>
  <Column lg={12}>
    <CardSubtitle>Cantidad:</CardSubtitle>
  </Column>
  <Column>
    <CardSubtitle>{item.quantity}{total(item)}</CardSubtitle>
  </Column>
</Row>
{/each}
<hr />
<Row>
  <Column lg={1}/>
  <Column lg={12}>
    <CardTitle>Total:</CardTitle>
  </Column>
  <Column>
    <CardSubtitle>$ {subtotal}</CardSubtitle>
  </Column>
</Row>