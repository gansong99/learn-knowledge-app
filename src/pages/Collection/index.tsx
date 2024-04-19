import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';

const CollectionPage: React.FC = () => {
  const access = useAccess();
  return (
    <PageContainer
      ghost
      header={{
        title: '我的收藏',
      }}
    >
      <Access accessible={access.canSeeAdmin}></Access>
    </PageContainer>
  );
};

export default CollectionPage;
