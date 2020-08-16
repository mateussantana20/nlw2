import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { RectButton } from 'react-native-gesture-handler'

import styles from './styles';

import LandingImg from '../../assets/images/landing.png'
import study from '../../assets/images/icons/study.png'
import giveClasses from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

import api from '../../services/api';

export default function Landing() {
  const [ totalConnections, setTotalConnections ] = useState(0);

  const { navigate } = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigaToStudyPages() {
    navigate('Study')
  }

  useEffect(() => {
    api.get('/connections').then(response => {
      const { total } = response.data

      setTotalConnections(total);
    })
  }, [])

  return (
    <View style={styles.container}>
      <Image style={styles.banner} source={LandingImg}/>

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton 
          onPress={handleNavigaToStudyPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={study}/>

          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton 
          onPress={handleNavigateToGiveClassesPage} 
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClasses}/>

          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões já realizadas {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}