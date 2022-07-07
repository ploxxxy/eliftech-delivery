<script>
    import Tabs from "$lib/Tabs.svelte"
    import Items from "$lib/Items.svelte"

    const tabs = ['McDonny', 'CFK', 'Monidos Pizza', 'Baco Tell']
    let activeTab = null

    const tabChange = e => {
            activeTab = e.detail
        }

</script>

<div class="flex flex-col md:flex-row w-ful gap-8">

    <Tabs {tabs} {activeTab} on:tabChange={tabChange}/>

    {#if activeTab === null}
        <Items activeTab='None'/>
    {:else if activeTab === 'McDonny'}
        <Items activeTab='mcdonny'/>
    {:else if activeTab === 'CFK'}
        <Items activeTab='cfk'/>
    {:else if activeTab === 'Monidos Pizza'}
        <Items activeTab='monidos-pizza'/>
    {:else if activeTab === 'Baco Tell'}
        <Items activeTab='baco-tell'/>
    {/if}

</div>