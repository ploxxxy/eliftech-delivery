<script>
    import { cart, resetCart } from '../stores/cartStore'
    import { addHistory } from '../stores/historyStore'
    import CartItem from '$lib/CartItem.svelte'

    let name = ''
    let email = ''
    let phone = ''
    let location = ''

    let total
    let success = false

    const calcTotal = () => {
        total = 0
        $cart.forEach(element => {
            total = total + element.product.price * element.quantity
        })
    }

    calcTotal()

    const handleSubmit = (name, email, phone, total, location) => {
        addHistory($cart, email, phone, name, total, location).then(res => handleSuccess() ).catch(err => console.log(err))
    }

    const handleSuccess = () => {
        success = true
        resetCart()
        calcTotal()
    }
    
    const validateEmail = (email) => {
        return (email && email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
    }

    const validateName = (name) => {
        let fullName = name.split(' ')
        return (name && fullName.length == 2 && fullName[0].length >= 3 && fullName[1].length >= 3) 
    }

    const validateNumber = (number) => {
        return (number && parseInt(number) && number.length == 10)
    }

    const validateLoc = (location) => {
        return (location && location.match(/\w{1,}\,?\d{1,}/g))
    }

    const dummyData = () => {
        name = 'Ted Roosevelt'
        email = 'ted.roosevelt@hotmail.com'
        phone = '0123456789'
        location = '123 Main St, New York, NY 10001'
    }
</script>

<svelte:head><title>Super Delivery - Cart</title></svelte:head>

<div class="flex flex-col md:flex-row gap-8">

    <div class="w-full border rounded-md p-8 flex flex-col gap-4">

        <div class="form-control">

            <button class="btn btn-sm normal-case btn-accent btn-outline w-36" on:click={dummyData}><i class="text-xl bi bi-person-circle mr-2"></i> Dummy Data</button>

            <label for="0" class="label">
                <span class="label-text">Your address</span>
            </label>
            <input id="0" type="text" placeholder="Type here" class="input input-bordered" class:input-error={!validateLoc(location)} bind:value={location} />
            <label for="0" class="label" class:hidden={validateLoc(location)}>
                <span class="label-text-alt text-error">Invalid address! Please include your street & house building</span>
            </label>

            <label for="0" class="label">
                <span class="label-text">Your full name:</span>
            </label>
            <input id="0" type="text" placeholder="Type here" class="input input-bordered" class:input-error={!validateName(name)} bind:value={name} />
            <label for="0" class="label" class:hidden={validateName(name)}>
                <span class="label-text-alt text-error">Invalid name! Please use your full name</span>
            </label>

            <label for="1" class="label">
                <span class="label-text">Your E-mail:</span>
            </label>
            <input id="1" type="email" placeholder="Type here" class="input input-bordered" class:input-error={!validateEmail(email)} bind:value={email} />
            <label for="0" class="label" class:hidden={validateEmail(email)}>
                <span class="label-text-alt text-error">Invalid email! Please use existing email</span>
            </label>

            <label for="2" class="label">
                <span class="label-text">Your phone number:</span>
            </label>
            <input id="2" type="tel" placeholder="Type here" class="input input-bordered" class:input-error={!validateNumber(phone)} bind:value={phone} />
            <label for="0" class="label" class:hidden={validateNumber(phone)}>
                <span class="label-text-alt text-error">Invalid phone number! Please enter it without the country code (i.e 0664304375)</span>
            </label>
        </div>
    </div>

    <div class="flex flex-col gap-8 w-full">
        <div class="border rounded-md p-8 flex flex-col gap-4 h-128 overflow-auto">

            {#if $cart.length == 0}
                <p class="font-mono bg-base-200 rounded-md p-2">Add items into your cart by selecting them on the home page</p>
            {/if}

            {#each $cart as item}
                <CartItem {item} on:amountChanged={calcTotal}/>
            {/each}
        </div>

        <div class="md:ml-auto flex flex-col md:flex-row items-center gap-8 p-8">
            <p class="font-semibold text-xl">Total price: ${total.toFixed(2)}</p>
            <button class="btn btn-primary btn-wide normal-case text-xl" class:btn-disabled={total == 0 || !validateNumber(phone) || !validateEmail(email) || !validateName(name)} class:btn-outline={total > 0 && validateNumber(phone) && validateEmail(email) && validateName(name)} on:click={() => handleSubmit(name, email, phone, total.toFixed(2), location)}>Submit</button>
        </div>
    </div>

</div>

<div class="modal modal-bottom sm:modal-middle" class:modal-open={success}>
  <div class="modal-box">
    <h3 class="font-bold text-lg">Thanks for ordering with us!</h3>
    <p class="py-4">Your items are already getting prepared for delivery. You can view your progress in the history tab!</p>
    <div class="modal-action">
        <a href="/history" class="btn btn-accent btn-outline">View History</a>
        <a href="./" class="btn btn-primary btn-outline">OK</a>
    </div>
  </div>
</div>