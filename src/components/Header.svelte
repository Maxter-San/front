<script>
  import { Link } from 'svelte-navigator';
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
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavLink,
  } from "carbon-components-svelte";
  import {
    UserAvatarFilledAlt, 
    ShoppingCart,
  } from "carbon-icons-svelte";

  let isSideNavOpen = false;


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
    <HeaderNavItem href="/" text="Inicio" />
    <HeaderNavMenu text="Categorías" >
      <HeaderNavItem text="xd" />
    </HeaderNavMenu>  
    {#if $userStore}
    <HeaderNavItem text={"Bienvenido/a " + $userStore?.name || ''} />
    <HeaderNavItem  text={"Carrito: " + $userStore.userCart.items.length + " producto(s)"} />
    {:else}
    <HeaderNavItem href="/login" text="Iniciar sesión" />
    <HeaderNavItem href="/sign-up" text="Registrate" />
    {/if}
  </HeaderNav>

  <HeaderUtilities>
    <HeaderSearch placeholder="Buscar producto..."></HeaderSearch>

    <HeaderGlobalAction icon={ShoppingCart} />
  
    <HeaderAction 
      icon={UserAvatarFilledAlt}
      closeIcon={UserAvatarFilledAlt}>
      <HeaderPanelLinks>
        <HeaderPanelDivider>Mi cuenta</HeaderPanelDivider>
        {#if $userStore}
        <HeaderPanelLink href="/">Mi perfil</HeaderPanelLink>
        <HeaderPanelLink href="/">Compras</HeaderPanelLink>
        <HeaderPanelLink on:click={logout}>Cerrar sesión</HeaderPanelLink>
        {:else}
        <HeaderPanelLink href="/login">Iniciar sesión</HeaderPanelLink>
        <HeaderPanelLink href="/sign-up">Registrate</HeaderPanelLink>
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