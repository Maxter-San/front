<script>
  import {Link} from "svelte-navigator";
  export let product;
</script>

<Link to="/product/{product.id}">
  <div class="item">
    <div class="image-container">
      <img src={product.photo} alt='imagen {product.name}' />
    </div>
    <h1 class="a">{product.name}</h1>
    <h2>{product.description}</h2>
  </div>
</Link>

<style>
  .item {
    width: 300px;
    height: 500px;

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
