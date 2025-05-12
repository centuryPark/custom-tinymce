import './tinymce-dist/tinymce.min.js';
import './tinymce/plugins/insertText/plugin.js';
import './styles.css';

document.addEventListener('DOMContentLoaded', function() {
  tinymce.init({
    selector: '#editor',
    theme: 'silver',
    branding: false,
    statusbar: false,
    block_formats: 'Paragraph=p;Header 1=h1;Header 2=h2;Header 3=h3',
    quickbars_selection_toolbar: 'bold italic underline | numlist bullist | link preview',
    menubar: 'my1',
    menu: {
        my1: {title: '我的菜单', items: 'copy paste' }
    },
    base_url: 'http://localhost:9000/tinymce-dist/',
    plugins: 'link preview insertText | bold underline | numlist bullist | link quickbars',
    toolbar: 'undo redo | link preview | insertText | bold underline | numlist bullist'
  });

  // Add a button to get editor content
  const getContentBtn = document.createElement('button');
  getContentBtn.textContent = 'Get Editor Content';
  getContentBtn.addEventListener('click', function() {
    const content = tinymce.activeEditor.getContent();
    console.log(content);
  });
  document.body.appendChild(getContentBtn);
});