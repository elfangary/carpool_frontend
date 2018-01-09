import { connect } from 'react-redux';
import Checkout from '../Components/Checkout';
import {
    addChargeLoading, addCharge, addChargeSuccess, addChargeFailure
} from '../Actions/checkout';

const mapStateToProps = function (store){
    return {
        points: store.user.points,
        loading: store.user.loading,
        error: store.user.error
    };
};

const mapDispatchToProps = function (dispatch){
    return {

        addCharge: (points) => {
            dispatch(addChargeLoading());
            dispatch(addCharge(points)).then(response => {
                if(response.payload.status < 400){
                    dispatch(addChargeSuccess(response.payload.data));
                }else{
                    dispatch(addChargeFailure(response.payload.message));
                }
            })
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Checkout);