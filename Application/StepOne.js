import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Slider} from '@miblanchard/react-native-slider';
import * as ACTIONS from './Actions';
import Icon from 'react-native-vector-icons/AntDesign';

let StepOne = React.memo(function StepOne(props) {
  let [form, setForm] = useState({
    sejour: 0,
    qualite: 0,
    spa: 0,
    activite: 0,
    date: new Date().toLocaleDateString('fr'),
    heure: null,
  });

  let [commentaire, setCommentaire] = useState(null);

  let [repas, setRepas] = useState(0);

  let lg = useSelector(state => state.lang);

  let dispatch = useDispatch();

  let [orientation, setOrientation] = useState(null);

  let hh = Dimensions.get('window').height;

  let ww = Dimensions.get('window').width;

  useEffect(() => {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      if (width < height) {
        setOrientation('PORTRAIT');
      } else {
        setOrientation('LANDSCAPE');
      }
    });
    return () => {
      Dimensions.removeEventListener('change');
    };
  }, []);

  useEffect(() => {
    if (ww < hh) {
      setOrientation('PORTRAIT');
    } else {
      setOrientation('LANDSCAPE');
    }
  }, [ww, hh]);

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let submitTime = `${h}h${m}min${s}s`;

  let handleSubmit = () => {
    let rating = {};
    rating.sejour = form.sejour;
    rating.qualite = form.qualite;
    rating.repas = repas;
    rating.spa = form.spa;
    rating.activite = form.activite;
    rating.date = form.date;
    rating.heure = submitTime;
    rating.commentaire = commentaire;
    dispatch(ACTIONS.Add(rating));
    props.navigation.navigate('Remerciement');
  };

  return (
    <ScrollView style={{backgroundColor: '#EEE7DC'}}>
      <View style={Style.container}>
        <View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              marginTop: '5%',
            }}>
            <Image
              source={require('../Image/Logo.png')}
              style={{
                width:
                  orientation === 'PORTRAIT'
                    ? Platform.OS === 'ios'
                      ? 300
                      : ww === 768
                      ? 210
                      : ww > 650 && ww < 601
                      ? 150
                      : Dimensions.get('window').height === 912
                      ? 160
                      : Dimensions.get('window').height === 976
                      ? Dimensions.get('window').width === 540
                        ? 150
                        : Dimensions.get('window').width === 600
                        ? 150
                        : 200
                      : Dimensions.get('window').height > 1650 &&
                        Dimensions.get('window').height < 1651
                      ? 350
                      : Dimensions.get('window').height > 913 &&
                        Dimensions.get('window').height < 914
                      ? 150
                      : Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                      ? 150
                      : Dimensions.get('window').width === 1168
                      ? 300
                      : 200
                    : 300,
                height:
                  orientation === 'PORTRAIT'
                    ? Platform.OS === 'ios'
                      ? 220
                      : ww === 768
                      ? 150
                      : ww > 650 && ww < 601
                      ? 100
                      : Dimensions.get('window').height === 912
                      ? 110
                      : Dimensions.get('window').height === 976
                      ? Dimensions.get('window').width === 540
                        ? 105
                        : Dimensions.get('window').width === 600
                        ? 100
                        : 150
                      : Dimensions.get('window').height > 1650 &&
                        Dimensions.get('window').height < 1651
                      ? 250
                      : Dimensions.get('window').height > 913 &&
                        Dimensions.get('window').height < 914
                      ? 100
                      : Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                      ? 100
                      : Dimensions.get('window').width === 1168
                      ? 220
                      : 150
                    : 220,
              }}
            />
          </View>
          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              marginLeft:
                orientation === 'PORTRAIT'
                  ? Platform.OS === 'android'
                    ? ww == 768
                      ? Dimensions.get('window').height === 976
                        ? '33%'
                        : Dimensions.get('window').height === 1104
                        ? '33%'
                        : '40%'
                      : ww > 650 && ww < 601
                      ? '33%'
                      : hh === 1232
                      ? '33%'
                      : Dimensions.get('window').height === 1224
                      ? Dimensions.get('window').width === 900
                        ? '32%'
                        : '35%'
                      : Dimensions.get('window').height > 1650 &&
                        Dimensions.get('window').height < 1651
                      ? '35%'
                      : Dimensions.get('window').height === 912
                      ? Dimensions.get('window').width === 600
                        ? '33%'
                        : '30%'
                      : Dimensions.get('window').width === 1024
                      ? Dimensions.get('window').height > 1309 &&
                        Dimensions.get('window').height < 1310
                        ? '31%'
                        : '34%'
                      : Dimensions.get('window').width === 800
                      ? '33%'
                      : Dimensions.get('window').width === 540
                      ? '33%'
                      : Dimensions.get('window').height > 913 &&
                        Dimensions.get('window').height < 914
                      ? '32%'
                      : Dimensions.get('window').width === 600
                      ? '33%'
                      : Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                      ? '33%'
                      : Dimensions.get('window').width === 1168
                      ? '32%'
                      : '35%'
                    : '40%'
                  : '40%',
              marginTop:
                orientation === 'PORTRAIT'
                  ? Dimensions.get('window').width === 800
                    ? '7%'
                    : Dimensions.get('window').width === 1024
                    ? '5%'
                    : Dimensions.get('window').width === 540
                    ? '6%'
                    : Dimensions.get('window').width === 900
                    ? '6%'
                    : Dimensions.get('window').height > 913 &&
                      Dimensions.get('window').height < 914
                    ? '6%'
                    : Dimensions.get('window').width === 600
                    ? '6%'
                    : '7%'
                  : '5%',
            }}>
            <Image
              source={require('../Image/bis.png')}
              style={{
                transform: [{rotate: '90deg'}],
                width:
                  orientation === 'PORTRAIT'
                    ? Platform.OS === 'android'
                      ? ww === 768
                        ? 155
                        : ww > 650 && ww < 601
                        ? 100
                        : Dimensions.get('window').height === 912
                        ? Dimensions.get('window').width === 600
                          ? 100
                          : 130
                        : Dimensions.get('window').height === 1232
                        ? 133
                        : Dimensions.get('window').height === 976
                        ? Dimensions.get('window').width === 540
                          ? 102
                          : Dimensions.get('window').width === 600
                          ? 105
                          : 125
                        : Dimensions.get('window').width === 800
                        ? 125
                        : Dimensions.get('window').width === 1024
                        ? Dimensions.get('window').height > 1309 &&
                          Dimensions.get('window').height < 1310
                          ? 165
                          : 130
                        : Dimensions.get('window').width === 900
                        ? 145
                        : Dimensions.get('window').height > 913 &&
                          Dimensions.get('window').height < 914
                        ? 105
                        : Dimensions.get('window').width > 533 &&
                          Dimensions.get('window').width < 534
                        ? 105
                        : 225
                      : 190
                    : 190,
                height:
                  orientation === 'PORTRAIT'
                    ? Platform.OS === 'android'
                      ? ww === 768
                        ? 75
                        : ww > 650 && ww < 601
                        ? 50
                        : Dimensions.get('window').height === 912
                        ? Dimensions.get('window').width === 600
                          ? 50
                          : 60
                        : Dimensions.get('window').height === 1232
                        ? 65
                        : Dimensions.get('window').height === 976
                        ? Dimensions.get('window').width === 540
                          ? 50
                          : Dimensions.get('window').width === 600
                          ? 50
                          : 60
                        : Dimensions.get('window').width === 800
                        ? 60
                        : Dimensions.get('window').width === 1024
                        ? Dimensions.get('window').height > 1309 &&
                          Dimensions.get('window').height < 1310
                          ? 80
                          : 70
                        : Dimensions.get('window').width === 900
                        ? 70
                        : Dimensions.get('window').height > 913 &&
                          Dimensions.get('window').height < 914
                        ? 50
                        : Dimensions.get('window').width > 533 &&
                          Dimensions.get('window').width < 534
                        ? 51
                        : 110
                      : 90
                    : 90,
                alignSelf: 'flex-end',
              }}
            />
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: Dimensions.get('window').width,
            justifyContent: 'center',
            marginTop:
              Dimensions.get('window').height > 1650 &&
              Dimensions.get('window').height < 1651
                ? '4%'
                : Dimensions.get('window').width === 800
                ? '3%'
                : Dimensions.get('window').width === 720
                ? '4%'
                : Dimensions.get('window').width === 1168
                ? '4%'
                : '2%',
          }}>
          <View
            style={{
              marginRight:
                Dimensions.get('window').height > 1650 &&
                Dimensions.get('window').height < 1651
                  ? '0%'
                  : '1%',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../Image/1.png')}
              style={{
                width:
                  Dimensions.get('window').width === 1024
                    ? 85
                    : Dimensions.get('window').width === 540
                    ? 45
                    : Dimensions.get('window').width > 533 &&
                      Dimensions.get('window').width < 534
                    ? 45
                    : 55,
                height:
                  Dimensions.get('window').width === 1024
                    ? 93
                    : Dimensions.get('window').width === 540
                    ? 50
                    : Dimensions.get('window').width > 533 &&
                      Dimensions.get('window').width < 534
                    ? 50
                    : 60,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </View>
          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              width:
                Dimensions.get('window').height > 1650 &&
                Dimensions.get('window').height < 1651
                  ? Dimensions.get('window').width / 1.3
                  : Dimensions.get('window').width === 768
                  ? Dimensions.get('window').width / 1.3
                  : Dimensions.get('window').width / 1.31,
            }}>
            {lg ? (
              <Text
                style={{
                  ...Style.text,
                  textAlign: 'center',
                  fontSize:
                    Dimensions.get('window').height > 1650 &&
                    Dimensions.get('window').height < 1651
                      ? Dimensions.get('window').width > 1066 &&
                        Dimensions.get('window').width < 1067
                        ? 20
                        : 22
                      : Dimensions.get('window').height === 976
                      ? Dimensions.get('window').width === 768
                        ? 14
                        : Dimensions.get('window').width === 540
                        ? 10
                        : 11
                      : Dimensions.get('window').width === 720
                      ? 14
                      : Dimensions.get('window').width === 800
                      ? 15
                      : Dimensions.get('window').height > 913 &&
                        Dimensions.get('window').height < 914
                      ? 12
                      : Dimensions.get('window').width === 600
                      ? 11
                      : Dimensions.get('window').height === 1104
                      ? 15
                      : Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                      ? 10
                      : Dimensions.get('window').width === 1168
                      ? 23
                      : 16,
                }}>
                QUELLE NOTE DONNERIEZ-VOUS DE MANIÈRE GLOBALE À VOTRE SEJOUR AU
                MAS DE LA FOUQUE ?
              </Text>
            ) : (
              <Text
                style={{
                  ...Style.text,
                  textAlign: 'center',
                  fontSize:
                    Dimensions.get('window').height > 1650 &&
                    Dimensions.get('window').height < 1651
                      ? 22
                      : Dimensions.get('window').height === 976
                      ? Dimensions.get('window').width === 768
                        ? 18
                        : Dimensions.get('window').width === 540
                        ? 12
                        : 14
                      : Dimensions.get('window').height > 913 &&
                        Dimensions.get('window').height < 914
                      ? 15
                      : Dimensions.get('window').width === 600
                      ? 14
                      : Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                      ? 11
                      : Dimensions.get('window').height > 1309 &&
                        Dimensions.get('window').height < 1310
                      ? 18
                      : Dimensions.get('window').width === 1168
                      ? 24
                      : 16,
                }}>
                HOW WOULD YOU RATE YOUR STAY AT MAS DE LA FOUQUE OVERALL ?
              </Text>
            )}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: '2%',
              }}>
              <Text style={{...Style.text, paddingRight: '1%'}}>0</Text>
              <Slider
                value={form.sejour}
                minimumValue={0}
                maximumValue={10}
                minimumTrackTintColor="#A99462"
                step={-1}
                animationType="timing"
                trackStyle={{
                  backgroundColor: '#A99462',
                  height:
                    Dimensions.get('window').width === 1024
                      ? 2
                      : Dimensions.get('window').width === 1168
                      ? 2
                      : 1,
                  width:
                    Dimensions.get('window').height > 1650 &&
                    Dimensions.get('window').height < 1651
                      ? 650
                      : Dimensions.get('window').width === 1024
                      ? 650
                      : Dimensions.get('window').height === 976
                      ? Dimensions.get('window').width === 768
                        ? 500
                        : Dimensions.get('window').width === 540
                        ? 350
                        : 400
                      : Dimensions.get('window').height > 913 &&
                        Dimensions.get('window').height < 914
                      ? 350
                      : Dimensions.get('window').height === 912 &&
                        Dimensions.get('window').width === 600
                      ? 350
                      : Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                      ? 350
                      : Dimensions.get('window').width === 1168
                      ? 700
                      : 500,
                }}
                onValueChange={value => {
                  setForm({...form, sejour: Number(value)});
                }}
                renderThumbComponent={() => {
                  return (
                    <View style={Style.Thumb}>
                      <Text style={{color: 'rgb(154,35,43)'}}>
                        {form.sejour}
                      </Text>
                    </View>
                  );
                }}
              />
              <Text style={{...Style.text, paddingLeft: '1%'}}>10</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: Dimensions.get('window').width,
            justifyContent: 'center',
            marginTop:
              Dimensions.get('window').width === 800
                ? '8%'
                : Dimensions.get('window').width === 1024
                ? '4%'
                : Dimensions.get('window').width === 540
                ? Dimensions.get('window').height === 976
                  ? '8%'
                  : '4%'
                : Dimensions.get('window').width === 900
                ? '5%'
                : Dimensions.get('window').width === 768
                ? Dimensions.get('window').height === 976
                  ? '3%'
                  : Dimensions.get('window').height === 1104
                  ? '4%'
                  : '1%'
                : Dimensions.get('window').height > 913 &&
                  Dimensions.get('window').height < 914
                ? '4%'
                : Dimensions.get('window').height === 912 &&
                  Dimensions.get('window').width === 600
                ? '4%'
                : Dimensions.get('window').height === 976 &&
                  Dimensions.get('window').width === 600
                ? '6%'
                : Dimensions.get('window').width === 720
                ? '8%'
                : Dimensions.get('window').width > 533 &&
                  Dimensions.get('window').width < 534
                ? '3%'
                : '7%',
          }}>
          <View
            style={{
              marginRight:
                Dimensions.get('window').height > 1650 &&
                Dimensions.get('window').height < 1651
                  ? '0%'
                  : '1%',
            }}>
            <Image
              source={require('../Image/2.png')}
              style={{
                width:
                  Dimensions.get('window').height > 1309 &&
                  Dimensions.get('window').height < 1310
                    ? 70
                    : Dimensions.get('window').width === 540
                    ? 50
                    : Dimensions.get('window').width > 533 &&
                      Dimensions.get('window').width < 534
                    ? 50
                    : 60,
                height:
                  Dimensions.get('window').height > 1309 &&
                  Dimensions.get('window').height < 1310
                    ? 70
                    : Dimensions.get('window').width === 540
                    ? 50
                    : Dimensions.get('window').width > 533 &&
                      Dimensions.get('window').width < 534
                    ? 50
                    : 60,
              }}
            />
          </View>
          <View
            style={{
              width:
                Dimensions.get('window').height > 1650 &&
                Dimensions.get('window').height < 1651
                  ? Dimensions.get('window').width / 1.3
                  : Dimensions.get('window').width === 768
                  ? Dimensions.get('window').width / 1.3
                  : Dimensions.get('window').width / 1.31,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {lg ? (
              <Text
                style={{
                  ...Style.text,
                  textAlign: 'center',
                  fontSize:
                    Dimensions.get('window').height > 1650 &&
                    Dimensions.get('window').height < 1651
                      ? Dimensions.get('window').width > 1066 &&
                        Dimensions.get('window').width < 1067
                        ? 20
                        : 22
                      : Dimensions.get('window').height === 976
                      ? Dimensions.get('window').width === 768
                        ? 15
                        : Dimensions.get('window').width === 540
                        ? 10
                        : 13
                      : Dimensions.get('window').width === 800
                      ? 15
                      : Dimensions.get('window').width === 720
                      ? 15
                      : Dimensions.get('window').height > 913 &&
                        Dimensions.get('window').height < 914
                      ? 12
                      : Dimensions.get('window').width === 600
                      ? 12
                      : Dimensions.get('window').height === 1104
                      ? 15
                      : Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                      ? 10
                      : Dimensions.get('window').width === 1168
                      ? 23
                      : 16,
                }}>
                QU'AVEZ VOUS PENSÉ DE LA QUALITÉ DE NOS CHAMBRES ?
              </Text>
            ) : (
              <Text
                style={{
                  ...Style.text,
                  textAlign: 'center',
                  fontSize:
                    Dimensions.get('window').height > 1650 &&
                    Dimensions.get('window').height < 1651
                      ? Dimensions.get('window').width > 1066 &&
                        Dimensions.get('window').width < 1067
                        ? 20
                        : 22
                      : Dimensions.get('window').height === 976
                      ? Dimensions.get('window').width === 768
                        ? 18
                        : Dimensions.get('window').width === 540
                        ? 12
                        : 15
                      : Dimensions.get('window').height > 913 &&
                        Dimensions.get('window').height < 914
                      ? 14
                      : Dimensions.get('window').width === 600
                      ? 14
                      : Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                      ? 11
                      : Dimensions.get('window').height > 1309 &&
                        Dimensions.get('window').height < 1310
                      ? 18
                      : Dimensions.get('window').width === 1168
                      ? 24
                      : 16,
                }}>
                WHAT DID YOU THINK OF THE QUALITY OF OURS ROOMS ?
              </Text>
            )}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: '2%',
              }}>
              <Text style={{...Style.text, paddingRight: '1%'}}>0</Text>
              <Slider
                value={form.qualite}
                minimumValue={0}
                maximumValue={10}
                minimumTrackTintColor="#A99462"
                step={-1}
                animationType="timing"
                trackStyle={{
                  backgroundColor: '#A99462',
                  height:
                    Dimensions.get('window').width === 1024
                      ? 2
                      : Dimensions.get('window').width === 1168
                      ? 2
                      : 1,
                  width:
                    Dimensions.get('window').height > 1650 &&
                    Dimensions.get('window').height < 1651
                      ? 650
                      : Dimensions.get('window').width === 1024
                      ? 650
                      : Dimensions.get('window').height === 976
                      ? Dimensions.get('window').width === 768
                        ? 500
                        : Dimensions.get('window').width === 540
                        ? 350
                        : 400
                      : Dimensions.get('window').height > 913 &&
                        Dimensions.get('window').height < 914
                      ? 350
                      : Dimensions.get('window').height === 912 &&
                        Dimensions.get('window').width === 600
                      ? 350
                      : Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                      ? 350
                      : Dimensions.get('window').width === 1168
                      ? 700
                      : 500,
                }}
                onValueChange={value =>
                  setForm({...form, qualite: Number(value)})
                }
                renderThumbComponent={() => {
                  return (
                    <View style={Style.Thumb}>
                      <Text style={{color: 'rgb(154,35,43)'}}>
                        {form.qualite}
                      </Text>
                    </View>
                  );
                }}
              />
              <Text style={{...Style.text, paddingLeft: '1%'}}>10</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: Dimensions.get('window').width,
            justifyContent: 'center',
            marginTop:
              Dimensions.get('window').width === 800
                ? '8%'
                : Dimensions.get('window').width === 1024
                ? '4%'
                : Dimensions.get('window').width === 540
                ? Dimensions.get('window').height === 976
                  ? '8%'
                  : '4%'
                : Dimensions.get('window').width === 900
                ? '5%'
                : Dimensions.get('window').width === 768
                ? Dimensions.get('window').height === 976
                  ? '3%'
                  : Dimensions.get('window').height === 1104
                  ? '4%'
                  : '1%'
                : Dimensions.get('window').height > 913 &&
                  Dimensions.get('window').height < 914
                ? '4%'
                : Dimensions.get('window').height === 912 &&
                  Dimensions.get('window').width === 600
                ? '3%'
                : Dimensions.get('window').height === 976 &&
                  Dimensions.get('window').width === 600
                ? '6%'
                : Dimensions.get('window').width === 720
                ? '8%'
                : Dimensions.get('window').width > 533 &&
                  Dimensions.get('window').width < 534
                ? '3%'
                : '7%',
          }}>
          <View
            style={{
              marginRight:
                Dimensions.get('window').height > 1650 &&
                Dimensions.get('window').height < 1651
                  ? '0%'
                  : '1%',
            }}>
            <Image
              source={require('../Image/icon.png')}
              style={{
                width:
                  Dimensions.get('window').height > 1309 &&
                  Dimensions.get('window').height < 1310
                    ? 75
                    : Dimensions.get('window').width === 540
                    ? 50
                    : Dimensions.get('window').width > 533 &&
                      Dimensions.get('window').width < 534
                    ? 52
                    : 60,
                height:
                  Dimensions.get('window').width === 1024
                    ? Dimensions.get('window').height > 1309 &&
                      Dimensions.get('window').height < 1310
                      ? 86
                      : 95
                    : Dimensions.get('window').width === 540
                    ? 60
                    : Dimensions.get('window').width > 533 &&
                      Dimensions.get('window').width < 534
                    ? 60
                    : 70,
              }}
            />
          </View>
          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              width:
                Dimensions.get('window').height > 1650 &&
                Dimensions.get('window').height < 1651
                  ? Dimensions.get('window').width / 1.3
                  : Dimensions.get('window').width === 768
                  ? Dimensions.get('window').width / 1.3
                  : Dimensions.get('window').width / 1.31,
            }}>
            {lg ? (
              <Text
                style={{
                  ...Style.text,
                  textAlign: 'center',
                  fontSize:
                    Dimensions.get('window').height > 1650 &&
                    Dimensions.get('window').height < 1651
                      ? Dimensions.get('window').width > 1066 &&
                        Dimensions.get('window').width < 1067
                        ? 20
                        : 22
                      : Dimensions.get('window').height === 976
                      ? Dimensions.get('window').width === 768
                        ? 15
                        : Dimensions.get('window').width === 540
                        ? 10
                        : 13
                      : Dimensions.get('window').width === 800
                      ? 15
                      : Dimensions.get('window').width === 720
                      ? 15
                      : Dimensions.get('window').height > 913 &&
                        Dimensions.get('window').height < 914
                      ? 12
                      : Dimensions.get('window').width === 600
                      ? 12
                      : Dimensions.get('window').height === 1104
                      ? 15
                      : Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                      ? 10
                      : Dimensions.get('window').width === 1168
                      ? 23
                      : 16,
                }}>
                COMMENT ESTIMEZ-VOUS LA QUALITÉ DE VOS REPAS ?
              </Text>
            ) : (
              <Text
                style={{
                  ...Style.text,
                  textAlign: 'center',
                  fontSize:
                    Dimensions.get('window').height > 1650 &&
                    Dimensions.get('window').height < 1651
                      ? Dimensions.get('window').width > 1066 &&
                        Dimensions.get('window').width < 1067
                        ? 20
                        : 22
                      : Dimensions.get('window').height === 976
                      ? Dimensions.get('window').width === 768
                        ? 18
                        : Dimensions.get('window').width === 540
                        ? 12
                        : 14
                      : Dimensions.get('window').height > 913 &&
                        Dimensions.get('window').height < 914
                      ? 15
                      : Dimensions.get('window').width === 600
                      ? 14
                      : Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                      ? 11
                      : Dimensions.get('window').height > 1309 &&
                        Dimensions.get('window').height < 1310
                      ? 18
                      : Dimensions.get('window').width === 1168
                      ? 24
                      : 16,
                }}>
                HOW DO YOU RATE THE QUALITY OF YOUR MEALS ?
              </Text>
            )}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: '2%',
              }}>
              <Text style={{...Style.text, paddingRight: '1%'}}>0</Text>
              <Slider
                value={repas}
                minimumValue={0}
                maximumValue={10}
                minimumTrackTintColor="#A99462"
                step={-1}
                animationType="timing"
                trackStyle={{
                  backgroundColor: '#A99462',
                  height:
                    Dimensions.get('window').width === 1024
                      ? 2
                      : Dimensions.get('window').width === 1168
                      ? 2
                      : 1,
                  width:
                    Dimensions.get('window').height > 1650 &&
                    Dimensions.get('window').height < 1651
                      ? 650
                      : Dimensions.get('window').width === 1024
                      ? 650
                      : Dimensions.get('window').height === 976
                      ? Dimensions.get('window').width === 768
                        ? 500
                        : Dimensions.get('window').width === 540
                        ? 350
                        : 400
                      : Dimensions.get('window').height > 913 &&
                        Dimensions.get('window').height < 914
                      ? 350
                      : Dimensions.get('window').height === 912 &&
                        Dimensions.get('window').width === 600
                      ? 350
                      : Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                      ? 350
                      : Dimensions.get('window').width === 1168
                      ? 700
                      : 500,
                }}
                onValueChange={value => setRepas(Number(value))}
                renderThumbComponent={() => {
                  return (
                    <View style={Style.Thumb}>
                      <Text style={{color: 'rgb(154,35,43)'}}>{repas}</Text>
                    </View>
                  );
                }}
              />
              <Text style={{...Style.text, paddingLeft: '1%'}}>10</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: Dimensions.get('window').width,
            justifyContent: 'center',
            marginTop:
              Dimensions.get('window').width === 800
                ? Dimensions.get('window').height === 1232
                  ? '7%'
                  : '8%'
                : Dimensions.get('window').width === 1024
                ? '4%'
                : Dimensions.get('window').width === 540
                ? Dimensions.get('window').height === 976
                  ? '8%'
                  : '4%'
                : Dimensions.get('window').width === 900
                ? '5%'
                : Dimensions.get('window').width === 768
                ? Dimensions.get('window').height === 976
                  ? '3%'
                  : Dimensions.get('window').height === 1104
                  ? '4%'
                  : '1%'
                : Dimensions.get('window').height > 913 &&
                  Dimensions.get('window').height < 914
                ? '3%'
                : Dimensions.get('window').height === 912 &&
                  Dimensions.get('window').width === 600
                ? '3%'
                : Dimensions.get('window').height === 976 &&
                  Dimensions.get('window').width === 600
                ? '6%'
                : Dimensions.get('window').width === 720
                ? '8%'
                : Dimensions.get('window').width > 533 &&
                  Dimensions.get('window').width < 534
                ? '3%'
                : '7%',
          }}>
          <View
            style={{
              marginRight:
                Dimensions.get('window').height > 1650 &&
                Dimensions.get('window').height < 1651
                  ? '0%'
                  : '1%',
            }}>
            <Image
              source={require('../Image/3.png')}
              style={{
                width:
                  Dimensions.get('window').height > 1309 &&
                  Dimensions.get('window').height < 1310
                    ? 80
                    : Dimensions.get('window').width === 540
                    ? 60
                    : Dimensions.get('window').width > 533 &&
                      Dimensions.get('window').width < 534
                    ? 55
                    : 65,
                height:
                  Dimensions.get('window').height > 1309 &&
                  Dimensions.get('window').height < 1310
                    ? 85
                    : Dimensions.get('window').width === 540
                    ? 65
                    : Dimensions.get('window').width > 533 &&
                      Dimensions.get('window').width < 534
                    ? 60
                    : 70,
              }}
            />
          </View>
          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              width:
                Dimensions.get('window').height > 1650 &&
                Dimensions.get('window').height < 1651
                  ? Dimensions.get('window').width / 1.3
                  : Dimensions.get('window').width === 768
                  ? Dimensions.get('window').width / 1.3
                  : Dimensions.get('window').width / 1.31,
            }}>
            {lg ? (
              <Text
                style={{
                  ...Style.text,
                  textAlign: 'center',
                  fontSize:
                    Dimensions.get('window').height > 1650 &&
                    Dimensions.get('window').height < 1651
                      ? Dimensions.get('window').width > 1066 &&
                        Dimensions.get('window').width < 1067
                        ? 20
                        : 22
                      : Dimensions.get('window').height === 976
                      ? Dimensions.get('window').width === 540
                        ? 10
                        : Dimensions.get('window').width === 768
                        ? 15
                        : 13
                      : Dimensions.get('window').width === 800
                      ? 15
                      : Dimensions.get('window').width === 720
                      ? 15
                      : Dimensions.get('window').height > 913 &&
                        Dimensions.get('window').height < 914
                      ? 12
                      : Dimensions.get('window').width === 600
                      ? 12
                      : Dimensions.get('window').height === 1104
                      ? 15
                      : Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                      ? 10
                      : Dimensions.get('window').width === 1168
                      ? 23
                      : 16,
                }}>
                QUELLE NOTE DONNERIEZ-VOUS POUR LE SPA ?
              </Text>
            ) : (
              <Text
                style={{
                  ...Style.text,
                  textAlign: 'center',
                  fontSize:
                    Dimensions.get('window').height > 1650 &&
                    Dimensions.get('window').height < 1651
                      ? 22
                      : Dimensions.get('window').height === 976
                      ? Dimensions.get('window').width === 768
                        ? 18
                        : Dimensions.get('window').width === 540
                        ? 12
                        : 14
                      : Dimensions.get('window').height > 913 &&
                        Dimensions.get('window').height < 914
                      ? 15
                      : Dimensions.get('window').width === 600
                      ? 14
                      : Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                      ? 11
                      : Dimensions.get('window').height > 1309 &&
                        Dimensions.get('window').height < 1310
                      ? 18
                      : Dimensions.get('window').width === 1168
                      ? 24
                      : 16,
                }}>
                HOW WOULD YOU RATE THE SPA?
              </Text>
            )}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: '2%',
              }}>
              <Text style={{...Style.text, paddingRight: '1%'}}>0</Text>
              <Slider
                value={form.spa}
                minimumValue={0}
                maximumValue={10}
                minimumTrackTintColor="#A99462"
                step={-1}
                animationType="timing"
                trackStyle={{
                  backgroundColor: '#A99462',
                  height:
                    Dimensions.get('window').width === 1024
                      ? 2
                      : Dimensions.get('window').width === 1168
                      ? 2
                      : 1,
                  width:
                    Dimensions.get('window').height > 1650 &&
                    Dimensions.get('window').height < 1651
                      ? 650
                      : Dimensions.get('window').width === 1024
                      ? 650
                      : Dimensions.get('window').height === 976
                      ? Dimensions.get('window').width === 768
                        ? 500
                        : Dimensions.get('window').width === 540
                        ? 350
                        : 400
                      : Dimensions.get('window').height > 913 &&
                        Dimensions.get('window').height < 914
                      ? 350
                      : Dimensions.get('window').height === 912 &&
                        Dimensions.get('window').width === 600
                      ? 350
                      : Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                      ? 350
                      : Dimensions.get('window').width === 1168
                      ? 700
                      : 500,
                }}
                onValueChange={value => setForm({...form, spa: Number(value)})}
                renderThumbComponent={() => {
                  return (
                    <View style={Style.Thumb}>
                      <Text style={{color: 'rgb(154,35,43)'}}>{form.spa}</Text>
                    </View>
                  );
                }}
              />
              <Text style={{...Style.text, paddingLeft: '1%'}}>10</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop:
              Dimensions.get('window').width === 800
                ? '8%'
                : Dimensions.get('window').width === 1024
                ? '6%'
                : Dimensions.get('window').width === 540
                ? Dimensions.get('window').height === 976
                  ? '8%'
                  : '4%'
                : Dimensions.get('window').width === 900
                ? '5%'
                : Dimensions.get('window').width === 768
                ? Dimensions.get('window').height === 976
                  ? '3%'
                  : Dimensions.get('window').height === 1104
                  ? '4%'
                  : '1%'
                : Dimensions.get('window').height > 913 &&
                  Dimensions.get('window').height < 914
                ? '4%'
                : Dimensions.get('window').height === 912 &&
                  Dimensions.get('window').width === 600
                ? '4%'
                : Dimensions.get('window').height === 976 &&
                  Dimensions.get('window').width === 600
                ? '6%'
                : Dimensions.get('window').width === 720
                ? '8%'
                : Dimensions.get('window').width > 533 &&
                  Dimensions.get('window').width < 534
                ? '4%'
                : '7%',
          }}>
          <View
            style={{
              marginRight:
                Dimensions.get('window').height > 1650 &&
                Dimensions.get('window').height < 1651
                  ? '0%'
                  : '1%',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../Image/4.png')}
              style={{
                width:
                  Dimensions.get('window').height > 1309 &&
                  Dimensions.get('window').height < 1310
                    ? 85
                    : Dimensions.get('window').width === 540
                    ? 60
                    : Dimensions.get('window').width === 768 &&
                      Dimensions.get('window').height === 976
                    ? 80
                    : Dimensions.get('window').width > 533 &&
                      Dimensions.get('window').width < 534
                    ? 60
                    : 78,
                height:
                  Dimensions.get('window').width === 768
                    ? Dimensions.get('window').height === 976
                      ? 70
                      : Dimensions.get('window').height === 1104
                      ? 70
                      : 80
                    : Dimensions.get('window').height > 1309 &&
                      Dimensions.get('window').height < 1310
                    ? 75
                    : Dimensions.get('window').width === 540
                    ? 54
                    : Dimensions.get('window').width > 533 &&
                      Dimensions.get('window').width < 534
                    ? 52
                    : 68,
              }}
            />
          </View>
          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              width:
                Dimensions.get('window').height > 1650 &&
                Dimensions.get('window').height < 1651
                  ? Dimensions.get('window').width / 1.3
                  : Dimensions.get('window').width === 768
                  ? Dimensions.get('window').width / 1.3
                  : Dimensions.get('window').width / 1.31,
            }}>
            {lg ? (
              <Text
                style={{
                  ...Style.text,
                  textAlign: 'center',
                  fontSize:
                    Dimensions.get('window').height > 1650 &&
                    Dimensions.get('window').height < 1651
                      ? Dimensions.get('window').width > 1066 &&
                        Dimensions.get('window').width < 1067
                        ? 20
                        : 22
                      : Dimensions.get('window').height === 976
                      ? Dimensions.get('window').width === 768
                        ? 15
                        : Dimensions.get('window').width === 540
                        ? 10
                        : 12
                      : Dimensions.get('window').width === 720
                      ? 14
                      : Dimensions.get('window').width === 800
                      ? 15
                      : Dimensions.get('window').height > 913 &&
                        Dimensions.get('window').height < 914
                      ? 12
                      : Dimensions.get('window').width === 600
                      ? 12
                      : Dimensions.get('window').height === 1104
                      ? 15
                      : Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                      ? 10
                      : Dimensions.get('window').width === 1168
                      ? 23
                      : 16,
                }}>
                QUELLE NOTE DONNERIEZ-VOUS POUR LES ACTIVITÉS ET EXCURSIONS HORS
                DE L'HÔTEL ?
              </Text>
            ) : (
              <Text
                style={{
                  ...Style.text,
                  textAlign: 'center',
                  fontSize:
                    Dimensions.get('window').height > 1650 &&
                    Dimensions.get('window').height < 1651
                      ? 22
                      : Dimensions.get('window').height === 976
                      ? Dimensions.get('window').width === 768
                        ? 18
                        : Dimensions.get('window').width === 540
                        ? 12
                        : 14
                      : Dimensions.get('window').width === 720
                      ? 16
                      : Dimensions.get('window').height > 913 &&
                        Dimensions.get('window').height < 914
                      ? 15
                      : Dimensions.get('window').width === 600
                      ? 14
                      : Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                      ? 11
                      : Dimensions.get('window').height > 1309 &&
                        Dimensions.get('window').height < 1310
                      ? 18
                      : Dimensions.get('window').width === 1168
                      ? 24
                      : 16,
                }}>
                HOW WOULD YOU RATE ACTIVITIES AND EXCURSIONS OUTSIDE THE HOTEL ?
              </Text>
            )}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: '2%',
                justifyContent: 'center',
              }}>
              <Text style={{...Style.text, paddingRight: '1%'}}>0</Text>
              <Slider
                value={form.activite}
                minimumValue={0}
                maximumValue={10}
                minimumTrackTintColor="#A99462"
                step={-1}
                animationType="timing"
                trackStyle={{
                  backgroundColor: '#A99462',
                  height:
                    Dimensions.get('window').width === 1024
                      ? 2
                      : Dimensions.get('window').width === 1168
                      ? 2
                      : 1,
                  width:
                    Dimensions.get('window').height > 1650 &&
                    Dimensions.get('window').height < 1651
                      ? 650
                      : Dimensions.get('window').width === 1024
                      ? 650
                      : Dimensions.get('window').height === 976
                      ? Dimensions.get('window').width === 768
                        ? 500
                        : Dimensions.get('window').width === 540
                        ? 350
                        : 400
                      : Dimensions.get('window').height > 913 &&
                        Dimensions.get('window').height < 914
                      ? 350
                      : Dimensions.get('window').height === 912 &&
                        Dimensions.get('window').width === 600
                      ? 350
                      : Dimensions.get('window').width > 533 &&
                        Dimensions.get('window').width < 534
                      ? 350
                      : Dimensions.get('window').width === 1168
                      ? 700
                      : 500,
                }}
                onValueChange={value =>
                  setForm({...form, activite: Number(value)})
                }
                renderThumbComponent={() => {
                  return (
                    <View style={Style.Thumb}>
                      <Text style={{color: 'rgb(154,35,43)'}}>
                        {form.activite}
                      </Text>
                    </View>
                  );
                }}
              />
              <Text style={{...Style.text, paddingLeft: '1%'}}>10</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop:
              orientation === 'PORTRAIT'
                ? Dimensions.get('window').width === 768
                  ? Dimensions.get('window').height === 1104
                    ? '4%'
                    : '2%'
                  : Dimensions.get('window').height > 913 &&
                    Dimensions.get('window').height < 914
                  ? '5%'
                  : Dimensions.get('window').height === 912 &&
                    Dimensions.get('window').width === 600
                  ? '4%'
                  : Dimensions.get('window').height === 976 &&
                    Dimensions.get('window').width === 600
                  ? '4%'
                  : Dimensions.get('window').width > 533 &&
                    Dimensions.get('window').width < 534
                  ? '4%'
                  : '6%'
                : '6%',
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            width: '84%',
          }}>
          {lg ? (
            <Text style={Style.text}>COMMENTAIRES ?</Text>
          ) : (
            <Text style={Style.text}>COMMENTS ?</Text>
          )}
          <TextInput
            style={Style.Area}
            multiline={true}
            onChangeText={val => setCommentaire(val)}
            maxLength={300}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop:
              Dimensions.get('window').width === 800
                ? '7%'
                : Dimensions.get('window').width === 900
                ? '5%'
                : Dimensions.get('window').width === 768
                ? Dimensions.get('window').height === 1104
                  ? '5%'
                  : '3%'
                : Dimensions.get('window').height > 913 &&
                  Dimensions.get('window').height < 914
                ? '4%'
                : Dimensions.get('window').height === 912 &&
                  Dimensions.get('window').width === 600
                ? '4%'
                : '7%',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexBasis: '30%',
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              name="left"
              style={{
                fontSize:
                  Dimensions.get('window').width > 1066 &&
                  Dimensions.get('window').width < 1067
                    ? 30
                    : Dimensions.get('window').width > 533 &&
                      Dimensions.get('window').width < 534
                    ? 20
                    : 25,
                color: 'rgb(154,35,43)',
                paddingRight:
                  Dimensions.get('window').height > 1650 &&
                  Dimensions.get('window').height < 1651
                    ? '3%'
                    : '1%',
              }}
            />
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => props.navigation.goBack()}>
              <Text style={Style.textB}>{lg ? 'RETOUR' : 'BACK'}</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexBasis: '63%'}}>
            <TouchableOpacity
              style={Style.ButtonBis}
              onPress={() => handleSubmit()}>
              <Text style={Style.text}>{lg ? 'VALIDER' : 'CONFIRM'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            marginTop:
              Dimensions.get('window').width === 800
                ? Dimensions.get('window').height === 1232
                  ? '1%'
                  : '4%'
                : Dimensions.get('window').width === 900
                ? Dimensions.get('window').height === 1224
                  ? '3%'
                  : '0%'
                : Dimensions.get('window').height > 913 &&
                  Dimensions.get('window').height < 914
                ? '1%'
                : Dimensions.get('window').height > 1650 &&
                  Dimensions.get('window').height < 1651
                ? Dimensions.get('window').width > 1066 &&
                  Dimensions.get('window').width < 1067
                  ? '5%'
                  : '1%'
                : Dimensions.get('window').height === 912
                ? '1%'
                : Dimensions.get('window').width === 1024
                ? '3%'
                : Dimensions.get('window').width === 720
                ? '5%'
                : Dimensions.get('window').height === 976
                ? '3%'
                : Dimensions.get('window').width > 533 &&
                  Dimensions.get('window').width < 534
                ? '1%'
                : '4%',
          }}>
          <Text
            style={{
              fontSize:
                Dimensions.get('window').width > 1066 &&
                Dimensions.get('window').width < 1067
                  ? 22
                  : Dimensions.get('window').width > 533 &&
                    Dimensions.get('window').width < 534
                  ? 14
                  : Dimensions.get('window').height > 1309 &&
                    Dimensions.get('window').height < 1310
                  ? 19
                  : Dimensions.get('window').width === 1168
                  ? 24
                  : 17,
              color: '#A99462',
              marginTop: orientation === 'PORTRAIT' ? '2.5%' : '5%',
              textDecorationColor: '#A99462',
              textDecorationLine: 'underline',
              fontFamily: 'advent-Bd2',
            }}>
            {lg ? 'Politique de confidentialité' : 'Privacy Policy'}
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            width: '100%',
            display: 'flex',
          }}></View>
      </View>
    </ScrollView>
  );
});

