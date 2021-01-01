import React, { useState } from 'react';
import './Hotel.css'

function HotelLoginPIN(props) {

    const [pin, setPin] = useState("");
    const [showPin, setShowPin] = useState("PIN");

    const cellClicked = (e) => {
        setPin(pin+e.currentTarget.id);
        if(showPin !== "PIN"){
            setShowPin(showPin + "*");
        } else {
            setShowPin("*");
        }
        
    }

    const backSpacePressed = () => {
        let str = pin.substring(0,pin.length - 1);
        setPin(str);
        setShowPin(showPin.substring(0, showPin.length - 1));
    }

    const loginPressed = () => {
        if(pin === "1234"){
            props.history.push('/hotelHome');
        }
    }



    return (
        <div>

        <div className="HotelApp">
        
        <table className="tableHotel" border="5">
            <tbody>
         <tr>
             <td style={{textAlign:'left', height:"7vh"}} colSpan="3">{showPin} &nbsp;</td>
         </tr>
         <tr className="trHotel">
             <td className="tdHotel" id="1" onClick={cellClicked}>1</td>
             <td className="tdHotel" id="2" onClick={cellClicked}>2</td>
             <td className="tdHotel" id="3" onClick={cellClicked}>3</td>
         </tr>
         <tr className="trHotel">
             <td className="tdHotel" id="4" onClick={cellClicked}>4</td>
             <td  className="tdHotel" id="5" onClick={cellClicked}>5</td>
             <td className="tdHotel" id="6" onClick={cellClicked}>6</td>
         </tr>
         <tr className="trHotel">
             <td className="tdHotel" id="7" onClick={cellClicked}>7</td>
             <td className="tdHotel" id="8" onClick={cellClicked}>8</td>
             <td className="tdHotel" id="9" onClick={cellClicked}>9</td>
         </tr>

         <tr className="trHotel">
             <td name="/" className="tdHotel" id="/" onClick={cellClicked}>/</td>
             <td name="0" className="tdHotel" id="0" onClick={cellClicked}>0</td>
             <td name="." className="tdHotel" id="." onClick={cellClicked}>.</td>
         </tr>

         <tr>
             <td className="tdHotel" colSpan="2" onClick={backSpacePressed}>Back space</td>
             <td className="Time2" onClick={loginPressed}>Login</td>
         </tr>
     </tbody>
        </table>

        

        </div>
           
        </div>
    )
}

export default HotelLoginPIN
