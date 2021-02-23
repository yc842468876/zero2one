import React from 'react';
// 引入编辑器组件
import BraftEditor from 'braft-editor';
// 引入编辑器样式
import 'braft-editor/dist/index.css';

export const createEditorState = (htmlContent) =>
  BraftEditor.createEditorState(htmlContent);

function Index(props) {
  return (
    <div style={{ border: '1px solid #ddd' }}>
      <BraftEditor value={props.value} onChange={props.onChange} />
    </div>
  );
}

export default Index;
