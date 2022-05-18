<script>
  import {HeaderSearch} from "carbon-components-svelte";
  import request from "../utils/request";

  let timeoutId = 0;

  function search() {
    // request()
  }

  function handleChange({ target }) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      search(target.value);
    }, 300);
  }
</script>

<HeaderSearch placeholder="Buscar producto..." on:input={handleChange} />
