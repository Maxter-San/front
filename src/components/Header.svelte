<script>
  import { useNavigate } from 'svelte-navigator';
  import userStore from '../stores/userStore';
  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
    HeaderUtilities,
    HeaderAction,
    HeaderGlobalAction,
    HeaderPanelLinks,
    HeaderPanelDivider,
    HeaderPanelLink,
    HeaderSearch,
    SkipToContent,
  } from "carbon-components-svelte";
  import HeaderNavItemCustom from './HeaderNavItemCustom.svelte';
  import HeaderPanelLinkCustom from './HeaderPanelLinkCustom.svelte';
  import {
    UserAvatarFilledAlt, 
    ShoppingCart,
  } from "carbon-icons-svelte";
  import SearchProducts from './SearchProducts.svelte';

  let isSideNavOpen = false;

  const navigate = useNavigate();


  function logout() {
    $userStore = null;
    localStorage.removeItem('userId'); 
  }

  //<Link to="/sign-up">Registrate</Link>
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components-svelte/css/white.css"
  />
</svelte:head>

<Header company="Adosa" platformName="Compras online" bind:isSideNavOpen>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>

  <!--<HeaderGlobalAction icon={ShoppingCart} /> -->

  <HeaderNav>
    <HeaderNavItemCustom to="/" text="Inicio"/>
    <HeaderNavMenu text="Categorías" >
      <HeaderNavItem text="xd" />
    </HeaderNavMenu>  
    {#if $userStore}
      <HeaderNavItem text={"Bienvenido/a " + $userStore?.name || ''} />
      <HeaderNavItem text={"Carrito: " + $userStore.userCart.items.length + " producto(s)"} />
    {:else}
      <HeaderNavItemCustom to="/login" text="Iniciar sesión" />
      <HeaderNavItemCustom to="/sign-up" text="Registrate" />
    {/if}
  </HeaderNav>

  <HeaderUtilities>


    <SearchProducts />





    {#if $userStore}
    <HeaderGlobalAction icon={ShoppingCart} on:click={() => navigate(`/ShoppingCart/${$userStore.id}`)} />
    {:else}
    <HeaderGlobalAction icon={ShoppingCart} onclick="location.href='/'"  />
    {/if}

    <HeaderAction 
      icon={UserAvatarFilledAlt}
      closeIcon={UserAvatarFilledAlt}>
      <HeaderPanelLinks>
        <HeaderPanelDivider>Mi cuenta</HeaderPanelDivider>
        {#if $userStore}
        <HeaderPanelLinkCustom to="/" text="Mi perfil"/>
        <HeaderPanelLinkCustom to="/ShoppingCart/{$userStore.id}" text="Compras"/>
        <HeaderPanelLink on:click={logout} on:click={() => navigate("/")} >Cerrar sesión</HeaderPanelLink>
        {:else}
        <HeaderPanelLinkCustom to="/login" text="Iniciar sesión"/>
        <HeaderPanelLinkCustom to="/sign-up" text="Registrate"/>
        {/if}
      </HeaderPanelLinks>
    </HeaderAction>

    <HeaderAction>
      <HeaderPanelLinks>
        <HeaderPanelDivider>Ayuda</HeaderPanelDivider>
        <HeaderPanelLink>Guia</HeaderPanelLink>
        <HeaderPanelLink>Preguntas frecuente</HeaderPanelLink>
      </HeaderPanelLinks>
    </HeaderAction>
  </HeaderUtilities>
</Header>
<hr />