import { connect } from 'react-redux';
import Driver from '../Components/Driver';
import {
    addTripLoading, addTrip, addTripSuccess, addTripFailure
} from '../Actions/driver';
import history from '../history';


const mapStateToProps = function (store){
	return {
		trip: store.newTrip.trip,
        loading: store.newTrip.loading,
        error: store.newTrip.error
	};
};

const mapDispatchToProps = function (dispatch){
	return {
		addTrip: (car_id, day, all_seats, specific_gender, smoking, stop_points_attributes) => {
            let end_time = stop_points_attributes[0].end_time;
            const stopPoints = stop_points_attributes.map(stopPoint => {
                if (stopPoint.end_time > end_time) end_time = (day + ' ' + stopPoint.end_time);
                return {
                    ...stopPoint,
                    start_time: day + ' ' + stopPoint.start_time,
                    end_time: day + ' ' + stopPoint.end_time
                }
            })
            const timeInSeconds = new Date(end_time).getTime();

            dispatch(addTripLoading());
            dispatch(addTrip(car_id, day, all_seats, specific_gender, smoking, stopPoints, timeInSeconds))
            .then(response => {
                if(response.payload.status < 400){
                    dispatch(addTripSuccess(response.payload.data));
                    history.push('/profile/driving/trips');
                }else{
                    dispatch(addTripFailure(response.payload.message));
                }
            })
        }
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(Driver);