import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import TrainerPage from './TrainerPage';

const TrainerListRow = ({trainer}) => {
  return (
    <tr>
      <td><Link to={'/trainers/' + trainer.id}>{trainer.name}</Link></td>
    </tr>
  );
};

TrainerListRow.propTypes = {
  trainer: PropTypes.object.isRequired
};

export default TrainerListRow;