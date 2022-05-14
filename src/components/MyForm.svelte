<script>
  import { createEventDispatcher } from 'svelte';
  import validateName from '../utils/validateName';
  import validateAge from '../utils/validateAge';

  const dispatch = createEventDispatcher();

  const objeto = { error: '', user: null };

  const { error, user } = user;

  const firstName = { element: null, error: '', value: '' };
  const lastName = { element: null, error: '', value: '' };
  const age = { element: null, error: '', value: '' };

  function handleSubmit() {
    firstName.error = validateName(firstName.value);
    lastName.error = validateName(lastName.value);
    age.error = validateAge(age.value);

    if (firstName.error === '' && lastName.error === '' && age.error === '') {
     dispatch('submit', {
       firstName,
       lastName,
       age,
     });
    }
  }
</script>

<div>
  <div>Nombre</div>
  <input
    type="text"
    bind:value={firstName.value} id="test"
  />
  {#if firstName.error}
    <div>{firstName.error}</div>
  {/if}
</div>
<br />

<div>
  <div>Apellidos</div>
  <input
    type="text"
    bind:value={lastName.value}
  />
  {#if lastName.error}
    <div>{lastName.error}</div>
  {/if}
</div>
<br />

<div>
  <div>Edad</div>
  <input
    type="number"
    bind:value={age.value}
  />
  {#if age.error}
    <div>{age.error}</div>
  {/if}
</div>
<br />

<button on:click={handleSubmit}>
  Ok
</button>
