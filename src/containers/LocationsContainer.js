import { getLocationsLoading, getLocations, getLocationsSuccess, getLocationsFailure } from '../Actions/locations';
import { connect } from 'react-redux';
import Locations from '../Components/locations';

const mapStateToProps = function(state){
    return {
        locations: state.locations.locations,
    };
};

const mapDispatchToProps = function(dispatch){
    return {
        getLocations: () => {
            dispatch(getLocationsLoading());
            dispatch(getLocations()).then(response => {
                if(response.payload.status < 400){
                    dispatch(getLocationsSuccess(response.payload.data));
                }else{
                    dispatch(getLocationsFailure(response.payload.message));
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
