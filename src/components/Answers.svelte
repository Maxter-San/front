<script>
  import Header from "../components/Header.svelte";
  import {
    Grid,
    Row,
    Column,
    Accordion, 
    AccordionItem,
  } from "carbon-components-svelte";
</script>

<style>
  .backG {
		background-color: #ffffff !important;
	}
</style>

<Header />

<h6> </h6>
<br/><br/><br/><br/><br/>
<Grid>
  <Row>
    <Column lg={1} />
    <Column lg={14}>
      <br/>
        <h2>Preguntas frecuentes</h2>
      <br/><br/>
      <div class="backG">
        <Accordion>
          <AccordionItem title="Cómo facturar">
            <p>
              La facturación se maneja por medio de atención al cliente, póngase en contacto con soporte para realizar el trámite de facturación.
            </p>
          </AccordionItem>
          <AccordionItem title="Cuánto tarda en llegar el envío">
            <p>
              El envío tarda de 2 a 5 días hábiles y dependiendo de la condición del clima.
            </p>
          </AccordionItem>
          <AccordionItem title="Recuperación de contraseña">
            <p>
              Póngase en contacto con soporte para comprobar su identidad como verdadero propietario de la cuenta.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </Column>
  </Row>
</Grid>