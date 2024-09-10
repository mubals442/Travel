import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { style } from './style'

const Favorite = () => {
  return (
    <SafeAreaView
      style={style.Favorite.SafeAreaView}>
      <Text style={style.Favorite.Text}>Favorite</Text>
    </SafeAreaView>
  )
}

export default Favorite