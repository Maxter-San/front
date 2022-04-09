<script>
	import { Router, Route, Link } from "svelte-navigator";
	import Index from "./routes/Index.svelte";
	import Login from "./routes/Login.svelte";
	import Product from "./routes/Product.svelte";
</script>

<Router>
	<Route path="/" component={Index} />
	<Route path="/login" component={Login} />
	<Route path="/product/:productId" component={Product} />
</Router>
