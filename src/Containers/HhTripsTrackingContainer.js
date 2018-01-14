import { connect } from 'react-redux';
import { getHhTripsTrackingLoading, getHhTripsTracking,
     getHhTripsTrackingSuccess, getHhTripsTrackingFailure } from '../Actions/Hitch-HickerTripsTracking';
import {rateUserLoading, rateUser, rateUserSuccess, rateUserFailure} from '../Actions/user';  
import HhTripsTracking from '../Components/HhTripsTracking';


const mapStateToProps = function(state){
    return {
        hhTrackedTrips: state.hhTrackedTrips.hhTrackedTrips,
        ratings: state.user.ratings,
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
        rateUser: (ratings) => {
            dispatch(rateUserLoading());
            dispatch(rateUser(ratings))
            .then(response => {
                if(response.payload.status < 400){
                    dispatch(rateUserSuccess(response.payload.data));
                }else{
                    dispatch(rateUserFailure(response.payload.message));
                }
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HhTripsTracking);