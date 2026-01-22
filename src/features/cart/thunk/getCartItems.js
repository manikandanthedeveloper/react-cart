import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://www.course-api.com/react-useReducer-cart-project";

const getCartItems = createAsyncThunk(
	"cart/getCartItems",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get(url);

			return response.data;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue("something went wrong");
		}
	},
);

export default getCartItems;
