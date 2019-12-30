import actionsTypes from '../actionsTypes/bootstrap';

import * as Types from '../types';

const verifyUser = (history: any): Types.TActionCreatorType => {
  return {
    type: actionsTypes.VERIFY_USER,
    payload: {
      history
    }
  }
}

export default {
  verifyUser,
};
