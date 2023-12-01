import { GlobalContext } from '@/layout';
import { useContext } from 'react';

export type returnUseInitialState = ReturnType<typeof useInitialState>;
export default function useInitialState() {
  const { initialState, setInitialState, refresh } = useContext(GlobalContext);
  return { initialState, setInitialState, refresh };
}
