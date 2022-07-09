<script>
  import { cart } from '../stores/cartStore'
  import { flip } from 'svelte/animate'
</script>

<div class="navbar bg-base-100 p-0 mb-8">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost normal-case text-xl">
        <i class="text-xl mr-2 bi bi-house"></i>Home</a>
    </div>
    <div class="flex-none">
        <a href="/cart" class="btn btn-ghost btn-square mr-2">
          <div class="indicator">
            <i class="text-2xl bi bi-cart3"></i>
            <span class="badge badge-sm badge-accent indicator-item" class:hidden={$cart.length == 0}>{$cart.length}</span>
          </div>
        </a>

        <a href="/history" class="btn btn-ghost btn-square mr-2">
            <i class="text-2xl bi bi-clock-history"></i>
        </a>

        <a href="/coupons" class="btn btn-ghost btn-square btn-disabled">
            <i class="text-2xl bi bi-ticket-perforated"></i>
        </a>
      
    </div>
  </div>