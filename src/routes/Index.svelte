<script>
  import { fitsh } from 'fitsh';
  import {onMount} from 'svelte';
  import ProductsCarousel from '../components/ProductsCarousel.svelte';
  import ProductsViewedCarousel from '../components/ProductsViewedCarousel.svelte';
  import ProductItem from '../components/ProductItem.svelte';
</script>

<ProductsCarousel filters={{ sortByViews: 'desc' }} />
<ProductsViewedCarousel />
