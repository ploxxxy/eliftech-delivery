<script>
  import "../app.css"
  import Navbar from '$lib/Navbar.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<div class="container mx-auto px-4 lg:px-12 pt-2">
  <Navbar />
  <slot />
  <Footer />
</div>
