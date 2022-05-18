<script>
	import { Router, Route, Link } from "svelte-navigator";
	import Header from './components/Header.svelte';
	import Index from "./routes/Index.svelte";
	import Login from "./routes/Login.svelte";
	import Product from "./routes/Product.svelte";
	import SignUp from "./routes/SignUp.svelte";
	import ShoppingCart from "./routes/ShoppingCart.svelte";
	import Purchase from "./routes/Purchase.svelte";
	import Search from "./routes/Search.svelte";
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

<style>
	:global(body) {
		background-color: #ebebeb !important;
	}
</style>

	<Router>
		<Route path="/" component={Index} />
		<Route path="/login" component={Login} />
		<Route path="/sign-up" component={SignUp} />
		<Route path="/product/:productId" component={Product} />
		<Route path="/ShoppingCart/:userId" component={ShoppingCart} />
		<Route path="/Purchase/:userId" component={Purchase} />
		<Route path="/Search/:search" component={Search} />
	</Router>