<script>
  import userStore from '../stores/userStore';
  import { 
    Card,
  } from 'svelte-materialify';
  import {
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";

  function substraer (text) {
    return text.substr(12);
  };

</script>

<style>
  .backG {
		background-color: #ffffff !important;
    justify-content: center;
	}
</style>

<div class="backG">
  <Card outlined style="max-width:100%;">
    <div class="pl-4 pr-4 pt-4">
      <Grid>
        <Row>
          <Column>
            <span class="text-h5 mb-2">Información personal</span>
          </Column>
        </Row>
        <br />
        <Row>
          <Column lg={5}>
            <span class="text-overline">Nombre: </span>
          </Column> 
          <Column>
            <span class="text-overline">{$userStore.name} {$userStore.lastName}</span>
          </Column>
        </Row>
        <Row>
          <Column lg={5}>
            <span class="text-overline">Tarjeta:</span>
          </Column>
          <Column>
            <span class="text-overline">**** **** **** {substraer($userStore.card)}</span>
          </Column>       
        </Row>
        <br /><hr /><br />
        <Row>
          <Column>
            <span class="text-h5 mb-2">Domicilio</span>
          </Column>
        </Row>
        <br />
        <Row>
          <Column lg={5}>
            <span class="text-overline">Calle: </span>
          </Column>
          <Column>
            <span class="text-overline">{$userStore.address}</span>
          </Column>
        </Row>
        <Row> 
          <Column lg={5}>
            <span class="text-overline">Código postal: </span>
          </Column>
          <Column>
            <span class="text-overline">{$userStore.postcode}</span>
          </Column>
        </Row>
        <Row>
          <Column lg={5}>
            <span class="text-overline">Ciudad: </span>
          </Column>
          <Column><span class="text-overline">
            {$userStore.city}</span>
          </Column>
        </Row>
       <br /><br />
      </Grid>
    </div>
  </Card>
</div>