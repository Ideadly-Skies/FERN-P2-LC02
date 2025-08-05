import React from 'react'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct, getProducts } from '../redux/features/products/productSlice'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import currencyFormatter from "../utils/currencyFormatter"

function HomePage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const handleDelete = (e, id) => {
        e.preventDefault()
        
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // dispatch delete product in here
                    dispatch(deleteProduct(id)) 

                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                    });
                }
            });            
        } catch (error) {
            Swal.fire({
                title: error,
                text: `${error.message}`,
                icon: 'error',
            })
        }


    } 

    return (
        <>
            <nav class="bg-white shadow-lg">
                <div class="container mx-auto px-4">
                    <div class="flex justify-between items-center py-4">
                        <div class="text-lg font-semibold text-gray-800">Brand</div>
                        <div>
                            <button class="text-gray-800 mx-2">Home</button>
                            <button onClick={() => navigate("/add-grocery")} class="text-gray-800 mx-2">Add</button>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="container mx-auto px-4 py-8">
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                >
                    {products.length > 0 && products.map((product) => (
                        <div class="bg-white shadow-md rounded-lg p-4">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                class="w-full h-32 object-cover mb-4 rounded"
                            />
                            <h3 class="text-lg font-semibold mb-2">{product.name}</h3>
                            <p class="text-gray-700 mb-2">{currencyFormatter(product.price)}</p>
                            <p class="text-gray-600 mb-4">{product.category ? product.category : ''}</p>
                            <button
                                class="bg-red-500 text-black px-4 py-2 rounded hover:bg-red-700"
                                onClick={(e) => {handleDelete(e, product.id)}}
                            >
                                Delete
                            </button>
                        </div>
                    ))} 
                </div>
            </div>
        </>
    )
}

export default HomePage