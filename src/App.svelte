<script>
	import { Router, Route, Link } from "svelte-navigator";
	import Header from './components/Header.svelte';
	import Index from "./routes/Index.svelte";
	import Login from "./routes/Login.svelte";
	import Product from "./routes/Product.svelte";
	import SignUp from "./routes/SignUp.svelte";
	import { MaterialApp } from 'svelte-materialify';
	import userStore from './stores/userStore';
	import { fitsh } from "fitsh";

	function autologin() {
		const userId = localStorage.getItem('userId');
		if (!userId) return;
		fitsh(`http://localhost:3000/loggedUser`)(userId).get().then((data) => {
    	$userStore = data;
  	});
	};
	$: autologin();
</script>

<MaterialApp teme="ligth"> 
	<Router>
		<Header />
		<Route path="/" component={Index} />
		<Route path="/login" component={Login} />
		<Route path="/sign-up" component={SignUp} />
		<Route path="/product/:productId" component={Product} />
	</Router>
</MaterialApp>