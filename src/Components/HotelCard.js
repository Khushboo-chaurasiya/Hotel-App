import React, { useEffect, useState } from 'react';

function HotelCard(props) {
    
    const [showList] = useState(props.location.state.data);
    const [total, setTotal] = useState(props.location.state.total);
    const [WholeArr, setWholeArr] = useState([]);

    useEffect(() => {
        let tableArr = [];
        for(let i=0; i<showList.length; i++){
            tableArr.push({name:showList[i].name, price:showList[i].price, count:showList[i]?.count ? showList[i]?.count : 1 });
        }
        setWholeArr(tableArr);
    }, [])
    
    

    
    const goToHotelHome = () => {
        props.history.push("/hotelHome", {
            data: WholeArr,
            total:total
          });
    }

    const addItem = (name) => {
        let index = null;
        for(let i=0; i<WholeArr.length; i++){
            if(name === WholeArr[i].name){
                index = i;
            }
        } 
        let tableArr = [...WholeArr];
        tableArr[index].count = tableArr[index].count + 1;
        
        setWholeArr([...tableArr]);
        setTotal(+total+(+WholeArr[index].price.split("$")[0]));
    }

    const removeItem = (name) => {
        let index = null;
        for(let i=0; i<WholeArr.length; i++){
            if(name === WholeArr[i].name){
                index = i;
            }
        } 
        let tableArr = [...WholeArr];
        tableArr[index].count = tableArr[index].count - 1;
        setWholeArr([...tableArr]);
        setTotal(total-(+WholeArr[index].price.split("$")[0]));
    }

    const deleteItem= (name) => {
        let index = null;
        for(let i=0; i<WholeArr.length; i++){
            if(name === WholeArr[i].name){
                index = i;
            }
        } 
        let tableArr = [...WholeArr];
        tableArr.splice(index,1);
        setWholeArr([...tableArr]);
        setTotal(total-(+WholeArr[index].price.split("$")[0])*WholeArr[index].count);
    }

    return (
        <div className="wholeBody">
            <div className="paraCSS">
                <div className="topHeader">
                    Welcome to <b>Panjabi Kitchen</b>
                </div>
                <div className="footer">
                    <div><button className="btnDelete" onClick={goToHotelHome}>BACK</button></div>
                    <div><button className="btnEdit" onClick={() => window.print()}>PRINT</button></div>
                    <div><button className="btnPlus">Total : {total}$ </button></div>
                </div>
        
            </div>
        <div className="HotelHomeApp">
        <div>
                {
                    total > 0 ? 
                    <table className="styled-table alignItem MarginTop">
                    <tr>
                        <td>Name</td>
                        <td>PRICE</td>
                        <td>QUANTITY </td>
                        <td>ACTION</td>
                    </tr>
                        
                {
                    WholeArr.map(item => (
                        <tbody>
                            <tr>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><b className="circleBtn" onClick={() => addItem(item.name)}>+</b> {item.count} {
                                item.count>1 ? <b className="circleBtn" onClick={() => removeItem(item.name)}>-</b> : null
                            }</td>
                            <td>
                            <b className="circleBtn" onClick={() => deleteItem(item.name)}>DELETE</b>
                            </td>
                            </tr>
                        </tbody>
                    ))
                }
    
                
                </table>
                 : <table className="styled-table alignItem"><tr><td>you don't have item in shooping card...</td></tr></table>
                } 
            
            </div>
            
            
        </div>
        
        
        </div>
        
    )
}

export default HotelCard
