<script>
  import { useNavigate } from 'svelte-navigator';
  import {HeaderNavItem} from 'carbon-components-svelte';

  export let to;
  export let text;

  const navigate = useNavigate();  
</script>

<HeaderNavItem on:click={() => navigate(to)} text={text} />
