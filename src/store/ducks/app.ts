export const Types = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',

  OPEN_SELECT_EXERCISE: 'OPEN_SELECT_EXERCISE',
  CLOSE_SELECT_EXERCISE: 'CLOSE_SELECT_EXERCISE',
};

const INITIAL_STATE = {
  visible: false,
  select_exercise_visible: true,
};

export default function app(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Types.OPEN_MODAL:
      return {
        ...state,
        visible: true,
      };
    case Types.CLOSE_MODAL:
      return {
        ...state,
        visible: false,
      };
    case Types.OPEN_SELECT_EXERCISE:
      return {
        ...state,
        select_exercise_visible: true,
      };
    case Types.CLOSE_SELECT_EXERCISE:
      return {
        ...state,
        select_exercise_visible: false,
      };
    default:
      return state;
  }
}

export const AppActions = {
  openModal: () => ({
    type: Types.OPEN_MODAL,
  }),
  closeModal: () => ({
    type: Types.CLOSE_MODAL,
  }),
  openSelectExercise: () => ({
    type: Types.OPEN_SELECT_EXERCISE,
  }),
  closeSelectExercise: () => ({
    type: Types.CLOSE_SELECT_EXERCISE,
  }),
};
