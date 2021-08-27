import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';

let Remerciement = React.memo(function Remerciement(props) {
  let lg = useSelector(state => state.lang);

  let [satisfaction, setSatisfaction] = useState(false);

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

  let handleSubmit = () => {
    setSatisfaction(!satisfaction);
    props.navigation.navigate('List');
  };

  return (
    <View style={Style.container}>
      <Image
        source={require('../Image/bis.png')}
        style={{
          width:
            Dimensions.get('window').height > 913 &&
            Dimensions.get('window').height < 914
              ? 200
              : Dimensions.get('window').width === 540
              ? 170
              : Dimensions.get('window').height === 912 &&
                Dimensions.get('window').width === 600
              ? 210
              : Dimensions.get('window').width === 600
              ? 205
              : Dimensions.get('window').width > 533 &&
                Dimensions.get('window').width < 534
              ? 164
              : 260,
          height:
            Dimensions.get('window').height > 913 &&
            Dimensions.get('window').height < 914
              ? 100
              : Dimensions.get('window').width === 540
              ? 85
              : Dimensions.get('window').height === 912 &&
                Dimensions.get('window').width === 600
              ? 100
              : Dimensions.get('window').width === 600
              ? 100
              : Dimensions.get('window').width > 533 &&
                Dimensions.get('window').width < 534
              ? 79
              : 125,
          marginTop:
            orientation === 'PORTRAIT'
              ? Platform.OS === 'android'
                ? ww === 768
                  ? '1%'
                  : '1%'
                : '2%'
              : '2%',
        }}
      />

      <Image
        source={require('../Image/Logo.png')}
        style={{
          width:
            Dimensions.get('window').height === 976
              ? 420
              : Dimensions.get('window').height > 913 &&
                Dimensions.get('window').height < 914
              ? 400
              : Dimensions.get('window').width === 600
              ? 400
              : Dimensions.get('window').width === 1024
              ? 510
              : Dimensions.get('window').width === 720
              ? 500
              : Dimensions.get('window').height === 1104
              ? 500
              : Dimensions.get('window').width > 533 &&
                Dimensions.get('window').width < 534
              ? 350
              : 570,
          height:
            Dimensions.get('window').height === 976
              ? 330
              : Dimensions.get('window').height > 913 &&
                Dimensions.get('window').height < 914
              ? 300
              : Dimensions.get('window').width === 600
              ? 300
              : Dimensions.get('window').width === 1024
              ? 400
              : Dimensions.get('window').width === 720
              ? 350
              : Dimensions.get('window').height === 1104
              ? 350
              : Dimensions.get('window').width > 533 &&
                Dimensions.get('window').width < 534
              ? 250
              : 450,
          marginTop:
            Dimensions.get('window').width === 800
              ? '20%'
              : Dimensions.get('window').width === 900
              ? '25%'
              : Dimensions.get('window').height === 976
              ? '22%'
              : Dimensions.get('window').width === 600
              ? '23%'
              : '30%',
        }}
      />

      <View
        style={{
          marginTop:
            Dimensions.get('window').width === 900
              ? '0%'
              : Dimensions.get('window').height === 976
              ? '1%'
              : '2%',
        }}>
        <Text style={{textAlign: 'center'}}>
          <Text style={Style.text}>
            {lg ? 'Merci pour vos retours' : 'Thank you for your feedback'},
            {'\n'}
          </Text>
          <Text style={Style.textBis}>
            {lg
              ? 'vous pouvez redonner la tablette à la reception.'
              : 'you can return the tablet to reception.'}
          </Text>
        </Text>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            width: Dimensions.get('screen').width,
            flexDirection: 'row',
            marginTop:
              orientation === 'PORTRAIT'
                ? Platform.OS === 'android'
                  ? ww === 768
                    ? Dimensions.get('window').height === 976
                      ? '10%'
                      : Dimensions.get('window').height === 1104
                      ? '13%'
                      : '11%'
                    : ww === 800
                    ? Dimensions.get('window').height === 1292
                      ? '32%'
                      : Dimensions.get('window').height > 1285 &&
                        Dimensions.get('window').height < 1286
                      ? '31%'
                      : '25%'
                    : Dimensions.get('window').width > 600 &&
                      Dimensions.get('window').width < 601
                    ? Dimensions.get('window').height > 913 &&
                      Dimensions.get('window').height < 914
                      ? '15%'
                      : '30%'
                    : Dimensions.get('window').width === 900
                    ? '15%'
                    : Dimensions.get('window').width === 600
                    ? Dimensions.get('window').height === 976
                      ? '30%'
                      : Dimensions.get('window').height === 912
                      ? '21%'
                      : '11%'
                    : Dimensions.get('window').width === 1024
                    ? '15%'
                    : Dimensions.get('window').width === 720
                    ? '35%'
                    : Dimensions.get('window').width === 540
                    ? Dimensions.get('window').height === 976
                      ? '47%'
                      : '28%'
                    : Dimensions.get('window').height > 1650 &&
                      Dimensions.get('window').height < 1651
                    ? '39%'
                    : Dimensions.get('window').width > 533 &&
                      Dimensions.get('window').width < 534
                    ? '20%'
                    : Dimensions.get('window').width === 1168
                    ? '45%'
                    : '37%'
                  : '32%'
                : '2%',
          }}>
          <TouchableOpacity onPress={() => setSatisfaction(!satisfaction)}>
            <Image
              source={require('../Image/bis.png')}
              style={{
                transform: [{rotate: '180deg'}],
                width:
                  Dimensions.get('window').height > 913 &&
                  Dimensions.get('window').height < 914
                    ? 200
                    : Dimensions.get('window').width === 540
                    ? 170
                    : Dimensions.get('window').height === 912 &&
                      Dimensions.get('window').width === 600
                    ? 210
                    : Dimensions.get('window').width === 600
                    ? 205
                    : Dimensions.get('window').width > 533 &&
                      Dimensions.get('window').width < 534
                    ? 165
                    : 260,
                height:
                  Dimensions.get('window').height > 913 &&
                  Dimensions.get('window').height < 914
                    ? 100
                    : Dimensions.get('window').width === 540
                    ? 80
                    : Dimensions.get('window').height === 912 &&
                      Dimensions.get('window').width === 600
                    ? 100
                    : Dimensions.get('window').width === 600
                    ? 100
                    : Dimensions.get('window').width > 533 &&
                      Dimensions.get('window').width < 534
                    ? 80
                    : 125,
                marginTop:
                  orientation === 'PORTRAIT'
                    ? Platform.OS === 'android'
                      ? ww === 768
                        ? '1%'
                        : '1%'
                      : '2%'
                    : '2%',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        visible={satisfaction}
        transparent={true}
        supportedOrientations={['landscape', 'portrait']}>
        <View
          style={{
            marginTop: Dimensions.get('window').width === 540 ? '33%' : '24%',
            width: '100%',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={Style.text}>
            {' '}
            {lg ? 'ESPACE RÉSERVÉ' : 'PRIVATE SPACE'}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '50%',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={{
                backgroundColor: 'white',
                borderColor: '#A99462',
                borderWidth: 2,
                padding: '2%',
              }}>
              <Text style={Style.textBis}>{lg ? 'Continuer' : 'Continue'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSatisfaction(!satisfaction)}
              style={{
                backgroundColor: 'white',
                borderColor: '#A99462',
                borderWidth: 2,
                padding: '3%',
              }}>
              <Text style={Style.textBis}> {lg ? 'Annuler' : 'Cancel'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
});

let Style = StyleSheet.create({
  textBis: {
    fontSize:
      Dimensions.get('window').width > 600 &&
      Dimensions.get('window').width < 601
        ? 30
        : Dimensions.get('window').width === 800
        ? 35
        : Dimensions.get('window').width === 900
        ? 35
        : Dimensions.get('window').height === 976
        ? Dimensions.get('window').width === 600
          ? 25
          : Dimensions.get('window').width === 540
          ? 25
          : 35
        : Dimensions.get('window').width === 600
        ? 30
        : Dimensions.get('window').width === 1024
        ? 35
        : Dimensions.get('window').width === 720
        ? 30
        : Dimensions.get('window').height === 1104
        ? 35
        : Dimensions.get('window').width > 533 &&
          Dimensions.get('window').width < 534
        ? 24
        : 44,
    color: '#A99462',
    fontFamily: 'advent-Re',
    marginTop: '9%',
  },
  container: {
    display: 'flex',
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE7DC',
  },
  text: {
    fontSize:
      Dimensions.get('window').width > 600 &&
      Dimensions.get('window').width < 601
        ? 50
        : Dimensions.get('window').width === 800
        ? 65
        : Dimensions.get('window').width === 900
        ? 70
        : Dimensions.get('window').height === 976
        ? Dimensions.get('window').width === 600
          ? 50
          : Dimensions.get('window').width === 540
          ? 40
          : Dimensions.get('window').width === 768
          ? 50
          : 70
        : Dimensions.get('window').width === 600
        ? Dimensions.get('window').height === 912
          ? 50
          : 60
        : Dimensions.get('window').width === 1024
        ? 70
        : Dimensions.get('window').width === 720
        ? 60
        : Dimensions.get('window').height > 1650 &&
          Dimensions.get('window').height < 1651
        ? 80
        : Dimensions.get('window').height === 1104
        ? 65
        : Dimensions.get('window').width > 533 &&
          Dimensions.get('window').width < 534
        ? 44
        : 95,
    textAlign: 'center',
    color: '#A99462',
    fontFamily: 'advent-Bd2',
  },
});

export default Remerciement;
