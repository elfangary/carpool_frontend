import { connect } from 'react-redux';
import { getTripsTrackingLoading, getTripsTracking,
     getTripsTrackingSuccess, getTripsTrackingFailure } from '../Actions/DriverTripsTracking';
import DriverTripsTracking from '../Components/DriverTripsTracking';


const mapStateToProps = function(state){
    return {
        trackedTrips: state.driverTrackedTrips.trackedTrips,
        loading: state.driverTrackedTrips.loading,
        error: state.driverTrackedTrips.error
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        getTripsTracking: (id, time) => {
            dispatch(getTripsTrackingLoading());
            dispatch(getTripsTracking(id, time))
            .then(response => {
                if(response.payload.status < 400){
                    dispatch(getTripsTrackingSuccess(response.payload.data));
                }else{
                    dispatch(getTripsTrackingFailure(response.payload.message));
                }
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DriverTripsTracking);