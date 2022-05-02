// use axios for api call
import axios from "axios";
import { FILTER_DATA, GET_DATA_FAIL, GET_DATA_SUCC, SORT_DATA_HL, SORT_DATA_LH } from "./actionTypes";

async function getProductsData(dispatch) {
    try{
       let res= await axios.get("https://movie-fake-server.herokuapp.com/products");
       let data= await res.data;
       console.log(data);
       dispatch({
           type: GET_DATA_SUCC,
           payload: data
       })
    }
    catch(e){
       dispatch({
           type: GET_DATA_FAIL
       })
    }
}

const sortProducts = (data,dispatch,val) => {
     if(val==="asc"){
         data.sort((a,b)=>{return (a.price-b.price);})
         dispatch({
             type: SORT_DATA_LH,
             payload: data
         })
     }
     else if(val==="desc"){
        data.sort((a,b)=>{return (b.price-a.price);})
        dispatch({
            type: SORT_DATA_HL,
            payload: data
        })
     }

};

const filterProducts = async(dispatch,category) => {
     
    let res= await axios.get("https://movie-fake-server.herokuapp.com/products");
    let data= await res.data;
    let new_data= data.filter(item=>item.category===category);
    dispatch({
        type: FILTER_DATA,
        payload: new_data
    })
};

export { getProductsData, sortProducts, filterProducts };
