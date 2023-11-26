import React, { Component } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: '',
      dataMovie: []
    };
  }

  ambilData = () => {
    fetch('http://www.omdbapi.com/?apikey=fed3f0d6&s=' + this.state.searchData)
    .then((response) => response.json())
    .then((json) => this.setState({dataMovie:json.Search},()=>console.log(json)))
    .catch((err) => console.log(err))
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ 
          flex: 1, backgroundColor: 'blue', justifyContent: 'center',
          alignItems: 'center' 
        }}>

         <Text style={{
           color: 'black', fontSize: 24, fontWeight: 'bold'
         }}>Nonton Movie</Text>


        </View>

          <View style={{flex: 7}}>
          <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', 
        justifyContent: 'center', alignItems: 'flex-start', marginTop: 10 }}>
          <View>
          <TextInput
            placeholder='cari movie'
            onChangeText = {(value) => this.setState({searchData : value})}
            style={{
              marginHorizontal: 20, paddingHorizontal: 10,
              borderBottomColor: 'black',
              borderBottomWidth: 2,
              width: 200
            }}

          />
          </View>
          <View>
            <TouchableOpacity style={{
              backgroundColor: 'black',
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderRadius: 10,
              elevation: 5
            }}
              onPress={() => this.ambilData()}
            >
              <Text style={{color: 'white' }}>Cari</Text>
            </TouchableOpacity>
          </View>
       </View>

       </View>

       <FlatList
              data={this.state.dataMovie}
              keyExtractor={(item) =>item.imdbID}
              renderItem={({item,index}) => (
                <View style={{ marginTop: 10 }}>
                  <Text>{item.Title}</Text>
                  <Text>{item.Year}</Text>
                </View>
              )}
            />
          </View>
    );
  }
}

export default App;