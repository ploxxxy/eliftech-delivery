<script>
    export let history
</script>

<div class="w-full flex flex-col justify-center items-center border p-8 rounded-md gap-4 min-h-16">
    {#if !history}
        <p>Please search!</p>
    {:else}
            <div class="flex flex-col gap-4 w-full h-96 overflow-auto p-4">
                {#each history as data}
                    <div class="flex gap-4 border rounded-md p-2">
                        <div class="w-1/2 flex flex-row gap-2 border rounded-md overflow-auto p-2 items-center">
                            {#each data.cart as item}
                                <div class="card card-side card-compact border rounded-md shrink-0">
                                    <figure><img class="w-48 h-48 object-cover" src={item.product.image} alt="Product"></figure>
                                    <div class="card-body">
                                        <h2 class="card-title">{item.product.name}</h2>
                                        <p class="flex-grow-0">Price: ${item.product.price}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Total Price: ${(item.product.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            {/each}
                        </div>
                        <div class="w-1/2 flex justify-center items-center">
                            <div class="flex flex-col">
                                <p class="text-xl font-semibold">Total Price: ${data.total.toFixed(2)}</p>
                                <p>Date: {new Date(data.timestamp).toLocaleString()}</p>
                                <p>Delivered to: {data.location}</p>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
    {/if}
</div>

