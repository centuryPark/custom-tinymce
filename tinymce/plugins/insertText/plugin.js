tinymce.PluginManager.add('insertText', function(editor, url) {
  editor.ui.registry.addButton('insertText', {
    text: 'Insert Text',
    classes: 'gradient-button',
    onAction: function () {
      editor.insertContent('这是我的插件：insertText');
    }
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