import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import actions from "./Redux/action";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../css/DetailsGlasses.css'
import { withRouter, useHistory } from "react-router-dom";

function mapStateToProps(state) {
    return { glasses: state.glasses };
}
const allGlasses = connect(mapStateToProps)(function AllGlassesDetails(props) {

    const { glasses, dispatch } = props;
    const [disable, setDisable] = useState(true);

    function ItemCheck(id) {
        if (!disable) {
            dispatch(actions.updateCheckGlasses(id));
        }
    }
    function ItemCount(id, value) {
        if (parseInt(value.target.value) <= 0) {
            alert('The number you entered is incorrect')
        }
        else {
            dispatch(actions.updateCountGlasses({ id: id, count: parseInt(value.target.value) }));
            setDisable(false)
        }
    }

    return (
        <>
            <div className='row'>
                {glasses.map(item => <div className='card col-3 rounded-circle m-5' key={item.id}>
                    <div className='card-body d-flex justify-content-center'>
                        <input className='form-check-input mt-5 float-center' disabled={disable} type="checkbox" id={item.id} onChange={(id) => ItemCheck(item.id)}></input>
                        <label className='mr-3'>Count</label>
                        <input className="form-control number" type='number' max='9' onChange={(e) => ItemCount(item.id, e)}></input>
                    </div>

                    <h5 className="card-title">The type of glasses: {item.type}</h5>
                    <div className="card-footer bg-transparent">
                        <Popup trigger={<button className='btn col-6 b'>Details...</button>} position="right center">
                            <div>Glasses {item.type}<br></br> And the price: {item.price}</div>
                        </Popup>
                    </div>
                </div>)}
            </div>
        </>
    )
})


const insertGlasses = connect(mapStateToProps)(function InsertGlassesDetails(props) {
    const { glasses, dispatch } = props;
    const [count, setCount] = useState(5)
    const typeRef = useRef('');
    const priceRef = useRef('');

    function insertGlasses() {
        if (typeRef.current.value && priceRef.current.value) {
            if (typeRef.current.value.match(".*\\d.*") ||
                priceRef.current.value.match(/[A-z]/g) != null) {
                alert('Type again glasses type that contain only letters \n and price of glasses contain only numbers')
            }
            else {
                dispatch(actions.addGlasses({ id: count, type: typeRef.current.value, price: priceRef.current.value }))
                setCount(count => count + 1)
            }
        }
        else {
            alert('Enter details of glasses')
        }
    }

    return (
        <>
            <div className="container m-4">
                <div className="row">
                    <form className="form-group">
                        <input ref={typeRef} type="string" className='col-3 form m-3' placeholder="Type of glasses"></input>
                        <input ref={priceRef} type="string" className="col-3 form m-3" placeholder="Price of glasses"></input>
                    </form>
                    <button onClick={insertGlasses} className=' col-3 btn b m-3'>Adding glasses</button>
                </div>
            </div>
        </>
    )
})

const itemsChecked = withRouter(connect(mapStateToProps)(function ItemsChecked(props) {
    const { glasses, dispatch } = props;
    const [confirmation, setConfirmation] = useState(false);
    const [payment, setPayment] = useState(false)
    let history = useHistory();

    function movePayment() {
        setPayment(true);
    }

    useEffect(() => {
        if (payment === true) {
            if (window.confirm('Do you want to go to the payment page ?')) {
                // Save it!
                console.log('yes');
                history.push("/payment");
            } else {
                // Do nothing!
                console.log('no');
                setPayment(false)
            }
            console.log(payment);
        }
    }, [payment])

    useEffect(() => {
        let res = glasses.filter(g => g.check === true)
        if (res.length !== 0) {
            setConfirmation(true)
        }
    })


    return (
        <>
            {
                confirmation &&
                <div className='row'>
                    <div className='col-4'>
                        <div>
                            <button onClick={movePayment} className='btn m-5'>Go to the payment page</button>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}))

export default { allGlasses, insertGlasses, itemsChecked }