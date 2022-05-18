<script>
  import { useParams } from "svelte-navigator";
  import request from "../utils/request";
  import ProductItem from '../components/ProductItem.svelte';


  let items = [];
  const params = useParams();

  async function searchProducts(search) {
    const response = await request('products').get({ search });
    items = response;
  }

  $: searchProducts($params.search);
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