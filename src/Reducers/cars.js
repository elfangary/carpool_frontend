import {
	GET_ALL_CARS_LOADING, GET_ALL_CARS_SUCCESS, GET_ALL_CARS_FAILURE,
	GET_CAR_LOADING, GET_CAR_SUCCESS, GET_CAR_FAILURE,
	CREATE_CAR_LOADING, CREATE_CAR_SUCCESS, CREATE_CAR_FAILURE,
	DELETE_CAR_LOADING, DELETE_CAR_SUCCESS, DELETE_CAR_FAILURE
} from '../Actions/cars';

const INITIAL_STATE = {
   	cars: [],
	car: {},
	loading: false,
    error: null
};

export default function(currentState = INITIAL_STATE, action){
	switch(action.type) {

		case GET_ALL_CARS_LOADING:
			return {...currentState, loading: true};
		case GET_ALL_CARS_SUCCESS:
			return {...currentState, cars: action.cars, loading: false};
		case GET_ALL_CARS_FAILURE:
			return {...currentState, error: action.error, loading: false};

		//Get car
		case GET_CAR_LOADING:
			var newCars = currentState.cars.map((car) =>{
				if(car.id == action.id){
					car.loading = true;
				}
				return car;
			})
			return {...currentState, cars: newCars};
		case GET_CAR_SUCCESS:
			return {...currentState, cars: [...currentState.cars, action.car], loading: false};
		case GET_CAR_FAILURE:
			newCars = currentState.cars.map((car) =>{
				if(car.id == action.id){
					car.loading = false;
					car.errors = action.errors;
					return car;
				}
			})
			return {...currentState, cars: newCars };

		//Craete car
		case CREATE_CAR_LOADING:
			return {...currentState, loading: true};
		case CREATE_CAR_SUCCESS:
			return {...currentState, cars: [...currentState.cars, action.car], loading: false};
		case CREATE_CAR_FAILURE:
			return {...currentState, error: action.error, loading: false};

		//Delete car
		case DELETE_CAR_LOADING:
			var newCars = currentState.cars.map((car) =>{
				if(car.id == action.id){
					car.loading = true;
				}
				return car;
			})
			return {...currentState, cars: newCars};
		case DELETE_CAR_SUCCESS:
			newCars = currentState.cars.filter((car) =>{
				return car.id !== action.id;
			})
			return {...currentState, cars: newCars};
		case DELETE_CAR_FAILURE:
			newCars = currentState.cars.map((car) =>{
				if(car.id == action.id){
					car.loading = false;
					car.errors = action.errors;
					return car;
				}
			})
			return {...currentState, cars: newCars };
		default:
			return currentState;
	};
};