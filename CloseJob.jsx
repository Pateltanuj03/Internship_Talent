import React from "react";
import { Modal } from "semantic-ui-react";

const CloseJob = (props) => {

    const pageNumbers = [];
    const { currentId,closeJob,toggleCloseJob, init } = props;

  return (
    <Modal
      className="formwidth"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button icon="trash alternate" color="red" content="Delete" />}
    >
      <Modal.Header>Close job</Modal.Header>
      <Form className="formmargin">
        <Form.Field>
          <label>Are you sure?</label>
        </Form.Field>
      </Form>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)} content="cancel" />

        <Button
          icon="delete"
          content="Delete"
          labelPosition="right"
          color="red"
          onClick={this.toggleCloseJob}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default CloseJob;

