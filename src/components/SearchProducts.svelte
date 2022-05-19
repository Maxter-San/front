<script>
  import { HeaderSearch } from "carbon-components-svelte";
  import { useNavigate, useLocation } from 'svelte-navigator';

  const location = useLocation();
  const navigate = useNavigate();

  let value;
  $: searchParams = new URLSearchParams($location.search);

  function search() {
    if(value) {
      searchParams.set('search', value);
      navigate(`/Search?${searchParams}`);
    }
  }

  function updateValue() {
    value = searchParams.get('search');
  }
</script>

<HeaderSearch 
  placeholder="Buscar producto..." 
  on:select={search}
  on:active={updateValue}
  bind:value={value}
/>
