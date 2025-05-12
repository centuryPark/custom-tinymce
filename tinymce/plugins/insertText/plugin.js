tinymce.PluginManager.add('insertText', function(editor, url) {
  let time = 0;
  let blueDivId = '';
  
  // Register custom quickbar
  editor.ui.registry.addContextToolbar('customQuickbar', {
    predicate: function (node) {
      return node.nodeName.toLowerCase() === 'div';
    },
    items: 'bold italic | insertText',
    position: 'node',
    scope: 'node'
  });

  editor.ui.registry.addButton('insertText', {
    text: 'Insert Text',
    onAction: function () {
      const timer = setInterval(() => {
        if (time === 0) {
          blueDivId = 'blue-div-' + Date.now();
          editor.insertContent(`<div id="${blueDivId}" style="background-color: blue;"><br></div>`);
          const blueDiv = editor.dom.get(blueDivId);
          if (blueDiv) {
            editor.selection.select(blueDiv);
            editor.selection.collapse(true);
          }
        } else if (1 < time && time < 5) {
          editor.insertContent(`<p style="color: white;">这是我的插件：insertText:${time} --</p>`);
        } else if (time > 5) {
          clearInterval(timer);
          const blueDiv = editor.dom.get(blueDivId);
          if (blueDiv) {
            editor.dom.insertAfter(editor.dom.create('p', {}, '这是插入在蓝色div后的内容'), blueDiv);
            // Open custom quickbar
            // editor.quickbars.show();
          }
          return;
        }
        time += 1;
      }, 3000);
    },
  });

  return {
    getMetadata: function () {
      return {
        name: 'Insert Text Plugin',
        url: 'https://example.com'
      };
    }
  };
});