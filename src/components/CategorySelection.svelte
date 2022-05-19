<script>
  import request from "../utils/request";
  import CategoryItem from "../components/CategoryItem.svelte";

  let categories = [];

  request('categories').get().then((response) => {
    categories = response;
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

<section>
  <div class="box">
    {#each categories as category}
      <div class="item">
        <CategoryItem 
        category={category}
        />
      </div>
    {/each}
  </div>
</section>
