<script>
  import { fitsh } from 'fitsh';
  import { navigate } from "svelte-navigator";
  import userStore from '../stores/userStore';

  let email = '';
  let lastName = '';
  let name = '';
  let password = '';

  async function onClick() {
    const response = await fitsh('http://localhost:3000/sign-up').post({
      email: email,
      lastName: lastName,
      name: name,
      password: password,
    });

    $userStore = response;
    localStorage.setItem('userId', response.id);
    navigate("/");
  }
</script>

<div class="field">
  <div>Email</div>
  <input type="email" bind:value={email} placeholder="Email" />
</div>
<div class="field">
  <div>Contraseña</div>
  <input type="password" bind:value={password} placeholder="Password" />
</div>
<div class="field">
  <div>Nombre</div>
  <input type="name" bind:value={name} placeholder="Name" />
</div>
<div class="field">
  <div>Apellido</div>
  <input type="lastName" bind:value={lastName} placeholder="LastName" />
</div>

<button on:click={onClick}>Registrarse</button>

<style>
  .field {
    margin-bottom: 10px;
  }
</style>
