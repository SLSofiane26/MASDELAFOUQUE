import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import * as ACTIONS from './Actions';
import SelectDropdown from 'react-native-select-dropdown';
import {Svg, Line} from 'react-native-svg';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

export class StepTwo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loisir: false,
      company: false,
      shooting: false,
      seminaire: false,
      entreprise: null,
      couple: false,
      famille: false,
      sejour: 0,
      qualite: 0,
      repas: 0,
      spa: 0,
      activite: 0,
      date: new Date().toLocaleDateString('fr'),
      heure: null,
      raison: null,
      profil: null,
      AgeSexe: [],
      Number: null,
      commentaire: null,
      orientation: null,
      countries: null,
      nameRoom: null,
      nomRoom: null,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleModifie = this.handleModifie.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleModifieAge = this.handleModifieAge.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  w = Dimensions.get('window').width;
  h = Dimensions.get('window').height;

  fetchData = async () => {
    await axios({
      method: 'GET',
      url: 'https://satisfaction.masdelafouque.com/api/v1/content/get_stuff',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => {
      let d = [];
      res.data.room_names.map((items, index) => {
        d.push(items.name);
      });
      this.setState({
        countries: res.data.bracket,
        nameRoom: d,
      });
    });
  };

  componentDidMount = () => {
    this.fetchData();

    this.props.handleAge();

    if (this.w < this.h) {
      this.setState(prevState => ({
        ...this.state,
        orientation: 'PORTRAIT',
      }));
    } else {
      this.setState(prevState => ({
        ...this.state,
        orientation: 'LANDSCAPE',
      }));
    }

    console.log('w', this.w);
    console.log('h', this.h);

    let d = this.props.route.params.data;

    this.setState({
      ...this.state,
      sejour: d.sejour,
      qualite: d.qualite,
      repas: d.repas,
      spa: d.spa,
      activite: d.activite,
      date: d.date,
      heure: d.heure,
      commentaire: d.commentaire,
      Number: this.props.AddNumber,
    });
  };

  componentDidUpdate = (prevState, prevProps) => {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      if (width < height) {
        this.setState(prevState => ({
          ...this.state,
          orientation: 'PORTRAIT',
        }));
      } else {
        this.setState(prevState => ({
          ...this.state,
          orientation: 'LANDSCAPE',
        }));
      }
    });
  };

  handleAdd = () => {
    this.props.Add(this.props.AddNumber.length + 1);
  };

  handleModifie = data => {
    this.props.Modifie(data);
  };

  handleModifieBis = data => {
    this.props.ModifiB(data);
  };

  handleDelete = data => {
    this.props.handleDelete(data);
  };

  handleModifieAge = (data, datab) => {
    this.props.handleChangeS(data, datab);
  };

  handleValidate = () => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let submitTime = `${h}h${m}min${s}s`;
    let questionnaire = {};

    questionnaire.sejour = this.state.sejour;
    questionnaire.qualite = this.state.qualite;
    questionnaire.repas = this.state.repas;
    questionnaire.spa = this.state.spa;
    questionnaire.activite = this.state.activite;
    questionnaire.commentaire = this.state.commentaire;
    questionnaire.date = this.props.route.params.data.heure;
    questionnaire.loisir = this.state.loisir ? 'oui' : 'non';
    questionnaire.entreprise = this.state.company ? 'oui' : 'non';
    questionnaire.seminaire = this.state.seminaire ? 'oui' : 'non';
    questionnaire.shooting = this.state.shooting ? 'oui' : 'non';
    questionnaire.nom = this.state.entreprise;
    questionnaire.famille = this.state.famille;
    questionnaire.couple = this.state.couple;
    questionnaire.NomChambre = this.state.nomRoom;

    questionnaire.datevalidation = submitTime;
    questionnaire.age = this.props.Age;

    this.props.handleSubmitBis(this.props.route.params.index, questionnaire);
    //this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <ScrollView style={{backgroundColor: '#EEE7DC'}}>
        <View
          style={{
            ...Style.container,
            marginTop:
              this.state.orientation === 'PORTRAIT'
                ? Platform.OS === 'android'
                  ? this.w === 768
                    ? '4%'
                    : Dimensions.get('window').width === 600
                    ? '10%'
                    : '13%'
                  : '13%'
                : '13%',
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              source={require('../Image/Logo.png')}
              style={{
                width:
                  this.state.orientation === 'PORTRAIT'
                    ? Platform.OS === 'ios'
                      ? 300
                      : this.w === 768
                      ? 210
                      : this.w > 600 && this.w < 601
                      ? 150
                      : Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                      ? 200
                      : 300
                    : 300,
                height:
                  this.state.orientation === 'PORTRAIT'
                    ? Platform.OS === 'ios'
                      ? 220
                      : this.w === 768
                      ? 150
                      : this.w > 600 && this.w < 601
                      ? 100
                      : Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                      ? 150
                      : 220
                    : 220,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              height:
                Dimensions.get('window').width > 1066 &&
                Dimensions.get('window').width < 1067
                  ? 80
                  : 50,
              top:
                Dimensions.get('window').width > 1066 &&
                Dimensions.get('window').width < 1067
                  ? 40
                  : Dimensions.get('window').width === 800
                  ? 10
                  : 0,
            }}>
            {this.state.nameRoom && (
              <SelectDropdown
                rowStyle={{backgroundColor: 'white', color: 'white'}}
                rowTextStyle={{
                  color: '#A99462',
                  fontFamily: 'advent-Bd2',
                  fontSize:
                    Dimensions.get('window').width > 533 &&
                    Dimensions.get('window').width < 534
                      ? 14
                      : Dimensions.get('window').width > 1066 &&
                        Dimensions.get('window').width < 1067
                      ? 20
                      : Dimensions.get('window').width === 1168
                      ? 24
                      : 16,
                }}
                defaultButtonText={
                  this.props.lg ? 'Nom de la chambre' : 'Room name'
                }
                buttonTextStyle={{
                  color: '#A99462',
                  fontFamily: 'advent-Bd2',
                  fontSize:
                    Dimensions.get('window').width > 533 &&
                    Dimensions.get('window').width < 534
                      ? 14
                      : Dimensions.get('window').width > 1066 &&
                        Dimensions.get('window').width < 1067
                      ? 20
                      : Dimensions.get('window').width === 1168
                      ? 24
                      : Dimensions.get('window').width === 800
                      ? 20
                      : 16,
                }}
                buttonStyle={{
                  backgroundColor: 'white',
                  width: '40%',
                  borderWidth: 1,
                  borderColor: '#A99462',
                  height: '100%',
                }}
                data={this.state.nameRoom}
                onSelect={(selectedItem, id) => {
                  this.setState(prevState => ({
                    ...this.state,
                    nomRoom: selectedItem,
                  }));
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            )}
          </View>
          <View
            style={{
              marginTop:
                Dimensions.get('window').width > 1066 &&
                Dimensions.get('window').width < 1067
                  ? '10%'
                  : Dimensions.get('window').height === 1104
                  ? '10%'
                  : '5%',
              width: '100%',
            }}>
            {this.props.lg ? (
              <Text style={Style.text}>RAISON DU VOYAGE :</Text>
            ) : (
              <Text style={Style.text}>REASON FOR TRAVEL :</Text>
            )}

            <View
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  ...Style.ButtonBis,
                  backgroundColor: this.state.loisir ? '#A99462' : 'white',
                }}
                onPress={() =>
                  this.setState(prevState => ({
                    ...this.state,
                    loisir: !this.state.loisir,
                    company: false,
                    shooting: false,
                    seminaire: false,
                  }))
                }>
                <Text
                  style={{
                    ...Style.text,
                    color: this.state.loisir ? 'white' : '#A99462',
                  }}>
                  {this.props.lg ? 'LOISIR' : 'LEISURE'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...Style.ButtonBis,
                  backgroundColor: this.state.company ? '#A99462' : 'white',
                }}
                onPress={() =>
                  this.setState(prevState => ({
                    ...this.state,
                    company: !prevState.company,
                    shooting: false,
                    seminaire: false,
                    loisir: false,
                  }))
                }>
                <Text
                  style={{
                    ...Style.text,
                    color: this.state.company ? 'white' : '#A99462',
                  }}>
                  {this.props.lg ? 'BUSINESS' : 'BUSINESS'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {this.state.company && (
            <View
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  ...Style.ButtonBis,
                  backgroundColor: this.state.shooting ? '#A99462' : 'white',
                }}
                onPress={() =>
                  this.setState(prevState => ({
                    ...this.state,
                    shooting: !prevState.shooting,
                    seminaire: false,
                  }))
                }>
                <Text
                  style={{
                    ...Style.text,
                    color: this.state.shooting ? 'white' : '#A99462',
                  }}>
                  SHOOTING
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...Style.ButtonBis,
                  backgroundColor: this.state.seminaire ? '#A99462' : 'white',
                }}
                onPress={() =>
                  this.setState(prevState => ({
                    ...this.state,
                    seminaire: !prevState.seminaire,
                    shooting: false,
                  }))
                }>
                <Text
                  style={{
                    ...Style.text,
                    color: this.state.seminaire ? 'white' : '#A99462',
                  }}>
                  {this.props.lg ? 'SÉMINAIRE' : 'SÉMINAR'}
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {this.state.seminaire && (
            <View
              style={{
                width: '100%',
                alignContent: 'flex-end',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                marginRight: '4%',
              }}>
              <View style={{marginRight: '22%'}}>
                <Svg height="10" width="20">
                  <Line
                    x1="0"
                    y1="0"
                    x2="100"
                    y2="100"
                    transform="rotate(45, 5, 5)"
                    stroke="#A99462"
                    strokeWidth="2"
                  />
                </Svg>
              </View>
              <TextInput
                style={{
                  ...Style.ButtonBis,
                  textAlign: 'center',
                  fontSize:
                    Dimensions.get('window').height > 1650 &&
                    Dimensions.get('window').height < 1651
                      ? 19
                      : 15,
                  fontFamily: 'advent-Bd2',
                  position: 'relative',
                  marginTop: 0,
                }}
                onChangeText={val =>
                  this.setState(prevState => ({
                    ...this.state,
                    entreprise: val,
                  }))
                }
                placeholder={
                  this.props.lg ? "NOM DE L'ENTREPRISE" : 'COMPANY NAME'
                }
                placeholderTextColor="#A99462"
              />
            </View>
          )}
          <View
            style={{
              marginTop: '5%',
              width: '100%',
            }}>
            <Text style={Style.text}>PROFIL :</Text>
            <View
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  ...Style.ButtonBis,
                  backgroundColor: this.state.couple ? '#A99462' : 'white',
                }}
                onPress={() =>
                  this.setState({
                    ...this.state,
                    couple: !this.state.couple,
                    famille: false,
                  })
                }>
                <Text
                  style={{
                    ...Style.text,
                    color: this.state.couple ? 'white' : '#A99462',
                  }}>
                  COUPLE
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...Style.ButtonBis,
                  backgroundColor: this.state.famille ? '#A99462' : 'white',
                }}
                onPress={() =>
                  this.setState({
                    ...this.state,
                    couple: false,
                    famille: !this.state.famille,
                  })
                }>
                <Text
                  style={{
                    ...Style.text,
                    color: this.state.famille ? 'white' : '#A99462',
                  }}>
                  {this.props.lg ? 'FAMILLE' : 'FAMILY'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              marginTop: '5%',
              width: '100%',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{flexBasis: '80%'}}>
                {this.props.lg ? (
                  <Text
                    style={{
                      ...Style.text,
                      textAlign: 'right',
                    }}>
                    TRANCHES D'ÂGE(S) ET SEXE(S) :
                  </Text>
                ) : (
                  <Text style={Style.text}>AGE GROUP AND SEX :</Text>
                )}
              </View>
              <View
                style={{
                  flexBasis:
                    this.state.orientation === 'PORTRAIT'
                      ? Platform.OS === 'android'
                        ? this.w === 768
                          ? '56%'
                          : '57%'
                        : '56%'
                      : '56%',
                }}>
                <TouchableOpacity
                  style={{
                    ...Style.ButtonBBBis,
                    marginLeft:
                      this.w === 768
                        ? Dimensions.get('window').width === 768
                          ? '17%'
                          : '12%'
                        : Dimensions.get('window').width === 600
                        ? Dimensions.get('window').height === 912
                          ? '16%'
                          : '20%'
                        : Dimensions.get('window').width === 540
                        ? Dimensions.get('window').height === 976
                          ? '13.5%'
                          : '10%'
                        : Dimensions.get('window').width === 800
                        ? '20%'
                        : Dimensions.get('window').width > 1066 &&
                          Dimensions.get('window').width < 1067
                        ? Dimensions.get('window').width > 1066 &&
                          Dimensions.get('window').width < 1067
                          ? '20%'
                          : '12.5%'
                        : Dimensions.get('window').width === 1024
                        ? Dimensions.get('window').height > 1309 &&
                          Dimensions.get('window').height < 1310
                          ? '15.5%'
                          : '12%'
                        : Dimensions.get('window').height > 913 &&
                          Dimensions.get('window').height < 914
                        ? '14%'
                        : Dimensions.get('window').height === 1232
                        ? '20%'
                        : Dimensions.get('window').height === 1224
                        ? '17%'
                        : Dimensions.get('window').width > 533 &&
                          Dimensions.get('window').width < 534
                        ? '15.5%'
                        : Dimensions.get('window').width === 1168
                        ? '15.5%'
                        : '12%',
                  }}
                  onPress={() => this.handleAdd()}>
                  {this.props.lg ? (
                    <Text style={Style.text}>AJOUTER</Text>
                  ) : (
                    <Text style={Style.text}>ADD</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>

            {this.props.Age.map((items, index) => {
              return (
                <View
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignContent: 'center',
                    marginTop: '3%',
                    alignItems: 'center',
                  }}>
                  {this.state.countries && (
                    <SelectDropdown
                      rowStyle={{backgroundColor: 'white', color: 'white'}}
                      rowTextStyle={{
                        color: '#A99462',
                        fontFamily: 'advent-Bd2',
                        fontSize:
                          Dimensions.get('window').width > 533 &&
                          Dimensions.get('window').width < 534
                            ? 14
                            : Dimensions.get('window').width > 1066 &&
                              Dimensions.get('window').width < 1067
                            ? 20
                            : Dimensions.get('window').width === 1168
                            ? 24
                            : 16,
                      }}
                      defaultButtonText={items.age}
                      buttonTextStyle={{
                        color: '#A99462',
                        fontFamily: 'advent-Bd2',
                        fontSize:
                          Dimensions.get('window').width > 533 &&
                          Dimensions.get('window').width < 534
                            ? 14
                            : Dimensions.get('window').width > 1066 &&
                              Dimensions.get('window').width < 1067
                            ? 20
                            : Dimensions.get('window').width === 1168
                            ? 24
                            : 16,
                      }}
                      buttonStyle={{
                        backgroundColor: 'white',
                        width: '30%',
                        borderWidth: 1,
                        borderColor: '#A99462',
                        height: '100%',
                      }}
                      data={this.state.countries}
                      onSelect={(selectedItem, id) => {
                        this.handleModifieAge(selectedItem, index);
                      }}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem;
                      }}
                      rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item;
                      }}
                    />
                  )}
                  <Icon
                    name="caretdown"
                    size={17}
                    color="#A99462"
                    style={{
                      position: 'absolute',
                      marginLeft:
                        Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                          ? '24%'
                          : '26%',
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => this.handleModifie(index)}
                    style={{
                      ...Style.ButtonBBBBis,
                      backgroundColor: items.sexe === 'H' ? '#A99462' : 'white',
                    }}>
                    <Text
                      style={{
                        ...Style.text,
                        color: items.sexe === 'H' ? 'white' : '#A99462',
                      }}>
                      {this.props.lg ? 'H' : 'M'}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.handleModifieBis(index)}
                    style={{
                      ...Style.ButtonBBBBis,
                      backgroundColor: items.sexe === 'F' ? '#A99462' : 'white',
                    }}>
                    <Text
                      style={{
                        ...Style.text,
                        color: items.sexe === 'F' ? 'white' : '#A99462',
                      }}>
                      {this.props.lg ? 'F' : 'W'}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.handleDelete(index)}
                    style={{
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon
                      name="close"
                      style={{fontSize: 20, color: 'rgb(154,35,43)'}}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          <View
            style={{
              marginTop:
                Dimensions.get('window').height === 912 &&
                Dimensions.get('window').width === 600
                  ? '7%'
                  : Dimensions.get('window').height > 1309 &&
                    Dimensions.get('window').height < 1310
                  ? '6%'
                  : Dimensions.get('window').width === 600
                  ? '6%'
                  : '10%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={Style.ButtonBBBiss}
              onPress={() => this.handleValidate()}>
              <Text style={Style.textB}>
                {this.props.lg ? 'VALIDER' : 'CONFIRM'}
              </Text>
            </TouchableOpacity>
          </View>
          {this.props.Age.length > 2 && <View style={{marginTop: '5%'}}></View>}
          {this.state.company && <View style={{marginTop: '5%'}}></View>}
        </View>
      </ScrollView>
    );
  }
}

let mapDispatchToProps = dispatch => {
  return {
    Add: data => dispatch(ACTIONS.AddNumber(data)),
    handleDelete: data => dispatch(ACTIONS.handleDelete(data)),
    handleAge: data => dispatch(ACTIONS.handleAge(data)),
    Modifie: data => dispatch(ACTIONS.handleM(data)),
    ModifiB: data => dispatch(ACTIONS.handleW(data)),
    handleSubmitBis: (data, datab) =>
      dispatch(ACTIONS.handleSubmit(data, datab)),
    handleChangeS: (data, datab) => dispatch(ACTIONS.handleAgeB(data, datab)),
  };
};

let mapStateToProps = state => {
  return {
    AddNumber: state.AddNumberBis,
    Age: state.AgeSex,
    lg: state.lang,
  };
};

let Style = StyleSheet.create({
  container: {
    backgroundColor: '#EEE7DC',
    display: 'flex',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize:
      Dimensions.get('window').width > 1066 &&
      Dimensions.get('window').width < 1067
        ? 20
        : Dimensions.get('window').width > 533 &&
          Dimensions.get('window').width < 534
        ? 11
        : Dimensions.get('window').width === 1168
        ? 24
        : 16,
    textAlign: 'center',
    color: '#A99462',
    fontFamily: 'advent-Bd3',
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  textB: {
    fontSize:
      Dimensions.get('window').width > 1066 &&
      Dimensions.get('window').width < 1067
        ? 25
        : Dimensions.get('window').width > 533 &&
          Dimensions.get('window').width < 534
        ? 15
        : Dimensions.get('window').width === 1168
        ? 24
        : 16,
    textAlign: 'center',
    color: '#A99462',
    fontFamily: 'advent-Bd2',
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  ButtonBis: {
    backgroundColor: 'white',
    width: '44%',
    marginTop: '2%',
    padding: '3%',
    borderWidth: 1,
    borderColor: '#A99462',
    marginLeft: '2%',
    marginRight: '2%',
  },
  ButtonBBis: {
    backgroundColor: 'white',
    width: '20%',
    marginTop: '2%',
    padding: '3%',
    borderWidth: 1,
    borderColor: '#A99462',
  },
  ButtonBBBis: {
    backgroundColor: 'white',
    width: '40%',
    padding: '3%',
    borderWidth: 1,
    borderColor: '#A99462',
  },
  ButtonBBBiss: {
    backgroundColor: 'white',
    width: '30%',
    marginTop: '2%',
    padding: '3%',
    borderWidth: 1,
    borderColor: '#A99462',
  },
  ButtonBBBBis: {
    backgroundColor: 'white',
    width: '23%',
    padding: '3%',
    borderWidth: 1,
    borderColor: '#A99462',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StepTwo);
