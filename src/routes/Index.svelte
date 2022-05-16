<script>
  import { fitsh } from 'fitsh';
  import {onMount} from 'svelte';
  import userStore from '../stores/userStore';
  import ProductsCarousel from '../components/ProductsCarousel.svelte';
  import ProductsViewedCarousel from '../components/ProductsViewedCarousel.svelte';
  import AdCarousel from '../components/AdCarousel.svelte'
  import ProductItem from '../components/ProductItem.svelte';
</script>

<h6> </h6>
<br/><br/><br/><br/><br/>
<AdCarousel/>
<br/>
<h2>En tendencia</h2>
<br/>
<ProductsCarousel filters={{ limit: '5' }} />
<h2>Productos más vendido</h2>
<br/>

<h2>Tus últimos productos vistos</h2>
<br/>
<ProductsViewedCarousel filters={{ limit: '3' }} />
