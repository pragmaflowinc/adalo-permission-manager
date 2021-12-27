import React from "react";
import { Platform, View, Alert } from 'react-native'
import { checkMultiple, requestMultiple, PERMISSIONS } from "react-native-permissions";
class PermissionManager extends React.Component {
  componentDidMount() {
    if (Platform.OS === 'ios') {
      const permissions = []
      if (this.props.allowCamera) {
        permissions.push(PERMISSIONS.IOS.CAMERA)
      }
      if (this.props.allowMicrophone) {
        permissions.push(PERMISSIONS.IOS.MICROPHONE)
      }
      if (this.props.allowLocation) {
        permissions.push(PERMISSIONS.IOS.LOCATION_ALWAYS)
      }
      checkMultiple(permissions).then(statuses => {
      requestMultiple(permissions).then(results => {
        if (permissions.includes(PERMISSIONS.IOS.CAMERA)) {
          if (results[PERMISSIONS.IOS.CAMERA] === 'granted') {
            if (this.props.useCamera.onCameraPermissionSuccess) { this.props.useCamera.onCameraPermissionSuccess()}
          } else {
            if (this.props.useCamera.onCameraPermissionFailed) { this.props.useCamera.onCameraPermissionFailed(results[PERMISSIONS.IOS.CAMERA])}
          }
        }
        
        if (permissions.includes(PERMISSIONS.IOS.MICROPHONE)) {
          if (results[PERMISSIONS.IOS.MICROPHONE] === 'granted') {
            if (this.props.useMicrophone.onCameraPermissionSuccess) { this.props.useMicrophone.onMicPermissionSuccess()}
          } else {
            if (this.props.useMicrophone.onCameraPermissionFailed) { this.props.useMicrophone.onMicPermissionFailed(results[PERMISSIONS.IOS.CAMERA])}
          }
        }
        
        if (permissions.includes(PERMISSIONS.IOS.LOCATION_ALWAYS)) {
          if (results[PERMISSIONS.IOS.LOCATION_ALWAYS] === 'granted') {
            if (this.props.useLocation.onLocationPermissionSuccess) { this.props.useLocation.onLocationPermissionSuccess()}
          } else {
            if (this.props.useLocation.onLocationPermissionFailed) { this.props.useLocation.onLocationPermissionFailed(results[PERMISSIONS.IOS.CAMERA])}
          }
        }
      }).catch(error => {
      })
    }).catch(error => {
    })
    } else if (Platform.OS === 'android') {
      const permissions = []
      if (this.props.allowCamera) {
        permissions.push(PERMISSIONS.ANDROID.CAMERA)
      }
      if (this.props.allowMicrophone) {
        permissions.push(PERMISSIONS.ANDROID.RECORD_AUDIO)
      }
      if (this.props.allowLocation) {
        permissions.push(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
      }
      checkMultiple(permissions).then(statuses => {
        requestMultiple(permissions).then(results => {
          if (permissions.includes(PERMISSIONS.ANDROID.CAMERA)) {
            if (results[PERMISSIONS.ANDROID.CAMERA] === 'granted') {
              if (this.props.useCamera.onCameraPermissionSuccess) { this.props.useCamera.onCameraPermissionSuccess()}
            } else {
              if (this.props.useCamera.onCameraPermissionFailed) { this.props.useCamera.onCameraPermissionFailed(results[PERMISSIONS.ANDROID.CAMERA])}
            }
          }
                  
          if (permissions.includes(PERMISSIONS.ANDROID.RECORD_AUDIO)) {
            if (results[PERMISSIONS.ANDROID.RECORD_AUDIO] === 'granted') {
              if (this.props.useMicrophone.onMicPermissionSuccess) { this.props.useMicrophone.onMicPermissionSuccess()}
            } else {
              if (this.props.useMicrophone.onMicPermissionFailed) { this.props.useMicrophone.onMicPermissionFailed(results[PERMISSIONS.ANDROID.RECORD_AUDIO])}
            }
          }
          
          if (permissions.includes(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)) {
            if (results[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] === 'granted') {
              if (this.props.useLocation.onLocationPermissionSuccess) { this.props.useLocation.onLocationPermissionSuccess()}
            } else {
              if (this.props.useLocation.onLocationPermissionFailed) { this.props.useLocation.onLocationPermissionFailed(results[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION])}
            }
          }
        }).catch(error => {
        })
      }).catch(error => {
      })
    }
  }
  render() {
    return (
			<View />
    );
  }
}

export default PermissionManager;
