import { connect } from 'react-redux';
import HhForm from '../Components/HitchHikerForm';
import { getFilteredTripsLoading, getFilteredTrips, getFilteredTripsSuccess, getFilteredTripsFailure } from '../Actions/HhForm';

const mapStateToProps = function(state){
    return {
        trips: state.filteredTrips.trips,
        loading: state.filteredTrips.loading,
        error: state.filteredTrips.error
    }
}


const mapDispatchToProps = function(dispatch){
    return {
        getFilteredTrips: (day, location_id, start_time, end_time) => {
            dispatch(getFilteredTripsLoading());
            dispatch(getFilteredTrips(day, location_id, start_time, end_time))
            .then(response => {
                if(response.payload.status < 400){
                    dispatch(getFilteredTripsSuccess(response.payload.data));
                }else{
                    dispatch(getFilteredTripsFailure(response.payload.message));
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HhForm);