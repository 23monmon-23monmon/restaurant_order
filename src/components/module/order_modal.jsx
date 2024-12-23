import { Modal,  Input  } from "antd"
import { CloseCircleOutlined, PhoneOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderModal = (props) => {

    const navigate = useNavigate();

    const {isModalOpen,setModalOpen} = props;
    const [phoneNumber, setPhoneNumber] = useState('');
    const [onErrorCheck, setOnErrorCheck] = useState('');
    const [backgroundCheck, setBackgroundCheck] = useState(false);

    const onPhoneChange = (e) => {
        if (!/^\d*$/.test(e.target.value)) 
            {
                setPhoneNumber('')
            }
        else  setPhoneNumber(e.target.value)
        

        if(phoneNumber.startsWith("099") || phoneNumber.startsWith("99"))
        {
            if (phoneNumber.length === 10 || phoneNumber.length === 11){
                setBackgroundCheck(true);
                setOnErrorCheck("") 
            }
            else {
                setOnErrorCheck("Please Enter a phone number");
                setBackgroundCheck(false)
            }
             
        }
        else {
            setOnErrorCheck("Please Enter a phone number");
            setBackgroundCheck(false)
        }
       
    }

    const onContinue = () => {
        if(backgroundCheck){ 
            navigate('opt_send', { state: { phone: phoneNumber} });
        }
    }

    return (
        <>
            <Modal open={isModalOpen} footer={null} closable={false}>
                <div className="flex justify-end" onClick={() => setModalOpen(false)}>
                    <CloseCircleOutlined style={{fontSize : '30px'}} />
                </div>
                <div className="pt-2 pb-2">
                    <div className="flex justify-center text-[20px]" style={{fontWeight : 'bold'}}>
                        Phone Number
                    </div>
                    <div className="pt-5">
                        <Input 
                        value={phoneNumber}
                        parser={(value) => value.replace(/\D/g, '')}
                        prefix={<PhoneOutlined style={{fontSize : '20px'}} />} style={{height: '50px'}} 
                        onChange={onPhoneChange}/>
                    </div>
                    <div className="text-red-500">{onErrorCheck}</div>
                    
                </div>
                <div className="flex justify-center pt-5">
                    <button 
                    disabled={!backgroundCheck}
                    onClick={onContinue}
                    style={{background : backgroundCheck ? 'red' : 'gray', color: 'white', width : '120px', minWidth: '100px', height: '50px', borderRadius: '30px', padding : '2px 0px 4px 0px'}}
                    >CONTINUE</button>
                </div>
            </Modal>
        </>
    )
}

export default OrderModal;