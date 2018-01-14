import { connect } from 'react-redux';
import HhForm from '../Components/HitchHikerForm';
import { getFilteredTripsLoading, getFilteredTrips, getFilteredTripsSuccess, getFilteredTripsFailure,
    addHhStopPointLoading, addHhStopPoint, addHhStopPointSuccess, addHhStopPointFailure } from '../Actions/HhForm';
import { decrementUserPoints } from '../Actions/user';
import history from '../history';

const mapStateToProps = function(state){
    return {
        trips: state.filteredTrips.trips,
        new_hh_stop: state.filteredTrips.new_hh_stop,
        loading: state.filteredTrips.loading,
        error: state.filteredTrips.error
    }
}


const mapDispatchToProps = function(dispatch){
    return {
        getFilteredTrips: (day, location_id_start, location_id_end, start_time, end_time) => {
            dispatch(getFilteredTripsLoading());
            dispatch(getFilteredTrips(day, location_id_start, location_id_end, start_time, end_time))
            .then(response => {
                if(response.payload.status < 400){
                    dispatch(getFilteredTripsSuccess(response.payload.data));
                }else{
                    dispatch(getFilteredTripsFailure(response.payload.message));
                }
            })
        },
        addHhStopPoint: (stop_point_id, booked_seats, notifications_attributes) => {
            dispatch(addHhStopPointLoading());
            dispatch(addHhStopPoint(stop_point_id, booked_seats, notifications_attributes))
            .then(response => {
                if(response.payload.status < 400){
                    dispatch(addHhStopPointSuccess(response.payload.data));
                    dispatch(decrementUserPoints(response.payload.data.points_on_hold));
                    history.push('/profile/hitch-hiking/trips')
                }else{
                    dispatch(addHhStopPointFailure(response.payload.message));
                }
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HhForm);