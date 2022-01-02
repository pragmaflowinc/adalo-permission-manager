#!/bin/bash

set -e
set -x

dir=$(dirname "${0}")
installMicrophone=$("${dir}/get_permission_requests.js" allowMicrophone) 
installCamera=$("${dir}/get_permission_requests.js" allowCamera) 

name=$PROJECT_NAME

if [ "$installMicrophone" = "true" ]; then
if grep -q "<key>NSMicrophoneUsageDescription" ios/$name/Info.plist; then
  echo "Mic already supported, nothing to do here."
else
  plutil -insert NSMicrophoneUsageDescription -string 'This app needs access to microphone to share your audio' ios/$name/Info.plist
fi
fi
if [ "$installCamera" = "true" ]; then
if grep -q "<key>NSCameraUsageDescription" ios/$name/Info.plist; then
  echo "Camera already supported, nothing to do here."
else
  plutil -insert NSCameraUsageDescription -string 'This app needs access to camera to share video' ios/$name/Info.plist
fi
fi
echo "configured iOS settings"