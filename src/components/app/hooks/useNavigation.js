import { task } from 'nanostores';
import {
  isHome,
  isThanks,
} from '../stories/navigationStore';

const stateVariables = {
  home: isHome,
  thasks: isThanks,
};

export const useNavigation = (section) => {
  Object.keys(stateVariables).forEach((s) => {
    stateVariables[s].set(s === section);
  });
};
