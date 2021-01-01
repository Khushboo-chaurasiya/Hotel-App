import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function HotelHome(props) {
    const [post] = useState([
        {name:"Crunchy Toast", price:"78$"},
        {name:"Nice Cake", price:"58$"},
        {name:"Chicken kastu", price:"18$"},
        {name:"Chilli beef", price:"178$"},
        {name:"Monloian fish", price:"98$"},
        {name:"Miso desert", price:"38$"},
        {name:"Tomato sabji", price:"40$"},
        {name:"Fried chicken", price:"95$"},
        {name:"Fish seawood", price:"135$"},
        {name:"Fish Chilli", price:"998$"},
        {name:"Desert cook", price:"498$"},
        {name:"Mango cake", price:"98$"},

    ])

    const [showList, setShowList] = useState([]);
    const [total, setTotal] = useState(0);
    let Arr = [];

    useEffect(() => {
        if(props?.location?.state?.data){
            setShowList(props.location.state.data)
        }

        if(props?.location?.state?.total){
            setTotal(props.location.state.total)
        }
    }, [])

    const fetchItem = (e) => {
        let getArr = e.target.innerText.split("-");
        let obj = {
            name: getArr[0],
            price : getArr[1]
        }

        setTotal(total+Number(getArr[1].substring(1,getArr[1].length-1)));

        Arr = showList;

        Arr.push(obj);
        Arr = [...new Set(Arr)];
        setShowList(Arr);
    }

    const gotoCard = () => {
        props.history.push("/hotelCard", {
            data: showList,
            total:total
          });
    }

    return (
        <div className="wholeBody">
            <div className="paraCSS">
                <div className="topHeader">
                    Welcome to <b>Panjabi Kitchen</b>
                </div>
                <div className="footer">
                    <div><button onClick={gotoCard} className="btnDelete">card  <span role="img">&#128722;</span> {showList.length} </button></div>
                </div>
        
            </div>
        <div className="HotelHomeApp">
            <div className="section1">
            <br/>
            <div className="row">
            {
                post.map(item => (
                    <div className="Left">
                        <div>
                        <img className="cardImage" src={require(`../Images/${item.name}.jpg`)} alt="Card missing" />
                            <div className="Centered App">
                            <Link className="Link" onClick={fetchItem}>
                                <h6>{item.name} - {item.price}</h6>
                            </Link>
                            
                            </div>
                            </div>
                    </div>       
                ))
            }
        </div>
        </div>
        
            
        </div>
        
        
        </div>
        
    )
}

export default HotelHome
