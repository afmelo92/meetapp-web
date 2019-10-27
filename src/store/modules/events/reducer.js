import produce from 'immer';

const INITIAL_STATE = {
  event: null,
};

export default function event(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      default:
    }
  });
}
