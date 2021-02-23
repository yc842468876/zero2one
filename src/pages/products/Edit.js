import React, { useState } from 'react';
import { Button, Card, Form, Input } from 'antd';
import Editor, { createEditorState } from '../../components/Editor';
import { UpAvatar } from '../../components/Uploads';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 12 },
};

function Edit(props) {
  const { match } = props;
  const isAdd = !!match.params.id;

  const [imageUrl, setImageUrl] = useState('');
  const [editorState, setEditorState] = useState(createEditorState(null));

  const priceValidator = (rule, value) => {
    if (value * 1 > 100) {
      return Promise.reject('价格不能大于100');
    } else {
      return Promise.resolve();
    }
  };

  const onFinish = (values) => {
    console.log({ ...values, imageUrl, editorState: editorState.toHTML() });
    return;
    // 调用后端接口
    // props.history.goBack();
  };

  return (
    <Card
      title={isAdd ? '编辑' : '新增'}
      extra={
        <Button size="small" onClick={() => props.history.goBack()}>
          返回
        </Button>
      }
    >
      <Form {...layout} name="product" initialValues={{}} onFinish={onFinish}>
        <Form.Item
          label="名称"
          name="name"
          rules={[{ required: true, message: '请输入名称!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="价格"
          name="price"
          rules={[
            { required: true, message: '请输入价格!' },
            {
              validator: priceValidator,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="主图" required>
          <UpAvatar
            imageUrl={imageUrl}
            onChange={(v) => setImageUrl(imageUrl)}
          />
        </Form.Item>

        <Form.Item label="详情介绍">
          <Editor
            value={editorState}
            onChange={(editorState) => setEditorState(editorState)}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default Edit;
