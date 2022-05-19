<script>
  import { createEventDispatcher } from 'svelte';
  import validateName from '../utils/validateName';
  import validateFirstName from '../utils/validateFirstName';
  import validatePassword from '../utils/validatePassword';
  import validatePasswordConfirmation from '../utils/validatePasswordConfirmation';  
  import validateMail from '../utils/validateMail';
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
  import {UserFollow} from "carbon-icons-svelte";

  const dispatch = createEventDispatcher();

  const email = { value: '', error: '' };
  const lastName = { value: '', error: '' };
  const name = { value: '', error: '' };
  const password = { value: '', error: '' };
  const passwordConfirmation = { value: '', error: '' };

  async function onClick() {
    email.error = validateMail(email.value);
    lastName.error = validateFirstName(lastName.value);
    name.error = validateName(name.value);
    password.error = validatePassword(password.value);
    passwordConfirmation.error = validatePasswordConfirmation(password.value, passwordConfirmation.value);

    if (email.error) return;
    if (lastName.error) return;
    if (name.error) return;
    if (password.error) return;
    if (passwordConfirmation.error) return;

    dispatch('submit', {
      email,
      lastName,
      name,
      password,
      passwordConfirmation,
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
                  labelText="Nombre" 
                  placeholder="Introduce tu(s) nombre(s)..."
                  bind:value={name.value}
                  required />
                  <TextInput 
                  light
                  labelText="Apellido(s)" 
                  placeholder="Introduce tu(s) apellido(s)..."
                  bind:value={lastName.value}
                  required />
                <TextInput 
                  light
                  labelText="Email" 
                  placeholder="Introduce tu correo electrónico..."
                  bind:value={email.value}
                  required />
                <PasswordInput
                  light
                  type="password"
                  labelText="Contraseña"
                  placeholder="Introduce tu contraseña..."
                  bind:value={password.value}
                  required
                />
                <PasswordInput
                  light
                  type="Confirmar contraseña"
                  labelText="Confirmar contraseña"
                  placeholder="Introduce tu contraseña..."
                  bind:value={passwordConfirmation.value}
                  required
                />
              </FluidForm>
              <br />
              <Button kind="tertiary" icon={UserFollow} on:click={onClick} >Registrarse</Button>
              <br />
            </Column>
          </Row>
          <Row><Column><br /><br /></Column></Row>
        </Grid>
      </div>
    </Column>
  </Row>
</Grid>


{#if name.error}
<ToastNotification
  lowContrast
  hideCloseButton
  kind="error"
  title="Nombre(s)"
  subtitle={name.error}
/>
{/if}
{#if lastName.error}
<ToastNotification
  lowContrast
  hideCloseButton
  kind="error"
  title="Apellido(s)"
  subtitle={lastName.error}
/>
{/if}
{#if email.error}
<ToastNotification
  lowContrast
  hideCloseButton
  kind="error"
  title="Email"
  subtitle={email.error}
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
{#if passwordConfirmation.error}
<ToastNotification
  lowContrast
  hideCloseButton
  kind="error"
  title="Confirmar contraseña"
  subtitle={passwordConfirmation.error}
/>
{/if}