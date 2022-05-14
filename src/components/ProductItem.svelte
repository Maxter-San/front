<script>
  import { Link } from "svelte-navigator";
  import { Card, CardText } from 'svelte-materialify';

  export let product;
  export let stringDescription;
</script>

<Link to="/product/{product.id}">
  <div class="card-container">
    <Card raised>
      <CardText>
        {stringDescription}
        <div class="image-container">
          <img src={product.photo} alt='imagen {product.name}' />
        </div>
      </CardText>
      <!-- <div class="item">
        <h1>{JSON.stringify(stringDescription)}</h1>
        <div class="image-container">
          <img src={product.photo} alt='imagen {product.name}' />
        </div>
        <h2 class="a">{product.name}</h2>
        <h4>{product.description}</h4>
        <h2>{product.price} $</h2>
      </div> -->
    </Card>
  </div>
</Link>

<style>
  .card-container {
    position: relative;
    /* width: 400px; */
    height: 400px;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }

  .a {
    color:black;
  }

  .image-container {
    display: flex;
    overflow: hidden;
  }
</style>
