import { View, Text, StyleSheet } from 'react-native'

const about = () => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.text}>About My Coffee Shop</Text>
    </View>
  )
}

export default about

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})
