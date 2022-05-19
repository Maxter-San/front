<script>
  import userStore from '../stores/userStore';
  import ProfileForm from '../components/ProfileForm.svelte';
  import request from '../utils/request';
  import { navigate } from "svelte-navigator";
  import Header from "../components/Header.svelte";
  import {
    Grid,
    Row,
    Column,
    ToastNotification,
    ModalHeader,
    ModalBody,
    ModalFooter,
ComposedModal,
  } from "carbon-components-svelte";

  let errorMessage;
  let isError = false;
  let open = false;

  const onSubmit = async ({ detail }) => {
    const response = await request('myProfile').post({
      userId: $userStore.id,
      name: detail.name.value,
      lastName: detail.lastName.value,
      password: detail.password.value,
      card: detail.card.value,
      address: detail.address.value,
      postcode: detail.postcode.value,
      city: detail.city.value,
    });

    isError=false;

    if(response.error){
      errorMessage=response.error;
      isError=true;
      return;
    }
    else{
    $userStore = response.user;

    open=true;
    }
    //navigate("/");
  };

  function close(){
    open=false;
  }

</script>

<Header />

<h6> </h6>
<br/><br/><br/><br/><br/>
<Grid>
  <Row>
    <Column lg={1} />
    <Column lg={14}>
      <br/>
        <h2>Tu información de usuario</h2>
      <br/><br/>
    </Column>
  </Row>
</Grid>

<ProfileForm on:submit={onSubmit} />

{#if isError}
  <ToastNotification
    hideCloseButton
    kind="error"
    title="Mi perfil"
    subtitle={errorMessage}
  />
{/if}

{#if open}
  <ComposedModal bind:open on:submit={close} preventCloseOnClickOutside >
    <ModalHeader label="Adosa" title="¡Cambios realizados con exito!" />
    <br /><br /><br />
    <ModalFooter
      primaryButtonText="Aceptar"
    />
  </ComposedModal>
{/if}