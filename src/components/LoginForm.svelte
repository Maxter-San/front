<script>
  import { fitsh } from 'fitsh';
  import { navigate } from "svelte-navigator";

  let email;          // let >>>>>>>>>> var
  let password;
 
 async function login(){
    // const res = await fetch("http://localhost:3000/login", {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email: email,
    //     password: password,
    //   })
    // });

    // const json = await res.json();
    const response = await fitsh('http://localhost:3000/login').post({
      email: email,
      password: password,
    });

    localStorage.setItem('userId', response.id);

    navigate("/");
 }
</script>

<input type="text" bind:value={email} placeholder="email" />
<input type="password" bind:value={password} placeholder="password" />
<br />
<button on:click={login}>Iniciar sesion</button>