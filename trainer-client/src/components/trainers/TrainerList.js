import React, {PropTypes} from 'react';
import TrainerListRow from './TrainerListRow';

const TrainerList = ({trainers}) => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map(trainer => 
            <TrainerListRow key={trainer.id} trainer={trainer} />
          )}
        </tbody>
      </table>
    );
  };
  
  TrainerList.propTypes = {
    trainers: PropTypes.array.isRequired
  };
  
  export default TrainerList;