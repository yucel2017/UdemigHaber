import { View, Text, Image, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { News } from '../utils/data'
import Seperator from '../components/Seperator';

export default function NewsPage() {
  return (

    <View style={styles.container} >

      <SafeAreaView>
        <FlatList
          data={News}
          renderItem={({ item }) => (
            <View style={styles.NewsContainer} >
              <Image style={styles.img} source={item.imgUrl} />

              <View style={styles.TextContainer} >

                <Text style={styles.baslik} > {item.baslik} </Text>
                <Text style={styles.icerik} > {item.icerik} </Text>

              </View>

            </View>
          )
          }

          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => Seperator()}
        />

      </SafeAreaView>

    </View>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  NewsContainer: {
    flexDirection: 'column',
    padding: 10,
    marginTop: 40,
  },

  img:
  {
    width: 410,
    height: 230,
  },

  TextContainer: 
  {
    gap: 5,
    marginTop: 5,
  },

  baslik: 
  {
    fontWeight: 'bold',
    fontSize: 25
  },

  icerik:
  {
    fontSize: 20
  }


})