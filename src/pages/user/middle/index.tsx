import { useInitialState } from '@/hooks';
import { setAuthorization } from '@/storageManagement';
import { history } from '@/utils';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loading } from 'react-vant';

export default () => {
  const { refresh } = useInitialState();
  let [searchParams] = useSearchParams();
  const pagePath = searchParams.get('pagePath');
  const authorization = searchParams.get('authorization');
  useEffect(() => {
    if (authorization && pagePath) {
      setAuthorization(authorization);
      refresh().then(() => {
        history.replace(pagePath);
      });
    }
  }, [pagePath]);
  return (
    <div
      className="flex justify-center items-center flex-col"
      style={{
        height: '100vh',
      }}
    >
      <Loading type="ball" />
    </div>
  );
};
