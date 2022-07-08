<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()
    
    export let tabs
    export let activeTab
</script>

<div class="w-full md:w-1/4 flex flex-row md:flex-col gap-2 overflow-auto md:overflow-hidden border p-8 rounded-xl items-center">
    <p class="text-xl font-semibold hidden md:block">Shops:</p>
    {#each tabs as tab}
        <button class="btn btn-primary normal-case w-full" class:btn-outline={tab != activeTab} on:click={() => dispatch('tabChange', tab)}>{tab}</button>
    {/each}
    <!-- <button class="btn btn-primary normal-case w-full btn-disabled">More coming soon...</button> -->
</div>