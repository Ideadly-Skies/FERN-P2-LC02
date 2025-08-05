import React from 'react'

function HomePage() {
  return (
    <>
        <nav class="bg-white shadow-lg">
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center py-4">
                    <div class="text-lg font-semibold text-gray-800">Brand</div>
                    <div>
                        <a href="#" class="text-gray-800 mx-2">Home</a>
                        <a href="#" class="text-gray-800 mx-2">Add</a>
                    </div>
                </div>
            </div>
        </nav>

        <div class="container mx-auto px-4 py-8">
            <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            >
                <div class="bg-white shadow-md rounded-lg p-4">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                        class="w-full h-32 object-cover mb-4 rounded"
                    />
                    <h3 class="text-lg font-semibold mb-2">Product Name</h3>
                    <p class="text-gray-700 mb-2">$10.00</p>
                    <p class="text-gray-600 mb-4">Category</p>
                    <button
                        class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
                <div class="bg-white shadow-md rounded-lg p-4">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                        class="w-full h-32 object-cover mb-4 rounded"
                    />
                    <h3 class="text-lg font-semibold mb-2">Product Name</h3>
                    <p class="text-gray-700 mb-2">$10.00</p>
                    <p class="text-gray-600 mb-4">Category</p>
                    <button
                        class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
                <div class="bg-white shadow-md rounded-lg p-4">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                        class="w-full h-32 object-cover mb-4 rounded"
                    />
                    <h3 class="text-lg font-semibold mb-2">Product Name</h3>
                    <p class="text-gray-700 mb-2">$10.00</p>
                    <p class="text-gray-600 mb-4">Category</p>
                    <button
                        class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
                <div class="bg-white shadow-md rounded-lg p-4">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                        class="w-full h-32 object-cover mb-4 rounded"
                    />
                    <h3 class="text-lg font-semibold mb-2">Product Name</h3>
                    <p class="text-gray-700 mb-2">$10.00</p>
                    <p class="text-gray-600 mb-4">Category</p>
                    <button
                        class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
                <div class="bg-white shadow-md rounded-lg p-4">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                        class="w-full h-32 object-cover mb-4 rounded"
                    />
                    <h3 class="text-lg font-semibold mb-2">Product Name</h3>
                    <p class="text-gray-700 mb-2">$10.00</p>
                    <p class="text-gray-600 mb-4">Category</p>
                    <button
                        class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
                <div class="bg-white shadow-md rounded-lg p-4">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                        class="w-full h-32 object-cover mb-4 rounded"
                    />
                    <h3 class="text-lg font-semibold mb-2">Product Name</h3>
                    <p class="text-gray-700 mb-2">$10.00</p>
                    <p class="text-gray-600 mb-4">Category</p>
                    <button
                        class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomePage