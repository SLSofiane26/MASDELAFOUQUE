let InitialState = {
  lang: true,
  questionnaire: [],
  questionnaireBis: [],
  AddNumber: ['1', '2'],
  AddNumberBis: ['1', '2'],
  AgeSex: [],
  AgeSexB: [],
};
let Reducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'LG':
      return Object.assign({}, state, {lang: action.payload.data});
    case 'ADD':
      return Object.assign({}, state, {
        questionnaire: action.payload.data,
        questionnaireBis: action.payload.data,
      });
    case 'ADDBIS':
      return Object.assign({}, state, {
        questionnaire: action.payload.data,
        questionnaireBis: action.payload.data,
      });
    case 'ADDNUMBER':
      return Object.assign({}, state, {
        AgeSex: action.payload.data,
        AgeSexB: action.payload.data,
      });
    case 'DELETENUMBER':
      return Object.assign({}, state, {
        AgeSex: action.payload.data,
        AgeSexB: action.payload.data,
      });
    case 'ADDAGE':
      return Object.assign({}, state, {
        AgeSex: action.payload.data,
        AgeSexB: action.payload.data,
      });
    case 'MAN':
      return Object.assign({}, state, {
        AgeSex: action.payload.data,
        AgeSexB: action.payload.data,
      });
    case 'WOM':
      return Object.assign({}, state, {
        AgeSex: action.payload.data,
        AgeSexB: action.payload.data,
      });
    case 'ADDBISBIS':
      return Object.assign({}, state, {
        AgeSex: action.payload.data,
        AgeSexB: action.payload.data,
      });
    default:
      break;
  }
  return state;
};

export default Reducer;
