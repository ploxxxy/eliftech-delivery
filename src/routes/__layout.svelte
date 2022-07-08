<script>
  import "../app.css"
  import Navbar from '$lib/Navbar.svelte'
</script>

<div class="container mx-auto lg:px-12 pt-2">
  <Navbar />
  <slot />
</div>
