import React from 'react'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { editProduct } from '../redux/features/products/productSlice'

import { db } from '../../config/auth'
import { doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router'

function EditProductPage() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const dispatch = useDispatch()

    const { id } = useParams()

    const handleSubmit = (e) => {
        e.preventDefault() 

        try {
            const product = {
                id: id,
                name: name,
                price: price,
                category: category,
                imageUrl: imageUrl
            }

            dispatch(editProduct(product))

            Swal.fire({
                title: "Product Successfully Edited!",
                text: "Redirecting you to the home page now...",
                icon: "success"
            });
            navigate("/")

        } catch (error) {
            Swal.fire({
                title: error,
                text: `${error.message}`,
                icon: 'error',
            })
        }
    }

    useEffect(() => {
        async function getProductById(id){
            try {
                const docRef = doc(db, "products", id)
                const docSnap = await getDoc(docRef)

                if (docSnap.exists){
                    const product = {
                        name: docSnap.data().name,
                        imageUrl: docSnap.data().imageUrl,
                        price: docSnap.data().price,
                        category: docSnap.data().category
                    }

                    setName(product.name)
                    setImageUrl(product.imageUrl)
                    setPrice(product.price)
                    setCategory(product.category)
                }            
            }
            
            catch (error) {
                Swal.fire({
                    title: error,
                    text: `${error.message}`,
                    icon: 'error',
                }) 
            }

        }

        // get product by id
        getProductById(id);

    }, [])

    return (
        <>
            <nav class="bg-white shadow-lg">
                <div class="container mx-auto px-4">
                    <div class="flex justify-between items-center py-4">
                        <div class="text-lg font-semibold text-gray-800">Brand</div>
                        <div>
                            <button onClick={() => {navigate("/")}} class="text-gray-800 mx-2">Home</button>
                            <button onClick={() => {navigate("/add-grocery")}} class="text-gray-800 mx-2">Add</button>
                            <button class="text-gray-800 mx-2">Edit</button>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="container mx-auto px-4 py-8">
                <div class="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h2 class="text-2xl font-semibold mb-6">Edit Product</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <div class="mb-4">
                            <label
                                for="product-name"
                                class="block text-gray-700 mb-2"
                            >
                                Product Name
                            </label>
                            <input
                                type="text"
                                id="product-name"
                                name="product-name"
                                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={name}
                                onChange={(e) => {setName(e.target.value)}}
                                required
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                for="product-price"
                                class="block text-gray-700 mb-2"
                            >
                                Price
                            </label>
                            <input
                                type="number"
                                id="product-price"
                                name="product-price"
                                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={price}
                                onChange={(e) => {setPrice(e.target.value)}}
                                required
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                for="product-category"
                                class="block text-gray-700 mb-2"
                                >
                                Category 
                            </label>
                            
                            <input
                                type="text"
                                id="product-category"
                                name="product-category"
                                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={category}
                                onChange={(e) => {setCategory(e.target.value)}}
                                required
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                for="product-image"
                                class="block text-gray-700 mb-2"
                            >
                                Image URL
                            </label>
                            <input
                                type="url"
                                id="product-image"
                                name="product-image"
                                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={imageUrl}
                                onChange={(e) => {setImageUrl(e.target.value)}}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            class="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Edit Product
                        </button>
                    </form>
                </div>
            </div>    
        </>
    )
}

export default EditProductPage