import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as ACTIONS from './Actions';

let Home = React.memo(function Home(props) {
  let dispatch = useDispatch();

  let lg = useSelector(state => state.lang);

  let [orientation, setOrientation] = useState(null);

  let h = Dimensions.get('window').height;
  let w = Dimensions.get('window').width;

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
    if (w < h) {
      setOrientation('PORTRAIT');
    } else {
      setOrientation('LANDSCAPE');
    }
  }, [w, h]);

  let handleSubmit = () => {
    dispatch(ACTIONS.English(true)).then(() => {
      props.navigation.navigate('StepOne');
    });
  };

  let handleSubmitB = () => {
    dispatch(ACTIONS.English(false)).then(() => {
      props.navigation.navigate('StepOne');
    });
  };

  return (
    <View style={Style.container}>
      <Image
        source={require('../Image/Logo.png')}
        style={{
          width:
            Dimensions.get('window').height > 1650 &&
            Dimensions.get('window').height < 1651
              ? 700
              : Dimensions.get('window').width === 1168
              ? 700
              : 400,
          height:
            Dimensions.get('window').height > 1650 &&
            Dimensions.get('window').height < 1651
              ? 500
              : Dimensions.get('window').width === 1168
              ? 500
              : 300,
          marginTop:
            orientation === 'PORTRAIT'
              ? Platform.OS === 'ios'
                ? '15%'
                : w === 768
                ? '10%'
                : Dimensions.get('window').height > 913 &&
                  Dimensions.get('window').height < 914
                ? '10%'
                : '15%'
              : '15%',
        }}
      />
      <View
        style={{
          marginTop:
            orientation === 'PORTRAIT'
              ? Platform.OS === 'android'
                ? w === 768
                  ? Dimensions.get('window').height === 976
                    ? '0%'
                    : '5%'
                  : w === 600
                  ? '0%'
                  : w > 600 && w < 601
                  ? Dimensions.get('window').height > 913 &&
                    Dimensions.get('window').height < 914
                    ? '0%'
                    : '2%'
                  : Dimensions.get('window').height > 1650 &&
                    Dimensions.get('window').height < 1651
                  ? '4%'
                  : Dimensions.get('window').width === 900
                  ? '6%'
                  : Dimensions.get('window').width === 540
                  ? '0%'
                  : Dimensions.get('window').width > 533 &&
                    Dimensions.get('window').width < 534
                  ? '2%'
                  : '10%'
                : '10%'
              : '10%',
          width: '100%',
        }}>
        <TouchableOpacity onPress={() => handleSubmit()}>
          <View style={{alignContent: 'center', alignItems: 'center'}}>
            <Text style={Style.text}>Bonjour</Text>
            <View
              style={{
                marginTop: '3%',
                backgroundColor: 'white',
                width:
                  w > 600 && w < 601
                    ? '60%'
                    : Dimensions.get('window').height === 912
                    ? '60%'
                    : Dimensions.get('window').height === 976
                    ? Dimensions.get('window').width === 768
                      ? '50%'
                      : '60%'
                    : '50%',
                height:
                  Dimensions.get('window').height > 1650 &&
                  Dimensions.get('window').height < 1651
                    ? 70
                    : Dimensions.get('window').width === 1168
                    ? 50
                    : 45,
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../Image/27099.jpg')}
                  style={{
                    width:
                      Dimensions.get('window').width > 533 &&
                      Dimensions.get('window').width < 534
                        ? 30
                        : 40,
                    height:
                      Dimensions.get('window').width > 533 &&
                      Dimensions.get('window').width < 534
                        ? 20
                        : 30,
                    position: 'absolute',
                    marginLeft: '5%',
                  }}
                />
                <Text style={Style.textBis}>FORMULAIRE DE SATISFACTION</Text>
              </View>
            </View>
            <Text style={Style.B}>Aidez-nous à nous améliorer !</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSubmitB()}>
          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              marginTop: '8%',
            }}>
            <Text style={Style.text}>Welcome</Text>
            <View
              style={{
                marginTop: '3%',
                backgroundColor: 'white',
                width:
                  w > 600 && w < 601
                    ? '60%'
                    : Dimensions.get('window').height === 912
                    ? '60%'
                    : Dimensions.get('window').height === 976
                    ? Dimensions.get('window').width === 768
                      ? '50%'
                      : '60%'
                    : '50%',
                height:
                  Dimensions.get('window').height > 1650 &&
                  Dimensions.get('window').height < 1651
                    ? 70
                    : Dimensions.get('window').width === 1168
                    ? 50
                    : 45,
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Image
                  source={require('../Image/18166.jpg')}
                  style={{
                    width:
                      Dimensions.get('window').width > 533 &&
                      Dimensions.get('window').width < 534
                        ? 40
                        : 60,
                    height:
                      Dimensions.get('window').width > 533 &&
                      Dimensions.get('window').width < 534
                        ? 20
                        : 30,
                    marginLeft:
                      orientation === 'PORTRAIT'
                        ? Platform.OS === 'ios'
                          ? '43%'
                          : w === 768
                          ? '41%'
                          : Dimensions.get('window').height === 1292
                          ? Dimensions.get('window').width === 800
                            ? '40%'
                            : '43%'
                          : Dimensions.get('window').width === 900
                          ? '38%'
                          : Dimensions.get('window').width === 800
                          ? '43%'
                          : Dimensions.get('window').height > 913 &&
                            Dimensions.get('window').height < 914
                          ? '42%'
                          : Dimensions.get('window').height === 912
                          ? '40%'
                          : Dimensions.get('window').width === 1024
                          ? '42%'
                          : Dimensions.get('window').width === 720
                          ? '41%'
                          : Dimensions.get('window').height === 976
                          ? Dimensions.get('window').width === 540
                            ? '42%'
                            : '40%'
                          : Dimensions.get('window').width > 533 &&
                            Dimensions.get('window').width < 534
                          ? '42%'
                          : Dimensions.get('window').width === 1168
                          ? '42%'
                          : '37%'
                        : '10%',
                  }}
                />
                <Text style={Style.textBBis}>SATISFACTION SURVEY</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <Text style={Style.B}>Help us improve !</Text>
      </View>
    </View>
  );
});

