import React from 'react';
import { Card, Button } from 'antd';
import './index.css';

function Index(props) {
  return (
    <Card title="404页面" className="notFound p-center">
      <div className="content">
        <span style={{ color: '#999' }}>页面走丢了</span>
        <Button type="primary" onClick={() => props.history.goBack()}>
          返回
        </Button>
      </div>
    </Card>
  );
}

export default Index;
