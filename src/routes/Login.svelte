<script>
  import LoginForm from "../components/LoginForm.svelte";
  import userStore from '../stores/userStore';
  import request from '../utils/request';
  import { navigate } from "svelte-navigator";

  const onSubmit = async ({ detail }) => {
    const response = await request('login').post({
      email: detail.acount.value,
      password: detail.password.value,
    });

    if(response.error) {
      alert(response.error);
      return;
    }

    $userStore = response.user;
    localStorage.setItem('userId', response.user.id);
    navigate("/");  
  };
</script>

<LoginForm on:submit={onSubmit}/>