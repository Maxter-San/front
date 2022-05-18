<script>
  import { createEventDispatcher } from 'svelte';
  import validateLoginAcount from '../utils/validateLoginAcount';
  import validateLoginPassword from '../utils/validateLoginPassword';
  import {
    FluidForm,
    TextInput,
    PasswordInput,
    Button,
    Grid,
    Row,
    Column,
    ToastNotification,
  } from "carbon-components-svelte";
  import {Login} from "carbon-icons-svelte";

  const dispatch = createEventDispatcher();

  const acount = {value: '', error: ''};
  const password = {value: '', error: ''};

  async function login() {
    acount.error = validateLoginAcount(acount.value);
    password.error = validateLoginPassword(password.value);

    if(acount.error) return;
    if(password.error) return;

    dispatch('submit', {
      acount,
      password,
    });
  }
</script>

<style>
  .backG {
		background-color: #ffffff !important;
    justify-content: center;
	}
</style>

<Grid>
  <Row>
    <Column lg={1} />
    <Column lg={14}>
      <div class="backG">
        <Grid>
          <br />
          <Row>
            <Column lg={1}/>
            <Column lg={14}>
              <FluidForm>
                <TextInput 
                  light
                  labelText="Email" 
                  placeholder="Introduce tu correo electrónico..."
                  bind:value={acount.value}
                  required />
                <PasswordInput
                  light
                  type="password"
                  labelText="Contraseña"
                  placeholder="Introduce tu contraseña..."
                  bind:value={password.value}
                  required
                />
              </FluidForm>
              <br />
              <Button kind="tertiary" icon={Login} on:click={login} >Iniciar sesión</Button>
              <br />
            </Column>
          </Row>
          <Row><Column><br /><br /></Column></Row>
        </Grid>
      </div>
    </Column>
  </Row>
</Grid>


{#if acount.error}
<ToastNotification
  lowContrast
  hideCloseButton
  kind="error"
  title="Email"
  subtitle={acount.error}
/>
{/if}
{#if password.error}
<ToastNotification
  lowContrast
  hideCloseButton
  kind="error"
  title="Contraseña"
  subtitle={password.error}
/>
{/if}
