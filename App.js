import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Link,
  Image
} from 'react-native'

const API = 'AIzaSyDnjpkosVmLvFWRekZrbm_sqabwMc-jKdM'
const channelID = 'UCY9CS-5Fh9K-4SUN4sdLq6Q'
const result = 10

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

const Youtube = ({ action, resource }) => (
  <TouchableOpacity onPress={action} style={{ width: 100, height: 50 }}>
    <View>
      <Image
        style={{ width: 100, height: 50 }}
        resizeMode="contain"
        source={resource.image}
      />
    </View>
  </TouchableOpacity>
)

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      resultyt: [],
      resultThumnails: []
    }
  }

  clicked() {
    alert(1)
  }

  componentDidMount = async () => {
    await fetch(finalURL)
      .then(response => response.json())
      .then(responseJson => {
        const resultyt = responseJson.items.map(
          obj => 'https://www.youtube.com/watch?v=' + obj.id.videoId
        )
        const resultThumnails = responseJson.items.map(
          obj => obj.snippet.thumbnails.default.url
        )
        this.setState({ resultyt })
        console.log(this.state.resultyt)
        this.setState({ resultThumnails })
        console.log(resultThumnails)
        // console.log(responseJson)
      })
      .catch(error => {
        console.log(error)
      })
  }

  onPressLink = () => {}

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        {/* <iframe src="https://youtu.be/c6t3bW7kx6E" /> */}
        {/* <TouchableOpacity onPress={this.clicked}>
        </TouchableOpacity> */}
        {/* <Youtube
          action={this.clicked}
          resource={{
            uri: 'https://i.ytimg.com/vi/VbRki_THeuU/default.jpg'
          }}
        /> */}
        <View style={{ width: 150, height: 100 }}>
          <Text>asd</Text>
          {this.state.resultThumnails.map((obj, i) => (
            // let thumbnails = (
            <Image
              style={{ width: 150, height: 100 }}
              key={i}
              source={{ uri: obj }}
            />
            // )
            // return thumbnails
          ))}
        </View>
        {/* {this.thumbnails} */}
        {/* <Image
          source={{ uri: 'https://i.ytimg.com/vi/P9mErYnKHMw/default.jpg' }}
        /> */}
        {/* {this.state.resultyt.map((link, i) => {})} */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})
