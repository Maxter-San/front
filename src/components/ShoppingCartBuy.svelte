<script>
  import userStore from '../stores/userStore';
  import { fitsh } from 'fitsh';
  import { 
    Card,
  } from 'svelte-materialify';
  import {
   Button,
  } from "carbon-components-svelte";
  import {
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";
  import {ShoppingCartArrowDown} from "carbon-icons-svelte"; 

  let cartProducts = [];
  let subtotal = 0;

  $: if($userStore) {
    let userCartId = $userStore.userCart.id;
    fitsh(`http://localhost:3000/cart`)(userCartId).get().then((data) => {
      cartProducts = data.products;
    });
  };

</script>

<div class="justify-center mt-4 mb-4">
  <Card outlined style="max-width:100%;">
    <div class="pl-4 pr-4 pt-4">
      <Grid>
        <Row>
          <Column>
            <span class="text-overline">Producto</span>
          </Column>
          <Column>
            <span class="text-overline">Cantidad</span>
          </Column>
          <Column>
            <span class="text-overline">Precio</span>
          </Column>
        </Row>
       
        {#each cartProducts as cartProduct}       
          <Row>
            <Column>
              <span class="text-overline">{cartProduct.product.name}</span>
            </Column>
            <Column>
              <span class="text-h5 mb-2">{cartProduct.quantity}</span>
            </Column>
            <Column>
              <span class="text-h5 mb-2">$ {cartProduct.product.price}</span>
            </Column>
          </Row>
        {/each}
        
        <br /><hr /><br />

        <Row>
          <Column>
            <span class="text-overline">Subtotal</span>
          </Column>
          <Column />
          <Column>
            <span class="text-h5 mb-2">$ {subtotal}</span>
          </Column>
        </Row>

        <br /><hr /><br />

        <Row>
          <Column />
          <Column />
          <Column>
            <Button kind="tertiary" icon={ShoppingCartArrowDown}>Comprar</Button>
          </Column>
        </Row>

       <br /><br />

      </Grid>
    </div>
  </Card>
</div>