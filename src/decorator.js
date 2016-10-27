import React from 'react';
import { Entity, CompositeDecorator } from 'draft-js';

function findLinkEntities(contentBlock, callback) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        Entity.get(entityKey).getType() === 'Link'
      );
    },
    callback
  );
}

const Link = (props) => {
  const url = Entity.get(props.entityKey).getData().url;
  return (
    <a href={url}>
      {props.children}
    </a>
  );
}; 

const EditorDecorator = new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: Link,
  },
]);

export default EditorDecorator;
