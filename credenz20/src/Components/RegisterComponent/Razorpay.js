import React from 'react';
import logopisb from '../../assests/img/logopisb.png'


function loadScript(src) {
    return new Promise( (resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    document.body.appendChild(script)
    script.onload = () => {
        resolve(true)
    }
    script.onerror = () => {
        resolve(false)
    }

    })
}

const _DEV_ = document.domain === 'localhost'

async function displayRazorpay() {

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if(!res) {
        alert('Razorpay SDK failedto load!')
        return
    }

    const options = {
        "key": _DEV_ ? 'dev-key' : 'prod-key', // Enter the Key ID generated from the Dashboard
        "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Credenz",
        "description": "Test Transaction",
        "image": "",
        "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#F37254"
        }
    };
    var rzp1 = new Razorpay(options);
    document.getElementById('rzp-button1').onclick = function(e){
        rzp1.open();
        e.preventDefault();
    }

}