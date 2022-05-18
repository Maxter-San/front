<script>
  import {HeaderSearch} from "carbon-components-svelte";
  import { useNavigate, useParams } from 'svelte-navigator';
  // import request from "../utils/request";

  const params = useParams();
  const navigate = useNavigate();
  let value;

  function search() {
    if(value) {
      navigate(`/Search/${value}`);
    }
  }

  function updateValue() {
    value = $params.search
  }
</script>

<HeaderSearch 
  placeholder="Buscar producto..." 
  on:select={search}
  on:active={updateValue}
  bind:value={value}
/>
