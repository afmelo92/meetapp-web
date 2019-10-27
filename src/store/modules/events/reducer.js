import produce from 'immer';

const INITIAL_STATE = {
  event: null,
};

export default function event(state = INITIAL_STATE, action) {
  // eslint-disable-next-line no-unused-vars
  return produce(state, draft => {
    switch (action.type) {
      default:
    }
  });
}
