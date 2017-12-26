import { getLocations, getLocationsSuccess, getLocationsFailure } from '../actions/locations';
import { connect } from 'react-redux';
import Locations from '../components/locations';

const mapStateToProps = function(state){
    return {
        locations: state.locations.locations,
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        getLocations: function(){
            dispatch(getLocations()).then(function(response){
                dispatch(getLocationsSuccess(response))
            })
            .catch(function(error){
                dispatch(getLocationsFailure(error))
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
