<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="container h-screen grid content-center">
	<div class="grid justify-items-center space-y-6">
		<h1>{data.post.title}</h1>
		<div>{@html data.post.content}</div>
	</div>
</div>

<style>
	/* styles go here */
</style>
