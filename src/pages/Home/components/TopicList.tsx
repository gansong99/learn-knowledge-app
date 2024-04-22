import React from 'react';
import styles from '../index.less';

import type { TableColumnsType, TableProps } from 'antd';
import { Checkbox, Table, Tag } from 'antd';

type TagsType = 'web' | 'java';

const tagsLabels: { [key in TagsType]: string } = {
  web: '前端',
  java: '后端',
};

const tagsColor: { [key in TagsType]: string } = {
  web: 'green',
  java: 'volcano',
};

interface DataType {
  key: React.Key;
  name: string;
  tags: TagsType[];
  address: boolean;
}

const columns: TableColumnsType<DataType> = [
  {
    title: '题目',
    dataIndex: 'name',
    width: '30%',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          const color = tagsColor[tag];
          return (
            <Tag color={color} key={tag}>
              {tagsLabels[tag]}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: '收藏',
    key: 'address',
    dataIndex: 'address',
    render: () => <Checkbox></Checkbox>,
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: '测试题1',
    tags: ['web'],
    address: false,
  },
  {
    key: '2',
    name: '测试题2',
    tags: ['web'],
    address: false,
  },
  {
    key: '3',
    name: '测试题3',
    tags: ['java'],
    address: true,
  },
  {
    key: '4',
    name: '测试题4',
    tags: ['web', 'java'],
    address: false,
  },
];

const onChange: TableProps<DataType>['onChange'] = (
  pagination,
  filters,
  sorter,
  extra,
) => {
  console.log('params', pagination, filters, sorter, extra);
};

const TopicList: React.FC = () => {
  return (
    <div className={styles.containerItem}>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

export default TopicList;
