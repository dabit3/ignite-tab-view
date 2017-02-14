# [React Native Tab View](https://github.com/react-native-community/react-native-tab-view) - [Ignite Plugin](https://github.com/infinitered/ignite)

## To get started

1. install plugin

```
ignite add tab-view
```

2. import and use [React Native Tab View](https://github.com/react-native-community/react-native-tab-view)

```
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class TabViewExample extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'First' },
      { key: '2', title: 'Second' },
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar {...props} />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <View style={[ styles.page, { backgroundColor: '#ff4081' } ]}>
        <Text>Hello from Tab View 1</Text>
      </View>
    case '2':
      return <View style={[ styles.page, { backgroundColor: '#673ab7' } ]}>
        <Text>Hello from Tab View 2</Text>
      </View>
    default:
      return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}

```