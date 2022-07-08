<script>
    import { cart } from '../stores/cartStore'
    import CartItem from '../lib/CartItem.svelte'

    let name = ''
    let email = ''
    let phone = ''

    let total


    const calcTotal = () => {
        total = 0
        $cart.forEach(element => {
            total = total + element.product.price * element.quantity
        })
        console.log($cart)
    }

    calcTotal()
</script>

<div class="flex gap-8">

    <div class="w-full border rounded-md p-8 flex flex-col gap-4">

        <div class="form-control">

            <div class="w-full h-96 bg-primary flex items-center justify-center rounded-md mb-4"><p>Location</p></div>

            <label for="0" class="label">
                <span class="label-text">Your name:</span>
            </label>
            <input id="0" type="text" placeholder="Type here" class="input input-bordered" />

            <label for="1" class="label">
                <span class="label-text">Your E-mail:</span>
            </label>
            <input id="1" type="email" placeholder="Typsdde here" class="input input-bordered" />

            <label for="2" class="label">
                <span class="label-text">Your phone:</span>
            </label>
            <input id="2" type="tel" placeholder="Typsdde here" class="input input-bordered" />
        </div>
    </div>

    <div class="flex flex-col gap-8 w-full">
        <div class="border rounded-md p-8 flex flex-col gap-4 h-128 overflow-auto">
            {#each $cart as item}
                <CartItem {item} on:amountChanged={calcTotal}/>
            {/each}
        </div>

        <div class="ml-auto flex gap-8 p-8">
            <p class="my-auto font-semibold text-xl">Total price: {total.toFixed(2)}$</p>
            <button class="btn btn-primary btn-wide normal-case text-xl" class:btn-disabled={total == 0} class:btn-outline={total > 0}>Submit</button>
        </div>
    </div>

</div>