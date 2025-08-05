import React from 'react'
import { useNavigate } from 'react-router'


function AddProductPage() {
    const navigate = useNavigate()

  return (
    <>
        <nav class="bg-white shadow-lg">
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center py-4">
                    <div class="text-lg font-semibold text-gray-800">Brand</div>
                    <div>
                        <button onClick={() => {navigate("/")}} class="text-gray-800 mx-2">Home</button>
                        <button class="text-gray-800 mx-2">Add</button>
                    </div>
                </div>
            </div>
        </nav>

        <div class="container mx-auto px-4 py-8">
            <div class="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-2xl font-semibold mb-6">Add Product</h2>
                <form action="#" method="POST">
                    <div class="mb-4">
                        <label
                            for="product-name"
                            class="block text-gray-700 mb-2"
                            >Product Name</label
                        >
                        <input
                            type="text"
                            id="product-name"
                            name="product-name"
                            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            for="product-price"
                            class="block text-gray-700 mb-2"
                            >Price</label
                        >
                        <input
                            type="number"
                            id="product-price"
                            name="product-price"
                            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            for="product-category"
                            class="block text-gray-700 mb-2"
                            >Category</label
                        >
                        <input
                            type="text"
                            id="product-category"
                            name="product-category"
                            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            for="product-image"
                            class="block text-gray-700 mb-2"
                            >Image URL</label
                        >
                        <input
                            type="url"
                            id="product-image"
                            name="product-image"
                            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>    
    </>
  )
}

export default AddProductPage