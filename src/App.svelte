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
	import Category from "./routes/Category.svelte";
	import MyProfile from "./routes/MyProfile.svelte";
	import Purchases from "./routes/Purchases.svelte";
	import OnBoarding from "./routes/OnBoarding.svelte";
	import AboutUs from "./routes/AboutUs.svelte";
	import Answers from "./components/Answers.svelte";
	import CustomerSupport from "./components/CustomerSupport.svelte";
	import CursesAndSweetLies from "./routes/CursesAndSweetLies.svelte";
	import userStore from './stores/userStore';
	import request from './utils/request';

	function autologin() {
		const userId = localStorage.getItem('userId');
		if (!userId) return;
		request('loggedUser')(userId).get().then((data) => {
    	$userStore = data;
  	});
	};
	$: autologin();
</script>

<style>
	:global(body) {
		/* background-color: #ebebeb !important; */
		background-color: rgb(37, 37, 37) !important;
	}
</style>

	<Router>
		<Route path="/" component={Index} />
		<Route path="/login" component={Login} />
		<Route path="/sign-up" component={SignUp} />
		<Route path="/product/:productId" component={Product} />
		<Route path="/ShoppingCart/:userId" component={ShoppingCart} />
		<Route path="/Purchase/:userId" component={Purchase} />
		<Route path="/Search" component={Search} />
		<Route path="/Category/:categoryId" component={Category} />
		<Route path="/MyProfile" component={MyProfile} />
		<Route path="/Purchases/:userId" component={Purchases} />
		<Route path="/OnBoarding" component={OnBoarding} />
		<Route path="/AboutUs" component={AboutUs} />
		<Route path="/Answers" component={Answers} />
		<Route path="/CustomerSupport" component={CustomerSupport} />
		<Route path="/CursesAndSweetLies" component={CursesAndSweetLies} />
	</Router>