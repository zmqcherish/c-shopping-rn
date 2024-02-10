import React from 'react';
import { Button, View, Text } from 'react-native';

function SubCategoryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SubCategoryScreen Screen</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default SubCategoryScreen;
