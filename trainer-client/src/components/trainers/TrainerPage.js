import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as trainerActions from '../../actions/trainerActions';
import TrainerForm from './TrainerForm';
import {browserHistory} from 'react-router';

class TrainerPage extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        trainer: Object.assign({}, this.props.trainer), 
        saving: false,
        isEditing: false
      };
      this.saveTrainer = this.saveTrainer.bind(this);
      this.updateTrainerState = this.updateTrainerState.bind(this);
      this.toggleEdit = this.toggleEdit.bind(this);
      this.deleteTrainer = this.deleteTrainer.bind(this);
      this.redirect = this.redirect.bind(this);
    }