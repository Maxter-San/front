<script>
  import { fitsh } from 'fitsh';
  import {onMount} from 'svelte';
  import ProductsCarousel from '../components/ProductsCarousel.svelte';
  import ProductsViewedCarousel from '../components/ProductsViewedCarousel.svelte';
  import ProductItem from '../components/ProductItem.svelte';
</script>

<h6> </h6>
<br/><br/><br/><br/><br/>
<h2>Producto más vendido</h2>
<br/>
<ProductsCarousel filters={{ limit: '3' }} />
<h2>Tu último producto visto</h2>
<br/>
<ProductsViewedCarousel filters={{ limit: '3' }}/>
