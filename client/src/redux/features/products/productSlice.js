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
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
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

export const editProduct = (product) => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const docRef = doc(db, "products", product.id);

        await updateDoc(docRef, {
            name: product.name,
            imageUrl: product.imageUrl,
            price: product.price,
            category: product.category
        })
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

// delete product
export const deleteProduct = (id) => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        await deleteDoc(doc(db, "products", id))
        dispatch(getProducts())
    } catch (error) {
        dispatch(setError(error)) 
    } 
    dispatch(setLoading(false))
}

export default productSlice.reducer