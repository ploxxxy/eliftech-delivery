import { supabase } from '../supabase'

export const addHistory = async (cart, email, phone, name, total, location) => {
    const { data, error } = await supabase.from('orders').insert([{
        timestamp: new Date().toISOString(),
        cart,
        email,
        phone,
        name,
        location,
        total
    }])

    return new Promise((resolve, reject) => {
        if (error) {
            reject(error)
        } else {
            resolve(data)
        }
    })
}