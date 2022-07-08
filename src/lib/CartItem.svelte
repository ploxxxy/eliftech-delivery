<script>
    import { setProduct, deleteProduct, cart } from '../stores/cartStore'
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    export let item
</script>

<div class="card overflow-visible card-side card-compact border rounded-md">
    <figure><img class="w-48 h-48 object-cover " src={item.product.image} alt="Product"></figure>
    <div class="card-body items-center justify-center">
      <h2 class="card-title">{item.product.name}</h2>
      <p class="">Price: {item.product.price}</p>
      <div class="card-actions justify-end">
        <input type="number" class="input input-sm input-bordered w-24" min="1" bind:value={item.quantity} on:change={() => { setProduct(item.product, item.quantity); dispatch('amountChanged') }}/>
        <button class="btn btn-error btn-outline btn-sm btn-square" on:click={() => { deleteProduct(item.product); dispatch('amountChanged') }} ><i class="bi bi-x-lg"></i></button>
      </div>
    </div>
  </div>