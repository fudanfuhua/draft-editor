# draft-editor

This is an implementation of draft-js which includes some controls for toggling a lot of the rich text features that are in draft-js. It's not much more than a combination of a lot of the examples that are around for draft-js. However, it has:

- Buttons for inline and block
- hyperlinks, images, audio, and video (with a modal popup interface)
- keyboard shortcuts

## installation
```sh
npm install --save rich-draftjs-editor
```

## usage
```jsx
import RichEditor from 'rich-draftjs-editor';

<RichEditor readOnly={true} />
```

The only property is the boolean `readOnly`. If this is `false` (and it is by default), it will render the controls (above) the editor.

Currently, the controls are all from bootstrap's glyphicons. This is a limitation that should be changed in the future, but at the moment, it's necessary to include bootstrap's css seperately.

There's also some css included in this project which will improve/give some default styles for the classes. Right now, the css classes are also not module prefixed/very unique (which is another issue). This file is at `src/style-controls.css`.

Another possible extension is composing the current components with more properties (for example, making the buttons in the `style-controls` or the controls component as default params so they could be overriden).

These CSS limitations kind of limit this, but it should serve as a good example of some of the features in draft-js if nothing else.
