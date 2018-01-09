import { connect } from 'react-redux';
import {
    getTripsTrackingLoading, getTripsTracking, getTripsTrackingSuccess, getTripsTrackingFailure,
    changeHhStopStatusLoading, changeHhStopStatus, changeHhStopStatusSuccess, changeHhStopStatusFailure,
    changeTripStatusLoading, changeTripStatus, changeTripStatusSuccess, changeTripStatusFailure,
    addBalanceToDriverLoading, addBalanceToDriver, addBalanceToDriverSuccess, addBalanceToDriverFailure
} from '../Actions/DriverTripsTracking';
import DriverTripsTracking from '../Components/DriverTripsTracking';


const mapStateToProps = function(state){
    return {
        trackedTrips: state.driverTrackedTrips.trackedTrips,
        updated_hh_stop: state.driverTrackedTrips.updated_hh_stop,
        updated_trip: state.driverTrackedTrips.updated_trip,
        points: state.user.points,
        loading: state.driverTrackedTrips.loading,
        error: state.driverTrackedTrips.error
    };
};

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
        changeHhStopStatus: (id, confirm) => {
            dispatch(changeHhStopStatusLoading());
            dispatch(changeHhStopStatus(id, confirm))
            .then(response => {
                if(response.payload.status < 400){
                    dispatch(changeHhStopStatusSuccess(response.payload.data));
                }else{
                    dispatch(changeHhStopStatusFailure(response.payload.message));
                }
            })
        },
        changeTripStatus: (trip_id, status) => {
            dispatch(changeTripStatusLoading());
            dispatch(changeTripStatus(trip_id, status))
            .then(response => {
                if(response.payload.status < 400){
                    dispatch(changeTripStatusSuccess(response.payload.data));
                }else{
                    dispatch(changeTripStatusFailure(response.payload.message));
                }
            })
        },
        addBalanceToDriver: (trip_id) => {
            dispatch(addBalanceToDriverLoading());
            dispatch(addBalanceToDriver(trip_id))
            .then(response => {
                if(response.payload.status < 400){
                    dispatch(addBalanceToDriverSuccess(response.payload.data));
                }else{
                    dispatch(addBalanceToDriverFailure(response.payload.message));
                }
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DriverTripsTracking);