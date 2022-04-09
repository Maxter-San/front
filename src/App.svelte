<script>
	import { Router, Route, Link } from "svelte-navigator";
	import Header from './components/Header.svelte';
	import Index from "./routes/Index.svelte";
	import Login from "./routes/Login.svelte";
	import Product from "./routes/Product.svelte";
	import SignUp from "./routes/SignUp.svelte";


	// function autologin() {
	// 	const userId = localStorage.getItem('userId');
	// 	if (!userId) return;
	// }

	// $: autologin();
</script>

<Header />

<Router>
	<Route path="/" component={Index} />
	<Route path="/login" component={Login} />
	<Route path="/sign-up" component={SignUp} />
	<Route path="/product/:productId" component={Product} />
</Router>
