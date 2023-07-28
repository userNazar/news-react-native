import { StatusBar, View } from 'react-native';

import { store } from './store';
import { Provider } from 'react-redux';
import Navigation from './screens/Navigation';



export default function App() {

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar />
        <Navigation />
      </View>
    </Provider>
  );
}


