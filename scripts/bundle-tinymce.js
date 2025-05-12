const fs = require('fs-extra');
const path = require('path');

// 定义输入和输出目录
const inputDir = path.join(__dirname, '../tinymce');
const outputDir = path.join(__dirname, '../dist/tinymce');

// 确保输出目录存在
fs.ensureDirSync(outputDir);

// 复制tinymce目录下的所有文件到输出目录
fs.copySync(inputDir, outputDir);

console.log('TinyMCE资源打包完成！');