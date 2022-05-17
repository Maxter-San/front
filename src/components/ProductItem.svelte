<script>
  import { 
    Card,
    CardTitle,
    CardSubtitle,
  } from 'svelte-materialify';

  export let product;

  let active = false;
  function toggle() {
    active = !active;
  }
</script>

<div class="backG" onclick="location.href='/product/{product.id}'">
  <div class="d-flex justify-center mt-4 mb-4">
    <Card style="max-width:350px;">
      <img src={product.photo} alt="background" />
      <CardTitle>{product.price}</CardTitle>
      <CardSubtitle>{product.name}</CardSubtitle>
    </Card>
  </div>
</div>

<!-- <div class="backG">
  <Link to="/product/{product.id}">
    <div class="card-container">
      <Card>
        <CardText>
          <div class="image-container">
            <img src={product.photo} alt='imagen {product.name}' />
          </div>
        </CardText>
         <div class="item">
          <h1>{JSON.stringify(stringDescription)}</h1>
          <div class="image-container">
            <img src={product.photo} alt='imagen {product.name}' />
          </div>
          <h2 class="a">{product.name}</h2>
          <h4>{product.description}</h4>
          <h2>{product.price} $</h2>
        </div>
      </Card>
    </div>
  </Link>
</div> -->

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
