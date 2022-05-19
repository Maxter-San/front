<script>
  import userStore from '../stores/userStore';
  import SignUpForm from "../components/SignUpForm.svelte";
  import request from '../utils/request';
  import { navigate } from "svelte-navigator";
  import Header from "../components/Header.svelte";
  import {
    Grid,
    Row,
    Column,
    ToastNotification,
  } from "carbon-components-svelte";

  let errorMessage;
  let isError = false;

  const onSubmit = async ({ detail }) => {
    const response = await request('sign-up').post({
      email: detail.email.value,
      lastName: detail.lastName.value,
      name: detail.name.value,
      password: detail.password.value,
    });

    isError=false;

    if(response.error){
      errorMessage=response.error;
      isError=true;
      return;
    }

    $userStore = response.user;
    localStorage.setItem('userId', response.user.id);
    navigate("/OnBoarding");
  };
</script>

<Header />

<h6> </h6>
<br/><br/><br/><br/><br/>
<Grid>
  <Row>
    <Column lg={1} />
    <Column lg={14}>
      <br/>
        <h2>Crea un usuario</h2>
      <br/><br/>
    </Column>
  </Row>
</Grid>

<SignUpForm on:submit={onSubmit} />

{#if isError}
  <ToastNotification
    hideCloseButton
    kind="error"
    title="Falló inicio de sesión"
    subtitle={errorMessage}
  />
{/if}