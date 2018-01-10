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

		addTrip: (car_id, day, all_seats, stop_points_attributes) => {
            stop_points_attributes[0].start_time = day + ' ' + stop_points_attributes[0].start_time
            stop_points_attributes[0].end_time = day + ' ' + stop_points_attributes[0].end_time
            stop_points_attributes[1].start_time = day + ' ' + stop_points_attributes[1].start_time
            stop_points_attributes[1].end_time = day + ' ' + stop_points_attributes[1].end_time
            const timeInSeconds = new Date(stop_points_attributes[1].end_time).getTime();

            dispatch(addTripLoading());
            dispatch(addTrip(car_id, day, all_seats, stop_points_attributes, timeInSeconds))
            .then(response => {
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