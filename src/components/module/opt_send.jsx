import { useState,useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

const OptSend = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const phoneNumber =location.state?.phone;
    const [otp, setOtp] = useState("");
    const placeholder = "_".repeat(6 - otp.length);
    const [timer, setTimer] = useState(60);
    const [isActive, setIsActive] = useState(true);
    const [error, setError] = useState('');
    const [generateOtp, setGenerateOtp] = useState('');
    const [otpPass, setOTPPass] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, "");
        if (value.length <= 6) {
            setOtp(value.toString());
            setError('')
        }
    };
   
// generate otp
    useEffect(() => {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        if (!window.hasGeneratedOtp) {
            setGenerateOtp(otp);
            alert("Your OTP is " + otp);
            window.hasGeneratedOtp = true;
        }

    },[])


// setTimeInterval
    useEffect(() => {
        let interval = null;
        if (isActive && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsActive(false);
            setGenerateOtp('')
            setError("OTP expired")
            if (interval) clearInterval(interval);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isActive, timer]);


    const getGenerateOtp = () => {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        setGenerateOtp(otp);
        alert("Your OTP is " + otp);
    }

    const handleResend = () => {
        setTimer(60);
        setIsActive(true);
        setOtp("");
        setError('');
        getGenerateOtp();
    };

    const checkOtp = () => {
        
        if (otp === generateOtp) {
            console.log()
            setError('')
            setOTPPass(true);
        } else {
            setError('Invalid OTP')
        }
    }

    const handleBack = () => {
        navigate(-1); // Navigate to the previous page in the history stack
      };

    return (
        <div className="px-5 py-5">
            {
                otpPass ? <div className=" absolute  text-center top-[30%] left-[30%]">
                    <div className="pl-[40px]">
                        <img src="/successful.png" alt = "Successful" width="100px" />
                    </div>
                    <div className="flex justify-center pt-3">Your order is received, </div>
                    <div className="flex justify-center pt-3 pb-5">We will contact you, shortly </div>
                    <div className="flex justify-center pt-5" onClick={handleBack}>
                        <button className="px-1 py-1 border-[red] border-solid border-[1px] rounded-[12px] text-[red] uppercase">back to home</button>
                    </div>
                </div> : 
                <main className="space-y-6 xl:w-5/12 md2x:w-7/12 w-11/12 mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-600">CURRENT PHONE NUMBER</p>
                        <p className="text-black">{phoneNumber}</p>
                    </div>
                    <button className="text-red-600 text-sm font-medium" onClick={handleBack}>CHANGE</button>
                </div>

                <div className="">
                    <p className="text-sm text-gray-600 mb-4">PLEASE ENTER OTP</p>
                    <div className="relative flex justify-between">
                        <input
                            type="text"
                            inputMode="numeric"
                            value={otp}
                            onChange={handleChange}
                            className={`w-full p-3 text-xl tracking-[1em] font-medium border rounded focus:outline-none focus:border-red-600 ${error ? 'border-red-600' : 'focus:border-red-600'}`}
                            style={{ letterSpacing: "0.3em" }}
                        />

                        {otp.length < 6 && (
                            <div
                                className="absolute top-0 left-0 p-3 text-xl tracking-[1em] text-gray-400 pointer-events-none"
                                style={{
                                    letterSpacing: "0.5em",
                                    paddingLeft: `${otp.length === 0 ? 0.8 : otp.length * 1 + 0.5}em`,
                                }}
                            >
                                {placeholder}
                            </div>
                        )}
                        
                    </div>
                    {error && <div className="text-sm  text-red-500">{error}</div>}
                    <div className="text-sm my-4 flex justify-between">
                        <p>
                            {"Didn't receive? "}
                            <button
                                onClick={handleResend}
                                className="text-blue-600 underline"
                            >
                                Resend
                            </button>
                        </p>
                        <div className="text-red-600">{timer} S</div>
                    </div>
                </div>

                <div className="flex items-center justify-end flex-col h-[50vh] ">
                    <button
                        onClick={checkOtp}
                        className={` py-3 px-9 rounded-full text-white font-medium ${otp.length === 6 ? "bg-red-600" : "bg-gray-300"
                            }`}
                        disabled={otp.length !== 6}
                    >
                        CONTINUE
                    </button>
                </div>
            </main>
            }
            
        </div>
    );
}

export default OptSend;