import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import EditorDecorator from './decorator';
import mediaBlockRenderer from './block-renderer';
import StyleControls from './rich-editor-controls';

class RichEditor extends Component {
  static propTypes = { readonly: React.PropTypes.bool };
  static defaultProps = { readOnly: false };
  state = { editorState: EditorState.createEmpty(EditorDecorator) };

  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.updateEditor(newState);
      return 'handled';
    }
    
    return 'not-handled';
  }

  updateEditor = (newState) => { this.setState({ editorState: newState }); }
  render() {
    return (<div>
      {!this.props.readOnly &&
        <StyleControls
          editorState={this.state.editorState}
          onChange={this.updateEditor} 
        />}
      <div className="editor-root content">
        <Editor
          blockRendererFn={mediaBlockRenderer}
          editorState={this.state.editorState}
          onChange={this.updateEditor}
          readOnly={this.props.readOnly}
          handleKeyCommand={this.handleKeyCommand}
        />
      </div>
    </div>);
  }
}

export default RichEditor;
