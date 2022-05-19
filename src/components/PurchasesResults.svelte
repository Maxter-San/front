<script>
  import userStore from "../stores/userStore";
  import request from "../utils/request";
  import {
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";
  import { 
    Card,
    CardTitle,
    CardSubtitle,
  } from 'svelte-materialify';
import PurchasesResultsProducts from "../components/PurchasesResultsProducts.svelte";

  let purchases = [];
  let cartProducts = [];

  $: request(`purchases/${$userStore.id}`).get().then((response) => {
    purchases = response;
  });
</script>

<style>
  .backG {
		background-color: #ffffff !important;
    justify-content: center;
	}
</style>

<div>
  <Grid>
    <br />
    <Row>
      <Column lg={1}/>
      <Column lg={14}>
        {#each purchases as purchase}       
          <div class="backG">
            <div class="d-flex justify-center mt-4 mb-4">
              <Card style="min-width:100%;">
                <Grid>
                  <Row>
                    <Column lg={1}/>
                    <Column lg={14}>
                      <CardTitle>Tu compra</CardTitle>
                    </Column>
                  </Row>
                    <PurchasesResultsProducts items={purchase.items} />
                  <Row>
                    <br />
                  </Row>
                </Grid>
              </Card>
            </div>
          </div>
          <br /><br />
        {/each}

      </Column>
    </Row>
    <Row><Column><br /><br /></Column></Row>
  </Grid>
</div>