import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { dataListLoaded } from '../../store/actions/productList';
import { Button, Card, Divider, message, Table, Popconfirm } from 'antd';

function List(props) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    props.dispatch(dataListLoaded());
  }, []);

  const columns = [
    {
      title: '序号',
      key: 'id',
      width: 80,
      render: (txt, record, index) => index + 1,
    },
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '价格',
      dataIndex: 'price',
    },
    {
      title: '操作',
      key: 'action',
      width: 160,
      render: (txt, record) => {
        return (
          <div>
            <Button
              type="primary"
              size="small"
              onClick={() => {
                props.history.push(`/admin/products/edit/${record.id}`);
              }}
            >
              编辑
            </Button>
            <Divider type="vertical" />
            <Popconfirm
              title="确认删除此项？"
              onConfirm={() => {
                message.info('确认删除');
              }}
              onCancel={() => {
                message.info('取消删除');
              }}
            >
              <Button type="danger" size="small">
                删除
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  return (
    <Card
      title="列表"
      extra={
        <Button
          type="primary"
          size="small"
          onClick={() => props.history.push('/admin/products/edit')}
        >
          新增
        </Button>
      }
    >
      <Table
        rowKey="id"
        columns={columns}
        dataSource={props.productList.data}
        bordered
        pagination={{
          current: page,
          pageSize: 10,
          total: props.productList.data.length,
          onChange: (page, pageSize) => {
            message.info(`page_${page}`);
            setPage(page);
          },
        }}
      />
    </Card>
  );
}

export default connect((state) => ({
  productList: state.productList,
}))(List);
