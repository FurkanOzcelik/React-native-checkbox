import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

const Checkbox = ({onPress = () => {}, checked = false}) => {
  const tick = checked ? (
    <FontAwesomeIcon size={40} color={'black'} icon={faCheck} />
  ) : (
    <FontAwesomeIcon
      size={40}
      style={{opacity: 0.0}}
      color={'white'}
      icon={faCheck}
    />
  );

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={onPress} style={styles.wrapper}>
        {tick}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
  },
});

export default Checkbox;
