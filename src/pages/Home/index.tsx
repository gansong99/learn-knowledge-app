import { PageContainer } from '@ant-design/pro-components';
import { Col, Row } from 'antd';
import Answer from './components/Answer';
import TopicList from './components/TopicList';
import styles from './index.less';

const HomePage: React.FC = () => {
  return (
    <PageContainer
      header={{
        title: '',
      }}
    >
      <Row className={styles.container}>
        <Col span={10}>
          <Answer />
        </Col>
        <Col span={14}>
          <TopicList />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default HomePage;
