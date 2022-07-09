<script>
    import { onMount } from 'svelte'
    import { supabase } from '../supabase'
    import { addProduct, cart, setShop } from '../stores/cartStore'

    export let activeTab
    let items = []

    onMount(async () => {
        if (!activeTab) return
        const { data, error } = await supabase.from('products').select().eq('shop', activeTab)

        if (error) {
            return console.error(error)
        }

        items = data
    })

    const onAddToCart = product => {
        addProduct(product)
        setShop(activeTab)
    }

</script>


<div class="w-full border rounded-md p-8">
    
    {#if !items[0] && activeTab != 'None'}
        <div class="btn btn-ghost btn-lg loading"></div>
    {/if}

    {#if activeTab == 'None'}
        <div class="flex justify-center items-center">
            <p class="font-mono bg-base-200 rounded-md p-2">
                Please select a shop to view it's available products. Add an item to cart, then proceed to your cart to checkout. You can also view your order history there.
            </p>
        </div>
    {:else}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
            {#each items as item}
                <div class="card card-bordered card-compact w-full rounded-md">
                    <figure><img class="object-cover h-64 w-64" src={item.image} alt={item.name} /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{item.name}</h2>
                        <div class="card-actions justify-end">
                            <span class="bg-accent h-8 w-16 flex justify-center items-center text-accent-content font-semibold font-mono rounded-md">${item.price}</span>
                            <button class="btn btn-primary btn-sm btn-outline normal-case" on:click={() => onAddToCart(item)}>add to Cart</button>
                        </div>
                    </div>
                </div>
            {/each} 
        </div>
    {/if}
</div>