import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from '../config';

const myIcon = (<Icon name="arrowleft" size={30} color="#900" />);
const config = require('../config.js');

export default Header = () => {
    return (
        <View style={styles.header}>
            {myIcon}
            <Image
                source={config.imgsPathes.logoInverse}
                style={styles.logoHeader} />
            {myIcon}
        </View>
    );
}