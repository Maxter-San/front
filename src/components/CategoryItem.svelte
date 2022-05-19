<script>
  import { useNavigate } from 'svelte-navigator';
  import { 
    Card,
    CardTitle,
  } from 'svelte-materialify';

  export let category;

  const navigate = useNavigate();

</script>

<style>
  img {
    width: 300px;
    height: 300px;
    object-fit: contain;
  }

  .backG {
		background-color: #ffffff !important;
	}

  .backG:hover {
		cursor: pointer;
	}
</style>

<div class="backG" 
on:click={() => navigate(`/Search?categoryId=${category.id}`)}>
  <div class="d-flex justify-center mt-4 mb-4">
    <Card style="max-width:350px;">
      <img src={category.image} alt="background" />
      <CardTitle>{category.name}</CardTitle>
    </Card>
  </div>
</div>