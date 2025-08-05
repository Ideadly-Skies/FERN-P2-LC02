import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    product: null,
    isLoading: false,
    error: null,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload
        },
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const {setProduct, setProducts, setLoading, setError } = productSlice.actions

// crud firebase 
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../../../config/auth";

export const addProduct = (product) => async (dispatch) => {
    dispatch(setLoading(true))

    try {
        await addDoc(collection(db, "products"), {
            name: product.name,
            imageUrl: product.imageUrl,
            category: product.category,
            price: product.price,
        })

        // fetch the products again after adding
        dispatch(getProducts())

    } catch (error) {
        dispatch(setError(error))
    } finally {
        dispatch(setLoading(false))
    }
}

export const getProducts = () => async (dispatch) => {
    dispatch(setLoading(true))

    try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const result = querySnapshot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data()
            }
        })

        dispatch(setProducts(result))

    } catch (error) {
        dispatch(setError(error))
    } finally {
        dispatch(setLoading(false))
    }
}

export default productSlice.reducer