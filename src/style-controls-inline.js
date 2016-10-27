import React, { Component } from 'react';
import { EditorState, RichUtils } from 'draft-js';
import { StyleControls } from './style-controls-base';

export default class InlineStyleControls extends Component {
  static propTypes = {
    editorState: React.PropTypes.instanceOf(EditorState).isRequired,
    onChange: React.PropTypes.func.isRequired,
  };

  toggleInlineStyle = (style) => {
    this.props.onChange(
      RichUtils.toggleInlineStyle(
        this.props.editorState,
        style
      )
    );
  }

  isInlineActive = (style) => {
    const currentStyle = this.props.editorState.getCurrentInlineStyle();
    return currentStyle.has(style);
  }

  render() {
    return (
      <StyleControls
        buttons={[
          { icon: 'glyphicon glyphicon-bold', style: 'BOLD' },
          { icon: 'glyphicon glyphicon-italic', style: 'ITALIC' },
          { icon: 'glyphicon glyphicon-text-color', style: 'UNDERLINE' },
          { icon: 'glyphicon glyphicon-text-background', style: 'STRIKETHROUGH' },
          { icon: 'glyphicon glyphicon-console', style: 'CODE' },
        ]}
        isActive={this.isInlineActive}
        onToggle={this.toggleInlineStyle}
      />
    );
  }
}