let Style = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#EEE7DC',
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize:
      Dimensions.get('window').height === 1232
        ? 80
        : Dimensions.get('window').height > 1650 &&
          Dimensions.get('window').height < 1651
        ? 100
        : Dimensions.get('window').width === 600
        ? 60
        : Dimensions.get('window').height === 976 &&
          Dimensions.get('window').width === 540
        ? 50
        : Dimensions.get('window').width === 768
        ? 60
        : Dimensions.get('window').height > 913 &&
          Dimensions.get('window').height < 914
        ? 50
        : Dimensions.get('window').width > 533 &&
          Dimensions.get('window').width < 534
        ? 40
        : 80,
    textAlign: 'center',
    color: '#A99462',
    fontFamily: 'advent-Bd3',
  },
  textBis: {
    fontSize:
      Dimensions.get('window').height > 1650 &&
      Dimensions.get('window').height < 1651
        ? 27
        : Dimensions.get('window').width === 900
        ? 22
        : Dimensions.get('window').width > 533 &&
          Dimensions.get('window').width < 534
        ? 14
        : Dimensions.get('window').width === 1168
        ? 23
        : 17,
    textAlign: 'center',
    color: '#A99462',
    fontFamily: 'advent-Bd3',
    marginLeft:
      Dimensions.get('window').width === 540
        ? '20%'
        : Dimensions.get('window').width > 533 &&
          Dimensions.get('window').width < 534
        ? '18%'
        : '14%',
  },
  textBBis: {
    fontSize:
      Dimensions.get('window').height > 1650 &&
      Dimensions.get('window').height < 1651
        ? 27
        : Dimensions.get('window').width === 900
        ? 22
        : Dimensions.get('window').width > 533 &&
          Dimensions.get('window').width < 534
        ? 14
        : Dimensions.get('window').width === 1168
        ? 23
        : 17,
    color: '#A99462',
    fontFamily: 'advent-Bd3',
    width: '100%',
    marginLeft:
      Dimensions.get('window').height > 1650 &&
      Dimensions.get('window').height < 1651
        ? '45%'
        : Dimensions.get('window').width === 900
        ? '48%'
        : Dimensions.get('window').width === 800
        ? '53%'
        : Dimensions.get('window').height > 913 &&
          Dimensions.get('window').height < 914
        ? '50%'
        : Dimensions.get('window').height === 912
        ? '45%'
        : Dimensions.get('window').width === 720
        ? '48%'
        : Dimensions.get('window').height === 976
        ? '49%'
        : Dimensions.get('window').width > 533 &&
          Dimensions.get('window').width < 534
        ? '48%'
        : Dimensions.get('window').width === 1168
        ? '57%'
        : '55%',
    position: 'relative',
  },
  B: {
    fontSize:
      Dimensions.get('window').height > 1650 &&
      Dimensions.get('window').height < 1651
        ? 30
        : Dimensions.get('window').width > 533 &&
          Dimensions.get('window').width < 534
        ? 15
        : 24,
    textAlign: 'center',
    color: '#A99462',
    fontFamily: 'advent-Re',
    marginTop: '3%',
  },
});

export default Home;
