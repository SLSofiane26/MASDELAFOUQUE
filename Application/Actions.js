import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

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
  f.push({age: '18-30 ans', sexe: 'H'});

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
    d.push({age: '18-30 ans', sexe: 'H'});
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
  let questionnaire = {};
  questionnaire.field_note_extra_activites = datab.activite;
  questionnaire.field_note_chambres = datab.qualite;
  questionnaire.field_note_repas = datab.repas;
  questionnaire.field_note_spa = datab.spa;
  questionnaire.field_note_sejour = datab.sejour;

  questionnaire.field_ca_total = null;
  questionnaire.field_chambres = datab.NomChambre;
  questionnaire.field_commentaire = datab.commentaire;
  questionnaire.field_duree_sejour = null;
  questionnaire.field_entreprise = datab.nom;
  questionnaire.field_nombre_personnes = datab.age.length;
  questionnaire.field_pays_residence = null;
  questionnaire.field_raison_voyage =
    datab.loisir === 'non'
      ? datab.entreprise === 'oui'
        ? datab.seminaire === 'oui'
          ? 'SÉMINAIRE'
          : 'SHOOTING'
        : 'NULL'
      : 'LOISIR';
  questionnaire.field_tranche_age_sexe = datab.age;

  await axios({
    method: 'POST',
    url: 'https://satisfaction.masdelafouque.com/api/v1/content/send_registration',
    data: questionnaire,
  })
    .then(res => console.log(res))
    .catch(err => console.error(err));

  //let f = getState().questionnaireBis.slice();
  //f.splice(data, 1);
  //await AsyncStorage.setItem('Rating', JSON.stringify(f));
  //dispatch({type: 'ADDBIS', payload: {data: f}});
};

export let handleAgeB = (data, datab) => async (dispatch, getState) => {
  let d = getState().AgeSex.slice();
  d[datab].age = data;
  dispatch({type: 'ADDBISBIS', payload: {data: d}});
};
