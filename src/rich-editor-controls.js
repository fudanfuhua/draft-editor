import React from 'react';
import BlockStyleControls from './style-controls-block';
import InlineStyleControls from './style-controls-inline';
import ModalStyleControls from './style-controls-modal';

export default function StyleControls(props) {
  return (<div className="controls-root">
    <InlineStyleControls {...props} />
    <BlockStyleControls {...props} />
    <ModalStyleControls {...props} />
  </div>);
}
