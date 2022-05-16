<script>
  import { createEventDispatcher } from 'svelte';
  import validateName from '../utils/validateName';
  import validateFirstName from '../utils/validateFirstName';
  import validatePassword from '../utils/validatePassword';
  import validatePasswordConfirmation from '../utils/validatePasswordConfirmation';  
  import validateMail from '../utils/validateMail';

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

<br/><br/><br/><br/><br/>
<div class="field">
  <div>Email</div>
  <input
    type="email"
    bind:value={email.value}
    placeholder="Email"
  />
  {#if email.error}
    <div>{email.error}</div>
  {/if}
</div>
<div class="field">
  <div>Contraseña</div>
  <input
    type="password"
    bind:value={password.value}
    placeholder="Password"
  />
  {#if password.error}
    <div>{password.error}</div>
  {/if}
</div>
<div class="field">
  <div>Confirmar contraseña</div>
  <input
    type="password"
    bind:value={passwordConfirmation.value}
    placeholder="Confirm password"
  />
  {#if passwordConfirmation.error}
    <div>{passwordConfirmation.error}</div>
  {/if}
</div>

<div class="field">
  <div>Nombre</div>
  <input
    type="name"
    bind:value={name.value}
    placeholder="Name"
  />
  {#if name.error}
    <div>{name.error}</div>
  {/if}
</div>
<div class="field">
  <div>Apellido</div>
  <input
    type="lastName"
    bind:value={lastName.value}
    placeholder="LastName"
  />
  {#if lastName.error}
    <div>{lastName.error}</div>
  {/if}
</div>

<button on:click={onClick}>Registrarse</button>

<style>
  .field {
    margin-bottom: 10px;
  }
</style>
