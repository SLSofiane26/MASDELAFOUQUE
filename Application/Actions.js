import AsyncStorage from '@react-native-async-storage/async-storage';

export let French = data => async (dispatch, getState) => {
  dispatch({type: 'LG', payload: {data: data}});
};

export let English = data => async (dispatch, getState) => {
  dispatch({type: 'LG', payload: {data: data}});
};

export let Auto = () => async (dispatch, getState) => {
  let f = await AsyncStorage.getItem('Rating');
  let d = JSON.parse(f);
  dispatch({type: 'ADDBIS', payload: {data: d}});
};

export let Delete = data => async (dispatch, getState) => {
  await AsyncStorage.setItem('Rating', JSON.stringify(data));
  dispatch({type: 'ADDBIS', payload: {data: data}});
};

export let Add = data => async (dispatch, getState) => {
  let e = await AsyncStorage.getItem('Rating');

  if (e !== null) {
    let d = JSON.parse(e).slice();
    let f = d.slice();
    f.push(data);
    await AsyncStorage.setItem('Rating', JSON.stringify(f));
    dispatch({type: 'ADD', payload: {data: f}});
  } else {
    let ff = [];
    ff.push(data);
    await AsyncStorage.setItem('Rating', JSON.stringify(ff));

    dispatch({type: 'ADD', payload: {data: ff}});
  }
};

export let AddNumber = data => async (dispatch, getState) => {
  let f = getState().AgeSex.slice();
  f.push({age: '18-30', sexe: 'H'});
  dispatch({type: 'ADDNUMBER', payload: {data: f}});
};

export let handleDelete = data => async (dispatch, getState) => {
  let f = getState().AgeSex.slice();
  f.splice(data, 1);
  dispatch({type: 'DELETENUMBER', payload: {data: f}});
};

export let handleAge = data => async (dispatch, getState) => {
  let d = [];
  for (let i = 0; i < getState().AddNumberBis.length; i++) {
    d.push({age: '18-30', sexe: 'H'});
  }

  dispatch({type: 'ADDAGE', payload: {data: d}});
};

export let handleM = data => async (dispatch, getState) => {
  let f = getState().AgeSex.slice();
  f[data].sexe = 'H';
  dispatch({type: 'MAN', payload: {data: f}});
};

export let handleW = data => async (dispatch, getState) => {
  let f = getState().AgeSex.slice();
  f[data].sexe = 'F';
  dispatch({type: 'WOM', payload: {data: f}});
};

export let handleSubmit = (data, datab) => async (dispatch, getState) => {
  let f = getState().questionnaireBis.slice();
  f.splice(data, 1);
  await AsyncStorage.setItem('Rating', JSON.stringify(f));
  dispatch({type: 'ADDBIS', payload: {data: f}});
};

export let handleAgeB = (data, datab) => async (dispatch, getState) => {
  let d = getState().AgeSex.slice();
  d[datab].age = data;
  dispatch({type: 'ADDBISBIS', payload: {data: d}});
};
