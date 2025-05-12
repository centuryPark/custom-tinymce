import './tinymce-dist/tinymce.min.js';
import './tinymce/plugins/insertText/plugin.js';
import './styles.css';

document.addEventListener('DOMContentLoaded', function() {
  tinymce.init({
    selector: '#editor',
    theme: 'silver',
    base_url: 'http://localhost:9000/tinymce-dist/',
    plugins: 'link insertText',
    toolbar: 'undo redo | link | insertText'
  });
});