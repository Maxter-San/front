<script>
  import { HeaderNavItem } from "carbon-components-svelte";
  import { useNavigate } from 'svelte-navigator';
  import request from "../utils/request";

  let categories = [];
  const navigate = useNavigate();

  request('categories').get().then((response) => {
    categories = response;
  }); 


</script>

{#each categories as category}
  <HeaderNavItem text="{category.name}" on:click={() => navigate(`/Search?categoryId=${category.id}`)} />
{/each}