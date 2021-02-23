import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, List, Typography } from 'antd';
import { asyncReadAll } from '../../store/actions/notice';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

function Index(props) {
  return (
    <Card
      title="消息通知"
      extra={
        <Button
          size="small"
          disabled={props.notice.isAllRead}
          onClick={() => {
            props.dispatch(asyncReadAll());
          }}
        >
          全部已读
        </Button>
      }
    >
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </Card>
  );
}

export default connect((state) => ({
  notice: state.notice,
}))(Index);
