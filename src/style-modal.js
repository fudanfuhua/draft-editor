import React, { Component } from 'react';
import Modal from 'react-modal';

export default class StyleModal extends Component {
  static propTypes = {
    title: React.PropTypes.string,
    isOpen: React.PropTypes.bool,
    onClose: React.PropTypes.func, // (string, string) => void
  }
  cancel = () => (this.props.onClose('close'));
  closeModal = () => (this.props.onClose(this.props.title, this.input.value));
  onKeyDown = (event) => {
    if (event.which === 13) {
      event.preventDefault();
      this.closeModal();
    }
  };

  render () {
    return (
        <Modal
          style={{
            overlay: {
              backgroundColor: 'rgba(0,0,0,0.6)'
            },
            content: {
              height: 200,
              width: 700,
              margin: '0 auto',
            }
          }}
          isOpen={this.props.isOpen}
          onRequestClose={this.closeModal}
        >
          <h2>{this.props.title}</h2>
          <input
            className="form-control"
            placeholder="Value..."
            onKeyDown={this.onKeyDown}
            ref={(x) => (this.input = x)}
            autoFocus
          />
          <button 
            className="btn btn-primary btn-left"
            onClick={this.closeModal}
          >
            Accept
          </button>
          <button
            className="btn btn-default btn-left"
            onClick={this.cancel}
          >
            Cancel
          </button>
        </Modal>
    );
  }
}
