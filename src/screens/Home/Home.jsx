import { View, Modal, Text, Image, FlatList, Pressable } from 'react-native';
// import { Icon } from 'react-native-elements'
// const i18n = require('i18n');
import styles from './style';

export default function App() {

  const openModal = () => {

  }

  return (
    <View style={styles.container}>
      <Modal>

      </Modal>
      <View style={styles.header}>
        <Text style={styles.title}>Documents</Text>
        <Text>a</Text>
      </View>
      <View>
        <View>
        </View>
        <FlatList />
      </View>
      <View>
        <Pressable>
          <Text>Add doc</Text>
        </Pressable>
      </View>
    </View>
  );
}
