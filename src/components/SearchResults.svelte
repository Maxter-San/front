<script>
  import { useLocation } from "svelte-navigator";
  import request from "../utils/request";
  import ProductItem from '../components/ProductItem.svelte';

  let items = [];
  const location = useLocation();

  $: searchParams = new URLSearchParams($location.search);
  
  $:  alert(searchParams.get('search') + searchParams.get('viewsSort') + searchParams.get('categoryId'));
  
  $: request('products').get({ 
    search: searchParams.get('search') || '',
    viewsSort: searchParams.get('viewsSort') || '',
    categoryId: searchParams.get('categoryId') || '',
  }).then((response) => {
    items = response;
  });
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