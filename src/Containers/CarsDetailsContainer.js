import { connect } from 'react-redux';
import CarDetails from '../Components/CarDetails';

import {
    getCarLoading, getCar, getCarSuccess, getCarFailure,
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
        getCar: (id) => {
            dispatch(getCarLoading(id));
            dispatch(getCar(id)).then(response =>{
                if(response.payload.status < 400){
                    dispatch(getCarSuccess(response.payload.data));
                }else{
                    dispatch(getCarFailure(response.payload.response.data.message));
                }
            });
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

export default connect(mapStateToProps, mapDispatchToProps)(CarDetails);