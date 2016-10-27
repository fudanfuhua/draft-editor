import React, { Component } from 'react';
import { EditorState, Entity, Modifier, AtomicBlockUtils } from 'draft-js';
import { StyleControls } from './style-controls-base';
import StyleModal from './style-modal';

export default class ModalStyleControls extends Component {
  static propTypes = {
    editorState: React.PropTypes.instanceOf(EditorState).isRequired,
    onChange: React.PropTypes.func.isRequired,
  };
  state = {
    modalOpen: false,
    modalTitle: '',
  }

  makeEntity = (type, value) => {
    const key = Entity.create(
      type,
      'MUTABLE',
      {url: value}
    );

    const contentStateWithEntity = Modifier.applyEntity(
      this.props.editorState.getCurrentContent(),
      this.props.editorState.getSelection(),
      key
    );

    const newState = EditorState.push(
      this.props.editorState, 
      contentStateWithEntity, 
      'apply-entity'
    );
    this.props.onChange(newState);
  }

  makeAtomicBlock = (type, value) => {
    const key = Entity.create(
      type,
      'IMMUTABLE',
      {src: value}
    );

    const newState = AtomicBlockUtils.insertAtomicBlock(
      this.props.editorState, 
      key, 
      ' '
    );
    this.props.onChange(newState);
  }
  
  cancelModal = () => { this.setState({modalOpen: false}); };
  activateModal = (type) => {
    this.setState({
      modalOpen: true,
      modalTitle: type,
    })
  }

  closeModal = (type, value) => {
    switch(type) {
      case 'Link':
        this.makeEntity(type, value);
        break;
      case 'Audio':
      case 'Image':
      case 'Video':
        this.makeAtomicBlock(type, value);
        break;
      default:
        break;
    }

    this.cancelModal();
  } 

  render() {
      return (<div className="editor-controls">
        <StyleControls
          buttons={[
            { icon: 'glyphicon glyphicon-globe', style: 'Link' },
            { icon: 'glyphicon glyphicon-picture', style: 'Image' },
            { icon: 'glyphicon glyphicon-headphones', style: 'Audio' },
            { icon: 'glyphicon glyphicon-facetime-video', style: 'Video' },
          ]}
          isActive={() => false}
          onToggle={this.activateModal}
        />
        <StyleModal
          title={this.state.modalTitle}
          isOpen={this.state.modalOpen}
          onClose={this.closeModal}
        />
      </div>);
  }
}
