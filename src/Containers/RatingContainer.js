import { connect } from 'react-redux';
import { addRateLoading, addRate, addRateSuccess, addRateFailure } from '../Actions/rating';
import Rating from '../Components/Rating';

const mapStateToProps = function(state){
    return {
        rate: state.rating.rate,
        loading: state.rating.loading,
        error: state.rating.error
    };
};

const mapDispatchToProps = function(dispatch){
    return {
        add_rate: (user_id, rate) => {
            dispatch(addRateLoading());
            dispatch(addRate(user_id, rate))
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