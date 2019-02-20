import React, {PropTypes} from 'react';

class TrainerForm extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
          <div>
            <form>
              <TextInput
                name="name"
                label="name"
                value={this.props.trainer.name}
                onChange={this.props.onChange}
                />
              <TextInput
                name="specialty"
                label="specialty"
                value={this.props.trainer.name}
                onChange={this.props.onChange}
                />

                <input
                    type="submit"
                    disabled={this.props.saving}
                    value={this.props.saving ? 'Saving...' : 'Save'}
                    className="btn btn-primary"
                    onClick={this.props.onSave}/>
                </form>
            </div>

        );
    }
}

TrainerForm.propTypes = {
    trainer: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool
  };
  
  export default TrainerForm;