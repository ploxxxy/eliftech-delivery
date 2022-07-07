<script>
    import { onMount } from 'svelte'
    export let activeTab
    let items = []

    onMount(async () => {
        // items = await fetch(`./shops/${activeTab}.json`).then(res => res.json())
        
        items = await fetch(`./shops/mcdonny.json`).then(res => res.json())
    })
</script>


<div class="w-full max-h-screen overflow-auto border rounded-md p-8">
    
    {#if !items[0] && activeTab != 'None'}
        <div class="btn btn-ghost btn-lg loading"></div>
    {/if}

    {#if activeTab == '1'}
        <div class="">
            pick a card any card
        </div>
    {:else}
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center">
            {#each items as item}
                <div class="card card-bordered card-compact w-full rounded-md">
                    <figure><img src={item.img} alt={item.name} /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{item.name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary btn-sm btn-outline normal-case">add to Cart</button>
                        </div>
                    </div>
                </div>
            {/each} 
        </div>
    {/if}
</div>