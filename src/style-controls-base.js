import React from 'react';

export function StyleButton(props) {
  return <span {...props}></span>;
}

export function StyleControls(props) {
  return (
    <div className="editor-controls">
      {props.buttons.map((type, i) =>
        <StyleButton
          key={i}
          className={`styleButton ${type.icon} ${props.isActive(type.style) ? 'active' : ''}`}
          onMouseDown={(event) => {
              event.preventDefault();
              props.onToggle(type.style);
            }}
        />
      )}
    </div>
  );
}

StyleControls.propTypes = {
  buttons: React.PropTypes.array.isRequired,
  isActive: React.PropTypes.func.isRequired,
  onToggle: React.PropTypes.func.isRequired,
};
