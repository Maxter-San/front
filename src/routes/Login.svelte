<script>
  import userStore from '../stores/userStore';
  import LoginForm from "../components/LoginForm.svelte";
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
    const response = await request('login').post({
      email: detail.acount.value,
      password: detail.password.value,
    });

    isError=false;

    if(response.error) {
      errorMessage=response.error;
      isError=true;
      return;
    }

    $userStore = response.user;
    localStorage.setItem('userId', response.user.id);
    navigate("/");  
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
        <h2>Iniciar sesión</h2>
      <br/><br/>
    </Column>
  </Row>
</Grid>

<LoginForm on:submit={onSubmit}/>



{#if isError}
  <ToastNotification
    hideCloseButton
    kind="error"
    title="Falló inicio de sesión"
    subtitle={errorMessage}
  />
{/if}


