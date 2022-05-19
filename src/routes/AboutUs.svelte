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
        <h2>Sobre nosotros</h2>
      <br/><br/>
      <div class="backG">
        <Accordion>
          <AccordionItem title="Quiénes somos">
            <p>
              ADOSA es una empresa eje dentro del ramo de comercialización de artículos para oficina, papelería, y artes gráficas, siendo asi la más importante del Norte de México y uno de los Principales Mayoristas que distribuyen Artículos de Oficina y Escolares en México.
            </p>
          </AccordionItem>
          <AccordionItem title="Historia">
            <p>
              Abastecedora de Oficinas S.A. de C.V. fue fundada en Monterrey N.L. en 1947 como una pequeña Papelería al Menudeo de Artículos de Oficina y como complemento a una Imprenta instalada en un local contiguo, que además de hacer Trabajos de Impresión, comercializaba Productos para Artes Gráficas tales como Papeles, Sobres, Tintas Etc.
            </p>
          </AccordionItem>
          <AccordionItem title="Da tu opinión">
            <p>
              Para nosotros es muy importante tu opinión, por eso te invitamos a enviar un correo para que nos cuentes como fue tu experiencia.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </Column>
  </Row>
</Grid>