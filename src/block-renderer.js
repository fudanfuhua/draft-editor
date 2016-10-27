import React from 'react';
import { Entity } from 'draft-js';

const Media = (props) => {
  const entity = Entity.get(props.block.getEntityAt(0));
  const src = entity.getData().src;
  switch(entity.getType()) {
    case 'Audio':
      return <audio controls src={src} />;
    case 'Image':
      return <img src={src} role="presentation" />;
    case 'Video':
      return <video controls src={src} />;
    default:
      return null;
  }
};

export default function mediaBlockRenderer(block) {
  if (block.getType() === 'atomic') {
    return {
      component: Media,
      editable: false,
    };
  }

  return null;
}
