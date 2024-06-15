/**
 *
 * Asynchronously loads the component for Addlist
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Addlist = lazyLoad(
  () => import('./index'),
  module => module.Addlist,
);
