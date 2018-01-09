import { connect } from 'react-redux';
import { getTripsTrackingLoading, getTripsTracking,
     getTripsTrackingSuccess, getTripsTrackingFailure } from '../Actions/Hitch-HickerTripsTracking';
import HhTripsTracking from '../Components/HhTripsTracking';


const mapStateToProps = function(state){
    return {
        trackedTrips: state.hhTrackedTrips.trackedTrips,
        loading: state.hhTrackedTrips.loading,
        error: state.hhTrackedTrips.error
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HhTripsTracking);