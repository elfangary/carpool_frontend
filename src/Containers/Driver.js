import { connect } from 'react-redux';
import Driver from '../Components/Driver';
import {
    addTripLoading, addTrip, addTripSuccess, addTripFailure
} from '../Actions/driver';

const mapStateToProps = function (store){
	return {
		trip: store.newTrip.trip,
        loading: store.newTrip.loading,
        error: store.newTrip.error
	};
};

const mapDispatchToProps = function (dispatch){
	return {

		addTrip: (car_id, driver_id, day, all_seats, stop_points_attributes) => {
            dispatch(addTripLoading());
            dispatch(addTrip(car_id, driver_id, day, all_seats, stop_points_attributes)).then(response => {
                if(response.payload.status < 400){
                    dispatch(addTripSuccess(response.payload.data));
                }else{
                    dispatch(addTripFailure(response.payload.message));
                }
            })
        }
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(Driver);