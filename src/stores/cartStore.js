import { writable } from "svelte/store"

// const stored = localStorage.cart

export const cart = writable([])

// cart.subscribe((value) => localStorage.cart = value)

export const addProduct = (product) => {

    cart.update(cur => {
        // if product already in cart, increase quantity
        if (cur.find(el => el.product.id == product.id)) {
            moreProduct(product)
            return cur
        } else { 
            // else add product to cart
            const newCart = [...cur, { product, quantity: 1 }]
            return newCart
        }
    })
}

export const deleteProduct = (product) => {
    cart.update(cur => {
        const newCart = cur.filter(item => item.product.id !== product.id)
        return newCart
    })
}

export const moreProduct = (product) => {
    cart.update(cur => {
        cur[cur.findIndex(el => el.product.id == product.id)].quantity += 1
        return cur
    })
}

export const lessProduct = (product) => {
    cart.update(cur => {
        cur[cur.findIndex(el => el.product.id == product.id)].quantity -= 1
        return cur
    })
}

export const setProduct = (product, amount) => {
    cart.update(cur => {
        cur[cur.findIndex(el => el.product.id == product.id)].quantity = amount
        return cur
    })
}