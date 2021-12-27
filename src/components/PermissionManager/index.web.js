import React from "react";
import { Text, View } from 'react-native'
class PermissionManager extends React.Component {
  render() {
    if (this.props.editor) {
      return (
        <Text>Permission Manager Installed</Text>
      );
    }
    return <View />
  }
}

export default PermissionManager;
