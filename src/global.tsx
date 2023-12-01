import { router } from '@config/index';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Loading } from 'react-vant';
import './global.less';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider
    router={router}
    fallbackElement={
      <div
        className="flex justify-center items-center flex-col"
        style={{
          height: '100vh',
        }}
      >
        <Loading type="ball" />
      </div>
    }
  />,
);
