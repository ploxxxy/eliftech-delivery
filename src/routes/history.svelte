<script>
    import { supabase } from '../supabase'
    import History from '$lib/History.svelte'

    let email = ''
    let phone = ''
    let history

    const handleSearch = async (email, phone) => {
        const { data, error } = await supabase.from('orders').select().eq('email', email).eq('phone', phone)

        history = data
        console.log(data)
    }

    const dummyData = () => {
        email = 'ted.roosevelt@hotmail.com'
        phone = '0123456789'
    }
</script>

<div class="flex flex-col gap-8">
    <div class="w-full flex flex-col justify-center items-center border p-8 rounded-md gap-4">
        <button class="btn btn-sm normal-case btn-accent btn-outline w-36" on:click={dummyData}><i class="text-xl bi bi-person-circle mr-2"></i> Dummy Data</button>
        <div class="form-control w-full max-w-md">
            <label class="label" for="">
                <span class="label-text">Email:</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full" bind:value={email} />
        </div>
        <div class="form-control w-full max-w-md">
            <label class="label" for="">
                <span class="label-text">Phone:</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full" bind:value={phone} />
        </div>
        <button class="btn btn-wide btn-primary btn-outline normal-case" on:click={() => handleSearch(email, phone)}>Search</button>
    </div>
    
    <History {history} />
</div>