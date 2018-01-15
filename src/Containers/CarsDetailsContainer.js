import { connect } from 'react-redux';
import CarDetails from '../Components/CarDetails';
import swal from 'sweetalert';
import history from '../history';

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
                    swal("Successfully Created" ,"Looking Forward For Your Next Trip", "success");
                }else{
                    dispatch(createCarFailure(response.payload.response.data.message));
                    swal("Oops!", "Try Again!", "error");
                }
            });
        },
        deleteCar: (id) =>{
            dispatch(deleteCarLoading(id));
            dispatch(deleteCar(id)).then(response => {
                if(response.payload.status < 400){
                    dispatch(deleteCarSuccess(id));
                    swal("Successfully Deleted", "", "success");
                }else{
                    dispatch(deleteCarFailure(id));
                }
            });
        }
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CarDetails);