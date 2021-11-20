import React, {useEffect} from 'react'
import axios from "axios";
import { useDispatch, useSelector} from "react-redux"
import ProductList from './ProductList';
import {setProducts} from "../redux/actions/ProductActions"

function ProductListing() {

  const products = useSelector(state => state)
  const dispatch = useDispatch()
  const fetchProducts = async () => {
      const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });
     dispatch(setProducts(response.data));
  }
  useEffect(() => {
    fetchProducts();
      
  }, [])
  console.log(products);
    return (
        <div className="ui grid container">
               <ProductList />
        </div>
    )
}

export default ProductListing
