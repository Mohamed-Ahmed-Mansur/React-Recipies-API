

import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLogedInUser } from '../redux/slice/logedInUser';

const Paypal = (props) => {
    const {product}= props;

    let logedInUser=useSelector((state) => state.logedInUser.logedInUser);

    const[PaidFor,setPaidFor]=useState(false);
    const[error,setError]=useState(null);
    const dispatch=useDispatch();

    // const handleApprove= (orderID)=>{
    //     //call backend function to fullfill order

    //     //if res is success
    //     setPaidFor(true);
    //     //refresh user'account or subscribtion


    //     //if res is error 
    //     //setError("u payment was proceesed succssfully. but there was an error while processing your request")
    // };

    // if(PaidFor){
    //     axios.patch(`http://localhost:3001/Users/${logedInUser.id}`, { purchasedDone: [...logedInUser.purchased]
    //   })
    //   .then((res) => {
    //     console.log('Success');
    //     const updatedUser = res.data;
    
    //     dispatch(setLogedInUser(updatedUser));
    //     console.log('purchasedDone success');
    //   }).catch((err)=>{
    //     console.log(err);
    //   })
        
    //     axios.patch(`http://localhost:3001/Users/${logedInUser.id}`, {purchased: []})
    //     .then(res=>{
    //         console.log(" purchased empty success")
    //         const updatedUser = res.data;
    //         dispatch(setLogedInUser(updatedUser));
           
     
    //     })
    //     setPaidFor(false);
        
    // }


    const handleApprove = async (orderID) => {
        if (!PaidFor) {
            try {
                // Call backend function to fulfill order
                const response1 = await axios.patch(`http://localhost:3001/Users/${logedInUser.id}`, { purchasedDone: [...logedInUser.purchased] });
                console.log('Success - purchasedDone', response1.data);
                const updatedUser1 = response1.data;
    
                dispatch(setLogedInUser(updatedUser1));
                console.log('purchasedDone success');
    
                // If the response is successful
                const response2 = await axios.patch(`http://localhost:3001/Users/${logedInUser.id}`, { purchased: [] });
                console.log('Success - purchased empty', response2.data);
                const updatedUser2 = response2.data;
    
                dispatch(setLogedInUser(updatedUser2));
    
                // Set PaidFor to true after the logic is executed
                setPaidFor(true);
            } catch (error) {
                console.error('Error updating user data:', error);
                // Handle error if necessary
            }
        }
    };
    

    if(error){
        alert(error)
    }
    return (
        <PayPalButtons  
        style= {{
            layout: 'horizontal',
            color: 'white',
            shape: 'pill',
            label: 'paypal',
            size: 'responsive',
            }}
            createOrder={(data,actions)=>{
                return actions.order.create({
                    purchase_units:[{
                        amount:{
                            value:product.price
                        }
                    }]
                })
            }}
            onApprove={async(data,actions)=>{
                const order=await actions.order.capture();
                console.log("order",order);

                handleApprove(data.orderID);
            }}
            onError={(err)=>{
                setError(err);
                console.log("paypal checkout onerror", err)
            }}
                    />

                    
    );
}

export default Paypal;


