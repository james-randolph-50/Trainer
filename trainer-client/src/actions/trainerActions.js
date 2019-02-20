import * as types from './actionTypes';
import trainerApi from '../api/TrainersApi';

export function loadTrainersSuccess(trainers) {
    return {type: types.LOAD_TRAINERS_SUCCESS, trainers};
  }

export function updateTrainerSuccess(trainer) {
    return {type: types.UPDATE_TRAINER_SUCCESS, trainer}
  }

  export function createTrainerSuccess(trainer) {
    return {type: types.CREATE_TRAINER_SUCCESS, trainer}
  }
  
  export function deleteTrainerSuccess(trainer) {
    return {type: types.DELETE_TRAINER_SUCCESS, trainer}
  }

  export function loadTrainers() {
    return function(dispatch) {
      return trainerApi.getAllTrainers().then(trainers => {
        dispatch(loadTrainersSuccess(trainers));
      }).catch(error => {
        throw(error);
      });
    };
  }

  export function updateTrainer(trainer) {
    return function (dispatch) {
      return trainerApi.updateTrainer(trainer).then(responseTrainer => {
        dispatch(updateTrainerSuccess(responseTrainer));
      }).catch(error => {
        throw(error);
      });
    };
  }
  
  export function createTrainer(trainer) {
    return function (dispatch) {
      return trainerApi.createTrainer(trainer).then(responseTrainer => {
        dispatch(createTrainerSuccess(responseTrainer));
        return responseTrainer;
      }).catch(error => {
        throw(error);
      });
    };
  }
  
  export function deleteTrainer(trainer) {
    return function(dispatch) {
      return trainerApi.deleteTrainer(trainer).then(() => {
        console.log(`Deleted ${trainer.id}`)
        dispatch(deleteTrainerSuccess(trainer));
        return;
      }).catch(error => {
        throw(error);
      })
    }
  }