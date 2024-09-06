export const Types = {
  SET_CURRENT_EXCERCISE: 'SET_CURRENT_EXCERCISE',
	SET_VALOR: 'SET_VALOR',
	SET_REPEAT: 'SET_REPEAT',
	RESET: 'RESET'
};

const INITIAL_STATE = {
  excersices: [
    {
      id: 1,
      title: ' Puxador Fechado (Supino)',
    },
    {
      id: 2,
      title: ' Puxador Aberto (Pronado)',
    },
    {
      id: 3,
      title: ' Remada Baixa',
    },
    {
      id: 4,
      title: ' Extensão do cotovelo esquerdo',
    },
		{
			id: 5,
			title: 'Flexão de joelho direito'
		}
  ],
  current_exercise: null,
	values: [],
	times: [],
	forceMax: 30,
	maxForce: 30,
	repeat: 0
};

export default function excersices(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Types.SET_CURRENT_EXCERCISE:
      return {
        ...state,
        current_exercise: action.payload,
      };
			case Types.SET_VALOR:
				const valueForce = action.payload.valor;

				return {
					...state,
					values: [...state.values, action.payload.valor],
					times: [...state.times, action.payload.time],
					forceMax: valueForce > state.forceMax ? state.forceMax + 10 : state.forceMax,
					maxForce: state.forceMax
				}
				case Types.SET_REPEAT:
					return {
						...state,
						repeat: state.repeat + 1
					}
					case Types.RESET:
						return {
							...state,
							values: [],
							times: [],
							forceMax: 30,
							maxForce: 30,
							repeat: 0
						}

    default:
      return state;
  }
}

export const ExcerciseActions = {
  set_current_excercise: (exercise: any) => ({
    type: Types.SET_CURRENT_EXCERCISE,
    payload: exercise,
  }),
	set_valor: (valor: any, time: any) => ({
		type: Types.SET_VALOR,
		payload: { valor, time },
	}),
	set_repeat: () => ({
		type: Types.SET_REPEAT
	}),
	reset: () => ({
		type: Types.RESET
	}),
};
