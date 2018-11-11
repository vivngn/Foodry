import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  FlatList, 
  Button,
} from "react-native";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
const ITEM_WIDTH = Dimensions.get("window").width;
const ITEM_HEIGHT = Dimensions.get("window").height;

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    img:
                    "https://pixabay.com/get/ed3cb00b2af11c22d2524518b74d4695e475e0d118ac104491f1c97ba1e5bcbb_1280.jpg",
                    location: "4635 Kingsway, Burnaby, BC V5H 4L3",
                    food_name: "Sushi",
                    cost: "$8.99",
                    restaurant: "Sushi Garden"
                },
                {
                    img: "https://pixabay.com/get/ea31b70620f11c22d2524518b74d4695e475e0d118ac104491f1c97ba1e9b7b9_1280.jpg",
                    location: "6082 Fraser St, Vancouver, BC V5W 2Z7",
                    food_name: "Pizza",
                    cost: "$15.99", 
                    restaurant: "Pizza Hut"
                },
                {
                    img:
                    "https://pixabay.com/get/ed3cb00b2af11c22d2524518b74d4695e475e0d118ac104491f1c97ba1e5bcbb_1280.jpg",
                    location: "4635 Kingsway, Burnaby, BC V5H 4L3",
                    food_name: "Sushi",
                    cost: "$8.99",
                    restaurant: "Sushi Garden"
                },
                {
                    img: "https://pixabay.com/get/ea31b70620f11c22d2524518b74d4695e475e0d118ac104491f1c97ba1e9b7b9_1280.jpg",
                    location: "6082 Fraser St, Vancouver, BC V5W 2Z7",
                    food_name: "Pizza",
                    cost: "$15.99", 
                    restaurant: "Pizza Hut"
                },
                {
                    img:
                    "https://pixabay.com/get/ed3cb00b2af11c22d2524518b74d4695e475e0d118ac104491f1c97ba1e5bcbb_1280.jpg",
                    location: "4635 Kingsway, Burnaby, BC V5H 4L3",
                    food_name: "Sushi",
                    cost: "$8.99",
                    restaurant: "Sushi Garden"
                },
                {
                    img: "https://pixabay.com/get/ea31b70620f11c22d2524518b74d4695e475e0d118ac104491f1c97ba1e9b7b9_1280.jpg",
                    location: "6082 Fraser St, Vancouver, BC V5W 2Z7",
                    food_name: "Pizza",
                    cost: "$15.99", 
                    restaurant: "Pizza Hut"
                }, {
                    img:
                    "https://pixabay.com/get/ed3cb00b2af11c22d2524518b74d4695e475e0d118ac104491f1c97ba1e5bcbb_1280.jpg",
                    location: "4635 Kingsway, Burnaby, BC V5H 4L3",
                    food_name: "Sushi",
                    cost: "$8.99",
                    restaurant: "Sushi Garden"
                },
                {
                    img: "https://pixabay.com/get/ea31b70620f11c22d2524518b74d4695e475e0d118ac104491f1c97ba1e9b7b9_1280.jpg",
                    location: "6082 Fraser St, Vancouver, BC V5W 2Z7",
                    food_name: "Pizza",
                    cost: "$15.99", 
                    restaurant: "Pizza Hut"
                }, {
                    img:
                    "https://pixabay.com/get/ed3cb00b2af11c22d2524518b74d4695e475e0d118ac104491f1c97ba1e5bcbb_1280.jpg",
                    location: "4635 Kingsway, Burnaby, BC V5H 4L3",
                    food_name: "Sushi",
                    cost: "$8.99",
                    restaurant: "Sushi Garden"
                },
                {
                    img: "https://pixabay.com/get/ea31b70620f11c22d2524518b74d4695e475e0d118ac104491f1c97ba1e9b7b9_1280.jpg",
                    location: "6082 Fraser St, Vancouver, BC V5W 2Z7",
                    food_name: "Pizza",
                    cost: "$15.99", 
                    restaurant: "Pizza Hut"
                },
                ],
            column: 2,
            key: 1,
        }
    }
    static navigationOptions = ({ navigation }) => {
        return{
        title: 'My Foodry',
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
    onSwipeLeft(gestureState) {
        const { navigation } = this.props;
        navigation.navigate('MyPlace',{data: this.state.data});
      }
    render() {
    const { column, key } = this.state;
    const { navigation } = this.props;
    const Bold = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    return (
        <View style={styles.container}>
        {/* <GestureRecognizer onSwipeLeft={(state) => this.onSwipeLeft(state)}> */}
        <Button
            title= "My Places"
            onPress={() => {
                navigation.navigate('MyPlace',{data: this.state.data});
        }}
                />
        <FlatList
            data={this.state.data}
            keyExtractor={(x, i) => i}
            key={key}
            numColumns={column}
            renderItem={({ item }) => (
            <View style={{backgroundColor: '#DCDCDC', margin: 2, borderRadius: 5}}>
                <Image
                style={{
                    width: (ITEM_WIDTH - 5 * column) / column,
                    height: (ITEM_WIDTH - 5 * column) / column,
                    margin: 2,
                    borderRadius: 5
                }}
                source={{ uri: item.img }}
                />
                <Text
                style={{
                    width: (ITEM_WIDTH - 5 * column) / column,
                    marginLeft: 2,
                    textAlign:'center'
                }}
                >
                <Bold>{item.food_name}</Bold> --- {item.cost} @ {item.restaurant}
                </Text>
            </View>
            )}
        />
        {/* </GestureRecognizer> */}
        </View>
    );
    }
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
