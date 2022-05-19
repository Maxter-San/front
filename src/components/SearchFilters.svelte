<script>
  import { useNavigate, useParams } from 'svelte-navigator';
  import request from "../utils/request";
  import { 
    Card,
  } from 'svelte-materialify';
  import {
    Grid,
    Row,
    Column,
    Button,
    FormGroup, 
    RadioButton, 
    RadioButtonGroup,
  } from "carbon-components-svelte";

  import {Filter} from "carbon-icons-svelte";

  const params = useParams();
  const navigate = useNavigate();

  let value;
  let viewsSort;
  let categoryId;
  let categories = [];

  $: request('categories').get().then((response) => {
      categories = response;
  }); 

  function selectedCategory(parameter) {
    categoryId = categories[parameter-1].id;
  }

  function selectedViewSort(parameter) {
    viewsSort = parameter;
  };

  function search() {
    if($params.search)
      navigate(`/Search/${value}/${viewsSort}/${categoryId}`);
  };

  $:updateValue();

  function updateValue() {
    value = $params.search;
    viewsSort = $params.viewsSort;
    categoryId = $params.categoryId;
  };
</script>

<style>
  .backG {
		background-color: #ffffff !important;
    justify-content: center;
	}
</style>

<div class="backG">
    <div class="pl-4 pr-4 pt-4">
      <Grid>
        <Row>
          <Column>
            <FormGroup legendText="Ordenar por vistas:">
              <RadioButtonGroup name="radio-button-group" selected="default-selected" orientation="vertical">
                <RadioButton
                  id="radio-1"
                  value="asc"
                  labelText="Ascendiente"
                  on:change={() => selectedViewSort("asc")}
                />
                <RadioButton
                  id="radio-2"
                  value="desc"
                  labelText="Descendiente"
                  on:change={() => selectedViewSort("desc")}
                />
              </RadioButtonGroup>
            </FormGroup>
          </Column>
          <Column>
            <FormGroup legendText="Categoría:">
              <RadioButtonGroup name="radio-button-group" selected="default-selected" orientation="vertical"  bind:value={categoryId}>
                {#each categories as category}
                  <RadioButton labelText={category.name} value={category.id} on:change={() => selectedCategory(category.id)} />
                {/each}
              </RadioButtonGroup>
            </FormGroup>
          </Column>
        </Row>

        <br /><hr /><br />
        <Row>
          <Column lg={7}/>
          <Column lg={6}>
            <Button kind="tertiary" icon={Filter} on:click={search} >Filtrar</Button>
          </Column>
        </Row>
       <br /><br />
      </Grid>
    </div>
</div>