<script>
  import request from '../utils/request';
  import userStore from '../stores/userStore';
  import { 
    Chip,
  } from 'svelte-materialify';
  import {
    NumberInput,
    Button,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";
  import {ShoppingCartPlus} from "carbon-icons-svelte"; 

  export let product;

  let quantity=1;

  async function onClick() {
    if(quantity <= 0)
      return;
    const updatedUser = await request(`cart/${$userStore.userCart.id}/items`).post({
      productId: product.id,
      quantity: quantity,
    });

    $userStore = updatedUser;
  }
</script>

<Grid>
  <Row>
    <Column lg={1} />
    <Column lg={6}>
      <span class="text-overline">Precio:</span>
    </Column>
    <Column lg={6}>
      <span class="text-h5 mb-2">$ {product.price}</span>
    </Column>
  </Row>
  <br /><br /><br />
  <Row>
    <Column lg={1} />
    <Column lg={6}>
      <span class="text-overline">Categoría:</span>
    </Column>
    <Column lg={6}>
      <!-- {#if product.categoryId == 1 || product.categoryId == 2}
        <Chip label outlined class="ma-2 primary-text">{product.category.name}</Chip>
      {:else if product.categoryId == 3 || product.categoryId == 4}
        <Chip label outlined class="ma-2 secondary-text">{product.category.name}</Chip>
      {:else if  product.categoryId == 5 || product.categoryId == 6}
        <Chip label outlined class="ma-2 green-text">{product.category.name}</Chip>
      {:else if product.categoryId == 7 || product.categoryId == 8}
        <Chip label outlined class="ma-2 red-text">{product.category.name}</Chip>
      {:else if product.categoryId > 8}
        <Chip label outlined class="ma-2">{product.category.name}</Chip>
      {/if} -->
    </Column>
  </Row>
</Grid>

<br /><br /><br />

<Grid noGutter>
  {#if $userStore}
    <Row>
      <Column lg={1} />
      <Column lg={12}>
        <NumberInput
        light
        label="Cantidad:"
        min={1}
        value={quantity}
        invalidText="La cantidad no puede ser menor a 1."
      />
      </Column>
    </Row>
    <br /><br /><br />
    {#if product.salable}
      <Row>
        <Column lg={3} />
        <Column lg={10}>
          <Button kind="tertiary" icon={ShoppingCartPlus} on:click={onClick} >Agregar producto al carrito</Button>
        </Column>
      </Row>
    {:else}
      <Row>
        <Column lg={3} />
        <Column lg={10}>
          <Button kind="tertiary" icon={ShoppingCartPlus} disabled >Este producto está agotado</Button>
        </Column>
      </Row>

    {/if}
  {:else}
    <Row>
      <Column lg={1} />
      <Column lg={12}>
        <span class="text-h5 mb-2">Registrate para poder comprar</span>
      </Column>
    </Row>
  {/if}
</Grid>