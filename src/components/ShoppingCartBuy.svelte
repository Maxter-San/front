<script>
  import userStore from '../stores/userStore';
  import { useNavigate } from 'svelte-navigator';
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
    ComposedModal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "carbon-components-svelte";
  import {ShoppingCartArrowDown} from "carbon-icons-svelte"; 
  import request from '../utils/request';

  let cartProducts = [];
  let subtotal = 0;

  $: if($userStore) {   
    let userCartId = $userStore.userCart.id;
    request(`cart`)(userCartId).get().then((data) => {
      cartProducts = data.products;
      total();
    });

  };

  const navigate = useNavigate();
  let open = false;

  function total () {
    subtotal=0;
    cartProducts.forEach(element => {
      subtotal += element.product.price * element.quantity;
    });
  }

  function validateContactInfo(){
    if($userStore.address){
      navigate(`/Purchase/${$userStore.id}`);
    }
    else{
      open=true;
    }
  }
  
  async function confirm(){
    open=false;
    navigate("/MyProfile");
  };
</script>

<style>
  .backG {
		background-color: #ffffff !important;
    justify-content: center;
	}
</style>

<div class="backG">
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
            <Button kind="tertiary" icon={ShoppingCartArrowDown} on:click={validateContactInfo} >Comprar</Button>
          </Column>
        </Row>

       <br /><br />

      </Grid>
    </div>
  </Card>
</div>

{#if open}
  <ComposedModal bind:open on:submit={confirm} preventCloseOnClickOutside >
    <ModalHeader label="Adosa" title="Para poder avanzar necesitas terminar de llenar tu información de contacto" />
    <br /><br /><br />
    <ModalFooter
      primaryButtonText="Aceptar"
      secondaryButtonText="En otro momento"
      on:click:button--secondary={({ detail }) => {
        if (detail.text === "En otro momento") 
          navigate("/");
      }}
    />
  </ComposedModal>
{/if}