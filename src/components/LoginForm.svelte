<script>
  import { createEventDispatcher } from 'svelte';
  import validateLoginAcount from '../utils/validateLoginAcount';
  import validateLoginPassword from '../utils/validateLoginPassword';

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

<div>
  <input type="text" bind:value={acount.value} placeholder="email" />
  {#if acount.error}
  <div>{acount.error}</div>
  {/if}
</div>
<br />

<div>
  <input type="password" bind:value={password.value} placeholder="password" />
  {#if password.error}
  <div>{password.error}</div>
  {/if}
</div>

<br />
<button on:click={login}>Iniciar sesion</button>
