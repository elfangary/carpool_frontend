import { connect } from 'react-redux';
import { getHhTripsTrackingLoading, getHhTripsTracking,
     getHhTripsTrackingSuccess, getHhTripsTrackingFailure, rateDriverLoading, rateDriver,
      rateDriverSuccess, rateDriverFailure } from '../Actions/Hitch-HickerTripsTracking';
import HhTripsTracking from '../Components/HhTripsTracking';


const mapStateToProps = function(state){
    return {
        hhTrackedTrips: state.hhTrackedTrips.hhTrackedTrips,
        driverRate: state.hhTrackedTrips.driverRate,
        loading: state.hhTrackedTrips.loading,
        error: state.hhTrackedTrips.error
    };
};

const mapDispatchToProps = function(dispatch){
    return {
        getHhTripsTracking: (time) => {
            dispatch(getHhTripsTrackingLoading());
            dispatch(getHhTripsTracking(time))
            .then(response => {
                if(response.payload.status < 400){
                    dispatch(getHhTripsTrackingSuccess(response.payload.data));
                }else{
                    dispatch(getHhTripsTrackingFailure(response.payload.message));
                }
            })
        },
        rateDriver: (trip_id, driver_id, rate) => {
            dispatch(rateDriverLoading());
            dispatch(rateDriver(trip_id, driver_id, rate))
            .then(response => {
                if(response.payload.status < 400){
                    dispatch(rateDriverSuccess(response.payload.data));
                }else{
                    dispatch(rateDriverFailure(response.payload.message));
                }
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HhTripsTracking);