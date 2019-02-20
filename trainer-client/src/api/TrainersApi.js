class TrainersApi {
    static getAllTrainers() {
      return fetch('http://localhost:3001/api/v1/trainers').then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
  
    static updateTrainer(trainer) {
      const request = new Request(`http://localhost:3001/api/v1/trainers/${trainer.id}`, {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json'
        }), 
        body: JSON.stringify({trainer: trainer})
      });
  
  
      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
  
    static createTrainer(trainer) {
      const request = new Request('http://localhost:3001/api/v1/trainers/', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }), 
        body: JSON.stringify({trainer: trainer})
      });
  
  
      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
  
    static deleteTrainer(trainer) {
      const request = new Request(`http://localhost:3001/api/v1/trainers/${trainer.id}`, {
        method: 'DELETE'
      });
  
      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
  }

  export default TrainersApi;