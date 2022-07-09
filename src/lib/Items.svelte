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


<div class="w-full max-h-screen border rounded-md p-8">
    
    {#if !items[0] && activeTab != 'None'}
        <div class="btn btn-ghost btn-lg loading"></div>
    {/if}

    {#if activeTab == 'None'}
        <div class="">
            pick a card any card
        </div>
    {:else}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
            {#each items as item}
                <div class="card card-bordered card-compact w-full rounded-md">
                    <figure><img class="object-cover h-64 w-64" src={item.image} alt={item.name} /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{item.name}</h2>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary btn-sm btn-outline normal-case" on:click={() => onAddToCart(item)}>add to Cart</button>
                        </div>
                    </div>
                </div>
            {/each} 
        </div>
    {/if}
</div>