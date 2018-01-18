import { connect } from 'react-redux';
import Cars from '../Components/Cars';

import {
    getCarsLoading, getCars, getCarsSuccess, getCarsFailure
} from '../Actions/cars';

const mapStateToProps = function (store){
	return {
        cars: store.userCars.cars,
        car: store.userCars.car,
        loading: store.userCars.loading,
        error: store.userCars.error
	};
};

const mapDispatchToProps = function (dispatch){
	return {
        getCars: () => {
            dispatch(getCarsLoading());
            dispatch(getCars()).then(response => {
                if(response.payload.status < 400){
                    dispatch(getCarsSuccess(response.payload.data));
                    console.log(response.payload.data)
                }else{
                    dispatch(getCarsFailure(response.payload.response.data.message));
                }
            })
        }
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(Cars);