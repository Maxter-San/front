<script>
  import userStore from '../stores/userStore';
  import { useNavigate } from 'svelte-navigator';
  import { 
    Card,
  } from 'svelte-materialify';
  import {
    Grid,
    Row,
    Column,
    Button,
    ComposedModal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "carbon-components-svelte";
  import {Currency} from "carbon-icons-svelte"; 
  import request from '../utils/request';

  let open = false;

  const navigate = useNavigate();

  async function confirm(){
    const userData = await request(`users/${$userStore.id}/purchases`).post();
    $userStore = userData;
    open=false;
    navigate("/");
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
            <span class="text-h5 mb-2">Pago</span>
          </Column>
        </Row>
        <br>
        <Row>
          <Column lg={5}>
            <span class="text-overline">Subtotal: </span>
          </Column> 
          <Column>
            <span class="text-overline">$ </span>
          </Column>
        </Row>  
        <Row>
          <Column lg={5}>
            <span class="text-overline">Envío: </span>
          </Column> 
          <Column>
            <span class="text-overline">$ 0.00 </span>
          </Column>
        </Row>
        <br /><hr /><br />
        <Row>
          <Column>
            <span class="text-h5 mb-2">Total</span>
          </Column>
        </Row>
        <br />
        <Row>
          <Column lg={5}>
            <span class="text-overline">Total: </span>
          </Column>
          <Column>
            <span class="text-overline">$ dinero xd </span>
          </Column>
        </Row>
        <br />
        <Row>
          <Column lg={5}></Column>
          <Column>
          <Button kind="tertiary" icon={Currency} on:click={() => (open = true)} >¡Comprar ya!...</Button>
          </Column>
        </Row>
        <br /><br />
      </Grid>
    </div>
  </Card>
</div>

{#if open}
  <ComposedModal bind:open on:submit={confirm} preventCloseOnClickOutside >
    <ModalHeader label="Adosa" title="Confirmación de compra" />
    <br /><br /><br />
    <ModalFooter
      primaryButtonText="Aceptar"
      secondaryButtonText="Cancelar"
      on:click:button--secondary={({ detail }) => {
        if (detail.text === "Cancelar") open = false;
      }}
       on:click:button={({ detail }) => {
        if (detail.text === "Aceptar") alert("a");
      }}

    />
  </ComposedModal>
{/if}