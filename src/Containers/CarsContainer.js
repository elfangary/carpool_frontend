import { connect } from 'react-redux';
import Cars from '../Components/Cars';

import {
    getCarsLoading, getCars, getCarsSuccess, getCarsFailure
} from '../Actions/cars';

const mapStateToProps = function (store){
	return {
		cars: store.userCars.cars,
        loading: store.userCars.loading,
        error: store.userCars.error
	};
};


const mapDispatchToProps = function (dispatch){
	return {

        getCars: (id) => {
            dispatch(getCarsLoading());
            dispatch(getCars(id)).then(response => {
                if(response.payload.status < 400){
                    dispatch(getCarsSuccess(response.payload.data));
                }else{
                    dispatch(getCarsFailure(response.payload.message));
                }
            })
        }
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(Cars);