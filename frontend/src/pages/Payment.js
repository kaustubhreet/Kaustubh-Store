import React from 'react';
import { toast } from 'react-toastify';
import SummaryApi from '../common';

const Payment = ({ amount, onPaymentSuccess }) => {
    // payment section integration
   // const [amount, setAmount] = useState(3450);

    // handlePayment Function
    const handlePayment = async () => {
        try {
            const res = await fetch(SummaryApi.Order.url, {
                method: "POST",
                credentials: 'include',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ amount })
            });

            const data = await res.json();
            console.log(data);
            handlePaymentVerify(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    // handlePaymentVerify Function
    const handlePaymentVerify = async (data) => {
        const options = {
            key: process.env.RAZORPAY_KEY_ID,
            amount: data.amount,
            currency: data.currency,
            name: "Reet Store",
            description: "Test Mode",
            order_id: data.id,
            handler: async (response) => {
                console.log("response", response);
                try {
                    const res = await fetch(SummaryApi.Payment.url, {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                        })
                    });

                    const verifyData = await res.json();
                    console.log(verifyData);

                    if (verifyData.message) {
                        toast.success(verifyData.message);
                        onPaymentSuccess();//clear cart on payment success
                    }
                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                color: "#5f63b8"
            }
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    return (
        <>
            <div className="pt-2">
                {/* Buy Now Button */}
                <button onClick={handlePayment} className="w-full bg-[#1B9CFC]">
                    Buy Now
                </button>
            </div>
        </>
    );
};

export default Payment;
