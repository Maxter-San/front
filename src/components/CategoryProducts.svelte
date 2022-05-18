<script>
  import { useParams } from "svelte-navigator";
  import request from "../utils/request";
  import ProductItem from '../components/ProductItem.svelte';

  let items = [];
  const params = useParams();

  $: console.log($params)

  async function searchProducts(category) {
    const response = await request('products').get({ category });
    items = response;
  }

  $: searchProducts($params.categoryId);
</script>

<section>
  <div class="box">
    {#each items as product}
      <div class="item">
        <ProductItem 
          product={product}
        />
      </div>
    {/each}
  </div>
</section>