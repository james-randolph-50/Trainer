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