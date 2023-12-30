import React, {useState, useEffect} from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'grey'}}>
      <ScrollView>
      <View style={{marginHorizontal: 20, marginTop: 10}}>
      <TouchableOpacity 
      style={{
        backgroundColor: 'lightsteelblue', 
        paddingVertical: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
        }}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
          CELANA</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={{
        backgroundColor: 'lightsteelblue', 
        paddingVertical: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        elevation: 3
        }}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
          BAJU</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={{
        backgroundColor: 'lightsteelblue', 
        paddingVertical: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        elevation: 3
        }}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
          DRESS</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={{
        backgroundColor: 'lightsteelblue', 
        paddingVertical: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        elevation: 3
        }}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
          TOPI</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={{
        backgroundColor: 'lightsteelblue', 
        paddingVertical: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        elevation: 3
        }}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
         KACAMATA</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={{
        backgroundColor: 'lightsteelblue', 
        paddingVertical: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        elevation: 3
        }}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
          SEPATU</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={{
        backgroundColor: 'lightsteelblue', 
        paddingVertical: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        elevation: 3
        }}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
          AKSESORIS</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={{
        backgroundColor: 'lightsteelblue', 
        paddingVertical: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        elevation: 3
        }}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
          KERUDUNG</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={{
        backgroundColor: 'lightsteelblue', 
        paddingVertical: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        elevation: 3
        }}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
         TAS</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={{
        backgroundColor: 'lightsteelblue', 
        paddingVertical: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        elevation: 3
        }}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
          ROK</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={{
        backgroundColor: 'lightsteelblue', 
        paddingVertical: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        elevation: 3
        }}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
          SYAR'I</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={{
        backgroundColor: 'lightsteelblue', 
        paddingVertical: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        elevation: 3
        }}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
          HELLS</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}
export default App;