import React, { Component } from 'react';
import { EditorState, RichUtils } from 'draft-js';
import { StyleControls } from './style-controls-base'; 

export default class BlockStyleControls extends Component {
  static propTypes = {
    editorState: React.PropTypes.instanceOf(EditorState).isRequired,
    onChange: React.PropTypes.func.isRequired,
  }

  toggleBlockType = (type) => {
    this.props.onChange(
      RichUtils.toggleBlockType(
        this.props.editorState,
        type
      )
    );
  }

  isBlockActive = (type) => {
    const selection = this.props.editorState.getSelection();
    const blockType = this.props.editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();

    return type === blockType;
  }

  render() {
    return (
      <StyleControls
        buttons={[
          { icon: 'glyphicon glyphicon-header',   style: 'header-two' },
          { icon: 'glyphicon glyphicon-comment',  style: 'blockquote' },
          { icon: 'glyphicon glyphicon-list',     style: 'unordered-list-item' },
          { icon: 'glyphicon glyphicon-list-alt', style: 'ordered-list-item' },
          { icon: 'glyphicon glyphicon-console', style: 'code-block' },
        ]}
        isActive={this.isBlockActive}
        onToggle={this.toggleBlockType}
      />
    );
  }
}
