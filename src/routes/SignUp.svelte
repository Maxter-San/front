
<script>
  import SignUpForm from "../components/SignUpForm.svelte";
  import userStore from '../stores/userStore';
  import request from '../utils/request';
  import { navigate } from "svelte-navigator";

  const onSubmit = async ({ detail }) => {
    const response = await request('sign-up').post({
      email: detail.email.value,
      lastName: detail.lastName.value,
      name: detail.name.value,
      password: detail.password.value,
    });

    if(response.error){
      alert(response.error);
      return;
    }

    $userStore = response.user;
    localStorage.setItem('userId', response.id);
    navigate("/");
  };
</script>

<SignUpForm on:submit={onSubmit} />