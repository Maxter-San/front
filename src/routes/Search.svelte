<script>
  import Header from "../components/Header.svelte";
  import SearchResults from "../components/SearchResults.svelte";
  import {
    Grid,
    Row,
    Column,
    Accordion,
    AccordionItem
  } from "carbon-components-svelte";
  import SearchFilters from "../components/SearchFilters.svelte";

</script>

<Header />

<h6> </h6>
<br/><br/><br/><br/><br/>

<Grid>
  <Row>
    <Column lg={1} />
    <Column lg={14}>
      <SearchFilters />
    </Column>
  </Row>
  <br>
  <Row>
    <Column lg={1} />    
    <Column lg={14}>
      <br/>
      <h2>Resultados</h2>
      <br/>
      <SearchResults />
    </Column>
  </Row>
</Grid>


