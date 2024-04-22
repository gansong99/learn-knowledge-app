import { CameraOutlined } from '@ant-design/icons';
import { Input, Row } from 'antd';
import cn from 'classnames';
import React from 'react';
import styles from '../index.less';

const { Search, TextArea } = Input;

const suffix = (
  <CameraOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const onSearch = () => {
  console.log('搜索');
};

const Answer: React.FC = () => {
  return (
    <div className={styles.containerItem}>
      <Row>
        <Search
          placeholder="请输入"
          enterButton="搜索题目"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
        />
      </Row>
      <Row>
        <p className={styles.title}>
          <span className={cn(styles.topicTitle)}>题目：</span>
          解释原型继承如何工作?
        </p>
      </Row>
      <Row>
        <TextArea rows={4} placeholder="在这里输入答案" maxLength={8} />
      </Row>
    </div>
  );
};

export default Answer;
