import { connect } from 'react-redux';
import Cars from '../Components/Cars';

import {
    getCarsLoading, getCars, getCarsSuccess, getCarsFailure,
    createCarLoading, createCar, createCarSuccess, createCarFailure,
    deleteCarLoading, deleteCar, deleteCarSuccess, deleteCarFailure
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
        getCars: () => {
            dispatch(getCarsLoading());
            dispatch(getCars()).then(response => {
                if(response.payload.status < 400){
                    dispatch(getCarsSuccess(response.payload.data));
                }else{
                    dispatch(getCarsFailure(response.payload.response.data.message));
                }
            })
        },
        createCar: (car) => {
            dispatch(createCarLoading());
            dispatch(createCar(car)).then(response =>{
                if(response.payload.status < 400){
                    dispatch(createCarSuccess(response.payload.data));
                }else{
                    dispatch(createCarFailure(response.payload.response.data.message));
                }
            });
        },
        deleteCar: (id) =>{
            dispatch(deleteCarLoading(id));
            dispatch(deleteCar(id)).then(response => {
                if(response.payload.status < 400){
                    dispatch(deleteCarSuccess(id));
                }else{
                    dispatch(deleteCarFailure(id));
                }
            });
        }
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(Cars);