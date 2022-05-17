<script>
  import { useNavigate } from 'svelte-navigator';
  import {HeaderPanelLink} from 'carbon-components-svelte';

  export let to;
  export let text;

  const navigate = useNavigate();

</script>

<HeaderPanelLink on:click={() => navigate(to)} text={text} />