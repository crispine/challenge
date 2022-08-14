import { View, Modal, Text, Image, FlatList, Pressable } from 'react-native';
import i18n from '../../i18n/i18n';
// import { Icon } from 'react-native-elements'
const i18n = require('i18n');
import styles from './style';

export default function App() {

  const openModal = () => {

  }

  return (
    <View style={styles.container}>
      <Modal>

      </Modal>
      <View>
        <Text style={styles.title}>Documents</Text>
        <Image />
      </View>
      <View>
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
