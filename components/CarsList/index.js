import React from 'react';
import { Text, View, FlatList, Dimensions } from 'react-native';
import Caritem from '../Caritem';

import styles from './styles';
import cars from './cars';

const CarsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={cars}
                renderItem={({item}) => <Caritem car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'normal'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

export default CarsList;