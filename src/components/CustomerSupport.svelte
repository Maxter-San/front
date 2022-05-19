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
        <h2>Atención al cliente</h2>
      <br/><br/>
      <div class="backG">
        <Accordion>
          <AccordionItem title="Correo de soporte al cliente">
            <p>
              ventas@adosa.com.mx
            </p>
          </AccordionItem>
          <AccordionItem title="Recoger en tienda física">
            <p>
              Únicamente se puede recolectar la compra en la sucursal de ciudad universitaria.
            </p>
          </AccordionItem>
          <AccordionItem title="Políticas de devolución y cambio">
            <p>Estimado cliente para asegurar que su compra sea lo que usted necesita sólo se aceptarán devoluciones o cambios físicos que cumplan con lo siguiente:</p>
                <ul>
                  <li>Solicitarlo dentro de las 72 horas de recibida la mercancía.</li>
                  <li>Traer o enviar el ticket de compra o factura original.</li>
                  <li>Traer el empaque original y manuales incluidos completos.</li>
                  <li>Estar la mercancía en condiciones de producto nuevo.</li>
                  <li>Si el producto es similar pero de diferente color solo se hará nota por el cambio físico.</li>
                  <li>En caso de devolución en ventas a crédito se hara nota de crédito a la cuenta del cliente y en ventas de contado se dará nota de devolución para bonificar en futuras compras en tienda.</li>
                  <li>No se aceptan cambios ni devoluciones en consumibles que estén con empaque abierto.</li>
                  <li>La empresa se reserva el derecho de hacer un cargo de hasta un 20% por devoluciones fuera del plazo en caso de que sean aceptadas.</li>
                </ul>
          </AccordionItem>
        </Accordion>
      </div>
    </Column>
  </Row>
</Grid>