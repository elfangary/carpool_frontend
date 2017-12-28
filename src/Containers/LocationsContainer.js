import { getLocationsLoading, getLocations, getLocationsSuccess, getLocationsFailure } from '../Actions/Locations';
import { connect } from 'react-redux';
import Locations from '../Components/Locations';

const mapStateToProps = (state) => {
    return {
        locations: state.locations.locations,
        loading: state.locations.loading,
        error: state.locations.error
    }
}

const mapDispatchToProps = (dispatch) => {
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
