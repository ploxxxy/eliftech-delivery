<script>
    import { supabase } from '../supabase'
    import History from '$lib/History.svelte'

    let email = ''
    let phone = ''
    let history
    let wrong = false

    const handleSearch = async (email, phone) => {
        const { data, error } = await supabase.from('orders').select().eq('email', email).eq('phone', phone)

        if (error) {
            console.log(error)
        } else {
            if (data.length == 0) {
                wrong = true
            } else {
                history = data
                wrong = false
            }
        }
    }

    const dummyData = () => {
        email = 'ted.roosevelt@hotmail.com'
        phone = '0123456789'
    }

</script>

<svelte:head><title>Super Delivery - History</title></svelte:head>

<div class="flex flex-col gap-8">
    <div class="w-full flex flex-col justify-center items-center border p-8 rounded-md gap-4" class:border-error={wrong == true}>
        <button class="btn btn-sm normal-case btn-accent btn-outline w-36" on:click={dummyData}><i class="text-xl bi bi-person-circle mr-2"></i> Dummy Data</button>
        <div class="form-control w-full max-w-md">
            <label class="label" for="">
                <span class="label-text">Email:</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full" bind:value={email} class:input-error={wrong == true}/>
        </div>
        <div class="form-control w-full max-w-md">
            <label class="label" for="">
                <span class="label-text">Phone:</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full" bind:value={phone} class:input-error={wrong == true} />
        </div>
        <button class="btn btn-wide btn-primary btn-outline normal-case" on:click={() => handleSearch(email, phone)}>Search</button>

        <span class="alert alert-error rounded-md" class:hidden={wrong == false}>Wrong Credentials!</span>
    </div>
    
    <History {history}/>
</div>