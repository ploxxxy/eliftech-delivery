# Hosted version

You can find a working version of this web app [here](eliftech-delivery.vercel.app) (https://eliftech-delivery.vercel.app).

<details>
<summary>Screenshots Desktop</summary>
<img src="https://user-images.githubusercontent.com/71073152/178111228-d4a1f8d5-1ff9-4dc2-8f97-967d3e8ace55.png">
<img src="https://user-images.githubusercontent.com/71073152/178111258-ec6079ee-3896-4ab7-838a-2bd726c15e58.png">
<img src="https://user-images.githubusercontent.com/71073152/178111275-4ae32d38-c2ea-4f1e-a794-077ccc6e4252.png">
</details>

<details>
<summary>Screenshots Mobile</summary>
<img src="https://user-images.githubusercontent.com/71073152/178111310-4feaebb3-72df-4b6a-a17c-5782ce8ddec1.png">
<img src="https://user-images.githubusercontent.com/71073152/178111338-58eda05b-4486-4fb0-b8b6-b535f50b2b5e.png">
<img src="https://user-images.githubusercontent.com/71073152/178111367-3888bc1f-9b54-4966-8c7a-a1f07c965bb0.png">
</details>

# Creating the project

To host this yourself you will need:
- Node.js 16+
- An account on Supabase.io

## Download & install
```bash
# clone this project to your local machine
git clone https://github.com/ploxxxy/eliftech-delivery

# install all dependencies
cd elitech-delivery
npm install
```

## Environmental variables
Create a new project in Supabase, copy it's URL & anon key.   
Create 2 tables in your project. One named `products` that contains columns:
- id (uuid)
- shop (text)
- name (text)
- price (float4)
- image (text)

And one more named `orders` that contains:
- id (int8)
- timestamp (timestamp)
- cart (json)
- email (text)
- phone (text)
- name (text)
- location (text)
- total (float4)

Create a `.env` file and add two variables mentioned above as such:
```properties
VITE_PUBLIC_SUPABASE_URL=
VITE_PUBLIC_SUPABASE_ANON_KEY=
```

## Running

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
