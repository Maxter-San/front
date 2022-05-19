<script>
  import userStore from '../stores/userStore';
  import { createEventDispatcher } from 'svelte';
  import validateName from '../utils/validateName';
  import validateFirstName from '../utils/validateFirstName';
  import validateNewPassword from '../utils/validateNewPassword';
  import validatePasswordConfirmation from '../utils/validatePasswordConfirmation';
  import validateCardNumber from '../utils/validateCardNumber';
  import validateEmptyField from '../utils/validateEmptyField';
  import validatePostCode from '../utils/validatePostCode';
  import {
    FluidForm,
    TextInput,
    PasswordInput,
    Button,
    Grid,
    Row,
    Column,
    ToastNotification,
    Checkbox,
  } from "carbon-components-svelte";
  import {UserSettings} from "carbon-icons-svelte";

  const dispatch = createEventDispatcher();

  const lastName = { value: '', error: '' };
  const name = { value: '', error: '' };
  const password = { value: '', error: '' };
  const passwordConfirmation = { value: '', error: '' };
  const card = { value: '', error: '' };
  const address = { value: '', error: '' };
  const postcode = { value: '', error: '' };
  const city = { value: '', error: '' };
  
  let checked = false;

  $: setValues(!$userStore);

  function setValues() {
    if(!$userStore)
      return;

    lastName.value = $userStore.lastName;
    name.value = $userStore.name;
    card.value = $userStore.card;
    address.value = $userStore.address;
    postcode.value = $userStore.postcode;
    city.value = $userStore.city;
  }

  async function onClick() {
    lastName.error = validateFirstName(lastName.value);
    name.error = validateName(name.value);
    passwordConfirmation.error = validatePasswordConfirmation(passwordConfirmation.value, $userStore.password);
    if(checked)
      password.error = validateNewPassword(password.value);
    card.error = validateCardNumber(card.value);
    address.error = validateEmptyField(address.value);
    postcode.error = validatePostCode(postcode.value);
    city.error = validateName(city.value);

    if (lastName.error) return;
    if (name.error) return;
    if (passwordConfirmation.error) return;
    if (password.error  && checked) return;    
    if (card.error) return;
    if (address.error) return;
    if (postcode.error) return;
    if (city.error) return;

    let thePassword;
    if(checked)
      thePassword = password;
    else
      thePassword = passwordConfirmation;

    dispatch('submit', {
      lastName,
      name,
      password: thePassword,
      card,
      address,
      postcode,
      city,
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
                  labelText="Tarjeta de débito" 
                  placeholder="Introduce los dígitos de tu tarjeta..."
                  bind:value={card.value}
                  required />
                <TextInput 
                  light
                  labelText="Calle y número" 
                  placeholder="Introduce tu domicilio..."
                  bind:value={address.value}
                  required />
                <TextInput 
                  light
                  labelText="Código postal" 
                  placeholder="Introduce el código postal..."
                  bind:value={postcode.value}
                  required />
                <TextInput 
                  light
                  labelText="Ciudad" 
                  placeholder="Introduce la ciudad..."
                  bind:value={city.value}
                  required />
                <PasswordInput
                  light
                  type="password"
                  labelText="Confirma cambios escribiendo tu contraseña"
                  placeholder="Introduce tu contraseña..."
                  bind:value={passwordConfirmation.value}               
                />
                <Checkbox labelText="Cambiar contraseña" bind:checked/>            
                <PasswordInput
                  light
                  type="password"
                  labelText="Nueva contraseña"
                  placeholder="Introduce tu nueva contraseña..."
                  bind:value={password.value}
                  disabled={!checked}                
                />
              </FluidForm>
              <br />
              <Button kind="tertiary" icon={UserSettings} on:click={onClick} >Actualizar</Button>
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
{#if card.error}
<ToastNotification
  lowContrast
  hideCloseButton
  kind="error"
  title="Tarjeta de débito"
  subtitle={card.error}
/>
{/if}
{#if address.error}
<ToastNotification
  lowContrast
  hideCloseButton
  kind="error"
  title="Domicilio"
  subtitle={address.error}
/>
{/if}
{#if postcode.error}
<ToastNotification
  lowContrast
  hideCloseButton
  kind="error"
  title="Código postal"
  subtitle={postcode.error}
/>
{/if}
{#if city.error}
<ToastNotification
  lowContrast
  hideCloseButton
  kind="error"
  title="Ciudad"
  subtitle={city.error}
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
{#if password.error}
<ToastNotification
  lowContrast
  hideCloseButton
  kind="error"
  title="Contraseña nueva"
  subtitle={password.error}
/>
{/if}
