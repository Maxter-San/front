<script>
  import { Link } from 'svelte-navigator';
  import userStore from '../stores/userStore';

  function logout() {
    $userStore = null;
    localStorage.removeItem('userId'); 
  }
</script>

<header>
  {$userStore?.name || ''}
  <Link to="/">Inicio</Link> |
  {#if $userStore}
    <button on:click={logout}>cerrar sesión</button> |
    {$userStore.userCart.items.length}
  {:else}
    <Link to="/login">Iniciar sesión</Link> |
    <Link to="/sign-up">Registrate</Link>
  {/if}
</header>
<hr />