let Style = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:
      Dimensions.get('window').width > 650 &&
      Dimensions.get('window').width < 601
        ? 15
        : Dimensions.get('window').width === 800
        ? 17
        : Dimensions.get('window').height === 1224
        ? 17
        : Dimensions.get('window').height === 976
        ? Dimensions.get('window').width === 540
          ? 13
          : 15
        : Dimensions.get('window').width === 600
        ? 13
        : Dimensions.get('window').width > 533 &&
          Dimensions.get('window').width < 534
        ? 10
        : Dimensions.get('window').height > 1309 &&
          Dimensions.get('window').height < 1310
        ? 17
        : Dimensions.get('window').width === 1168
        ? 22
        : 17,
    textAlign: 'center',
    color: '#A99462',
    fontFamily: 'advent-Bd3',
  },
  textB: {
    fontSize:
      Dimensions.get('window').width > 1066 &&
      Dimensions.get('window').width < 1067
        ? 20
        : Dimensions.get('window').height === 976
        ? 15
        : Dimensions.get('window').width > 533 &&
          Dimensions.get('window').width < 534
        ? 13
        : Dimensions.get('window').width === 1168
        ? 25
        : 17,
    textAlign: 'center',
    color: 'rgb(154,35,43)',
    textDecorationColor: 'rgb(154,35,43)',
    textDecorationLine: 'underline',
    fontFamily: 'advent-Bd2',
  },
  Area: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width / 1.4,
    borderColor: 'black',
    borderWidth: 2,
    borderColor: '#A99462',
    marginTop: Dimensions.get('window').width === 1168 ? '6%' : '3%',
    textAlign: 'left',
    height: Dimensions.get('window').width === 1168 ? 150 : 90,
  },
  ButtonBis: {
    backgroundColor: 'white',
    width: '50%',
    padding: '4%',
    borderWidth: 2,
    borderColor: '#A99462',
  },
  Thumb: {
    width: 40,
    height: 40,
    overflow: 'hidden',
    borderRadius: 1000,
    backgroundColor: 'white',
    borderColor: '#A99462',
    borderWidth: 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default StepOne;
