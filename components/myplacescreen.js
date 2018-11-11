import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  FlatList, 
  Button
} from "react-native";
import _ from 'lodash';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SearchBar} from 'react-native-elements';
const ITEM_WIDTH = Dimensions.get("window").width;
const ITEM_HEIGHT = Dimensions.get("window").height;

export default class MyPlaceScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return{
        title: 'My Places',
        // headerLeft: null,
        headerStyle: {
            backgroundColor: '#4C4949',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: (
            <Icon style={{textAlign: 'right', padding:15}} name="add-box" size={25} color="#fff" />
        ),
    }
    };
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.navigation.state.params.data,
            column: 1,
            key: 1,
            query: "",
            fullData: this.props.navigation.state.params.data,
        };
    }
    onSwipeRight(gestureState) {
        const { navigation } = this.props;
        navigation.navigate('Main');
      }   

    handleSearch = (text) =>{
        const data = _.filter(this.state.fullData, (lc) =>
        {return lc.restaurant.toLowerCase().indexOf(text.toLowerCase()) != -1 || lc.location.toLowerCase().indexOf(text.toLowerCase()) != -1})
        if (text == ""){
            this.setState({
                data: this.props.navigation.state.params.data
            })
        }else{
            this.setState({
                data: data
            });
        }
    };
    render() {
    const { navigation } = this.props;
    const { column, key } = this.state;
    const Bold = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    return (
        // <GestureRecognizer onSwipeRight={(state) => this.onSwipeRight(state)}>
        <View style={styles.container}>
        <SearchBar style={{ flex: 1}} placeholder="Filter..." lightTheme onChangeText={this.handleSearch}/>
        <FlatList
            data={this.state.data}
            keyExtractor={(x, i) => i}
            key={key}
            numColumns={column}
            renderItem={({ item }) => (
            <View style={{backgroundColor: '#DCDCDC', margin: 2, borderRadius: 5}}>
                <Text
                style={{
                    width: (ITEM_WIDTH - 5 * column) / column,
                    marginLeft: 2,
                    textAlign:'center'
                }}
                >
                <Bold>{item.restaurant}</Bold> {"\n"}@ {item.location}
                </Text>
            </View>
            )}
        />
        </View>
        // </GestureRecognizer>
    );
    }
    }

const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT,
    backgroundColor: "#fff",
  }
});
