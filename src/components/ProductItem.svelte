<script>
  import {Link} from "svelte-navigator";
  export let product;
  export let stringDescription;
</script>

<Link to="/product/{product.id}">
  <div class="item">
    <h1>{JSON.stringify(stringDescription)}</h1>
    <div class="image-container">
      <img src={product.photo} alt='imagen {product.name}' />
    </div>
    <h2 class="a">{product.name}</h2>
    <h4>{product.description}</h4>
    <h2>{product.price} $</h2>
  </div>
</Link>

<style>
  .item {
    width: 300px;
    height: 600px;

    border: solid 1px black;
    border-radius: 10px;
    padding: 5px;
  }

  .item:hover{
    border-color: red;
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
