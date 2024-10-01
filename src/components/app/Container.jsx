import { useStore } from '@nanostores/react';
import {
  isHome,
  isThanks,
} from './stories/navigationStore.js';
import { Home } from '@app/home/Home.jsx';
import { Thanks } from '@app/thanks/Thanks.jsx';

export const Container = () => {
  const $isHome = useStore(isHome);
  const $isThanks = useStore(isThanks);

  return (
    <>
      {$isHome ? <Home /> : null}
      {$isThanks ? <Thanks /> : null}
    </>
  );
};
