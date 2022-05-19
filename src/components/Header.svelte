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
    SkipToContent,
    ComposedModal,
    ModalHeader,
    ModalFooter,
  } from "carbon-components-svelte";
  import HeaderNavItemCustom from './HeaderNavItemCustom.svelte';
  import HeaderPanelLinkCustom from './HeaderPanelLinkCustom.svelte';
  import {
    UserAvatarFilledAlt, 
    ShoppingCart,
  } from "carbon-icons-svelte";
  import SearchProducts from './SearchProducts.svelte';
  import MenuCategories from './MenuCategories.svelte'

  let isSideNavOpen = false;

  const navigate = useNavigate();

  let open = false;

  function logout() {
    $userStore = null;
    localStorage.removeItem('userId'); 
  }

  function openModal(){
    open=true;
  }
  function close(){
    open=false;
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components-svelte/css/white.css"
  />
</svelte:head>

<Header company="ADOSA" platformName="Compras online" bind:isSideNavOpen>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>

  <!-- <HeaderGlobalAction>
    <img src="/logo.png" alt="ad01" />
  </HeaderGlobalAction> -->

  <HeaderNav>
    <HeaderNavItemCustom to="/" text="Inicio"/>
    <HeaderNavMenu text="Categorías" >

      <MenuCategories />
      
    </HeaderNavMenu>  
    {#if $userStore}
      <HeaderNavItem text={"Bienvenido/a: " + $userStore?.name || ''} />
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
    <HeaderGlobalAction icon={ShoppingCart} on:click={openModal} />
    {/if}

    <HeaderAction 
      icon={UserAvatarFilledAlt}
      closeIcon={UserAvatarFilledAlt}>
      <HeaderPanelLinks>
        <HeaderPanelDivider>Mi cuenta</HeaderPanelDivider>
        {#if $userStore}
        <HeaderPanelLinkCustom to="/MyProfile" text="Mi perfil"/>
        <HeaderPanelLinkCustom to="/Purchases/{$userStore.id}" text="Compras"/>
        <HeaderPanelLink on:click={logout} on:click={() => navigate("/")} >Cerrar sesión</HeaderPanelLink>
        {:else}
        <HeaderPanelLinkCustom to="/login" text="Iniciar sesión"/>
        <HeaderPanelLinkCustom to="/sign-up" text="Registrate"/>
        {/if}
      </HeaderPanelLinks>
    </HeaderAction>

    <HeaderAction>
      <HeaderPanelLinks>
        <HeaderPanelDivider>Sobre nosotros</HeaderPanelDivider>
        <HeaderPanelLink 
          target="_blank"
          onclick="window.open('https://www.google.com/maps/search/adosa/@25.6947938,-100.3412174,12.63z', '_blank');" >
          Ubicación
        </HeaderPanelLink>
        <HeaderPanelLinkCustom to="/AboutUs" text="Información y política" />
        <HeaderPanelDivider>Ayuda</HeaderPanelDivider>
        <HeaderPanelLinkCustom to="/OnBoarding" text=Guia />
        <HeaderPanelLinkCustom  to="/Answers" text="Preguntas frecuente" />
        <HeaderPanelLinkCustom to="/CustomerSupport" text="Atención y contacto" />
      </HeaderPanelLinks>
    </HeaderAction>
  </HeaderUtilities>
</Header>
<hr />

{#if open}
  <ComposedModal bind:open on:submit={close} preventCloseOnClickOutside >
    <ModalHeader label="Adosa" title="Para poder comprar debes estar registrado" />
    <br /><br /><br />
    <ModalFooter
      primaryButtonText="Aceptar"
    />
  </ComposedModal>
{/if}