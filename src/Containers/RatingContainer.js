import { connect } from 'react-redux';
import { addRateLoading, addRate, addRateSuccess, addRateFailure } from '../Actions/rating';
import Rating from '../Components/Rating';

const mapStateToProps = function(state){
    return {
        Ratings: state.Ratings.Ratings,
        loading: state.Ratings.loading,
        error: state.Ratings.error
    };
};

const mapDispatchToProps = function(dispatch){
    return {
        addRate: (Ratings) => {
            dispatch(addRateLoading());
            dispatch(addRate(Ratings))
            .then(response => {
                if(response.payload.status < 400){
                    dispatch(addRateSuccess(response.payload.data));
                }else{
                    dispatch(addRateFailure(response.payload.message));
                }
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rating);