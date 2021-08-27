import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import * as ACTIONS from './Actions';
import Icon from 'react-native-vector-icons/AntDesign';

let List = React.memo(function List(props) {
  let data = useSelector(state => state.questionnaireBis);

  let lg = useSelector(state => state.lang);

  let [dataB, setDatB] = useState(null);

  let dispatch = useDispatch();

  useEffect(() => {
    setDatB(data);
  }, []);

  let handleDelete = async data => {
    let d = dataB.slice();

    let index = d.findIndex(
      x => x.date === data.date && x.heure === data.heure,
    );

    d.splice(index, 1);

    setDatB(d);

    dispatch(ACTIONS.Delete(d));
  };

  let renderItem = data => {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
          backgroundColor: 'white',
          alignContent: 'center',
          height:
            Dimensions.get('window').width > 533 &&
            Dimensions.get('window').width < 534
              ? 70
              : 100,
          alignItems: 'center',
          borderColor: '#A99462',
          borderWidth: 1,
          marginBottom: '3%',
        }}>
        <Text style={Style.text}>
          <Text>Date : </Text> {data.item.date}
        </Text>
        <Text style={Style.text}>
          <Text>{lg ? 'Heure :' : 'Hours :'} </Text>
          {data.item.heure}
        </Text>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('StepTwo', {
              data: data.item,
              index: data.index,
            })
          }>
          <Icon
            name="form"
            style={{
              fontSize: Dimensions.get('window').width === 1168 ? 50 : 35,
              color: 'green',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(data.item)}>
          <Icon
            name="close"
            style={{
              fontSize: Dimensions.get('window').width === 1168 ? 50 : 35,
              color: 'rgb(154,35,43)',
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={Style.container}>
      <View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={{
            backgroundColor: 'white',
            borderRadius: 900,
            margin: '2%',
          }}>
          <Image
            source={require('../Image/Logo.png')}
            style={{
              width: Dimensions.get('window').width === 1168 ? 90 : 60,
              height: Dimensions.get('window').width === 1168 ? 90 : 60,
            }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={dataB}
        renderItem={renderItem}
        key={(items, index) => {
          return index;
        }}
        numColumns={1}
      />
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
    justifyContent: 'center',
  },
  text: {
    fontSize:
      Dimensions.get('window').height > 913 &&
      Dimensions.get('window').height < 914
        ? 20
        : Dimensions.get('window').width === 600
        ? 17
        : Dimensions.get('window').width === 540
        ? 17
        : Dimensions.get('window').width > 533 &&
          Dimensions.get('window').width < 534
        ? 15
        : Dimensions.get('window').width > 1066 &&
          Dimensions.get('window').width < 1067
        ? 23
        : Dimensions.get('window').width === 1168
        ? 28
        : 22,
    color: '#A99462',
    fontFamily: 'advent-Regular',
  },
});

export default List;
