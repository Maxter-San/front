<script>
    import { 
    Card,
    CardTitle,
    CardSubtitle,
  } from 'svelte-materialify';
  import {
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";

  export let currentIndex;
</script>

<style>
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .align {
    text-align: center;
  }
</style>

<Grid>
  <br />
  <Row>
    <Column lg={1}/>
    <Column lg={14}>
      <Card style="min-width:50%;" >
      {#if currentIndex == 0}       
          <img src="../bienvenida.png" alt="Bienvenida" />
          <div class="align">
            <h2>Te damos la bienvenida</h2>
            <CardSubtitle>Gracias por registrarte en Adosa compras online.<br />Pulsa el botón de siguiente</CardSubtitle>
          </div>
      {/if}
      {#if currentIndex == 1}
        <img src="../navegacion.png" alt="Navegación" />
        <div class="align">
          <h2>Navegación</h2>
          <CardSubtitle>¡Ahora puedes gestionar tu cuenta, <b>agregar tu información de contacto</b> y ver tus compras realizadas!<br />¡Si no sabes que comprar puedes ver las tendencias!</CardSubtitle>
        </div>
      {/if}
      {#if currentIndex == 2}
        <img src="../buscar.png" alt="Buscar" />
        <div class="align">
          <h2>Cómo buscar</h2>
          <CardSubtitle>El encabezado ofrece una sección para ver por categorías o buscar por nombre.<br />Dentro del apartado de buscar puedes agregar filtros para facilitar la busqueda.</CardSubtitle>
        </div>
      {/if}
      {#if currentIndex == 3}
        <img src="../comprar.png" alt="Comprar" />
        <div class="align">
          <h2>Cómo comprar</h2>
          <CardSubtitle>El carrito de compra te da la facilidad de cambiar la cantidad de productos.<br />Es necesario que llenes tu <b>información de contacto</b> primero.</CardSubtitle>
        </div>
      {/if}
      {#if currentIndex >= 4}       
          <img src="../bienvenida.png" alt="Bienvenida" />
          <div class="align">
            <h2>Finalizó introducción</h2>
            <CardSubtitle>Gracias por registrarte en Adosa compras online.<br />Favor de registrar tu información de contacto</CardSubtitle>
          </div>
      {/if}
    </Card>
    </Column>
  </Row>
</Grid>