import { connect } from 'react-redux';
import { getTripsTrackingLoading, getTripsTracking,
     getTripsTrackingSuccess, getTripsTrackingFailure, changeHhStopStatusLoading, changeHhStopStatus,
      changeHhStopStatusSuccess, changeHhStopStatusFailure } from '../Actions/DriverTripsTracking';
import DriverTripsTracking from '../Components/DriverTripsTracking';


const mapStateToProps = function(state){
    return {
        trackedTrips: state.driverTrackedTrips.trackedTrips,
        updated_hh_stop: state.driverTrackedTrips.updated_hh_stop,
        loading: state.driverTrackedTrips.loading,
        error: state.driverTrackedTrips.error
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        getTripsTracking: (time) => {
            dispatch(getTripsTrackingLoading());
            dispatch(getTripsTracking(time))
            .then(response => {
                if(response.payload.status < 400){
                    dispatch(getTripsTrackingSuccess(response.payload.data));
                }else{
                    dispatch(getTripsTrackingFailure(response.payload.message));
                }
            })
        },
        changeHhStopStatus: (confirm) => {
            dispatch(changeHhStopStatusLoading());
            dispatch(changeHhStopStatus(confirm))
            .then(response => {
                if(response.payload.status < 400){
                    dispatch(changeHhStopStatusSuccess(response.payload.data));
                }else{
                    dispatch(changeHhStopStatusFailure(response.payload.message));
                }
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DriverTripsTracking);