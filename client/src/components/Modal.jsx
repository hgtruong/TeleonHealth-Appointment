import { Button, Modal } from 'semantic-ui-react';

class AppointmentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  show(size) {
    this.setState({ size, open: true })
  }

  close() {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state;

    return (
      <div class="appointment-modal">
        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Delete Your Account</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative>No</Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content='Yes'
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export {AppointmentModal}
