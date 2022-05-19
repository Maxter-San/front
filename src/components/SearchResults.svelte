<script>
  import { useParams } from "svelte-navigator";
  import request from "../utils/request";
  import ProductItem from '../components/ProductItem.svelte';


  let items = [];
  const params = useParams();

  async function searchProducts() {
    const response = await request('products').get({ 
      search: $params.search,
      viewsSort: $params.viewsSort,
      categoryId: $params.categoryId,
    });
    items = response;
  }

  $: searchProducts();
</script>

<style>
  .box {
    display: flex;
    overflow: auto;
    flex-wrap: wrap;
    min-height: min-content;
    gap: 2.83%;
  }
</style>

<div class="box">
  {#each items as product}
    <div class="item">
      <ProductItem 
        product={product}
      />
    </div>
  {/each}
</div>