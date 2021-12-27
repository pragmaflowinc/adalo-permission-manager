#!/bin/bash

set -e
set -x


dir=$(dirname "${0}")

installMicrophone=$("${dir}/get_permission_requests.js" allowMicrophone) 
installCamera=$("${dir}/get_permission_requests.js" allowCamera) 

# AndroidManifest
cd android/app
cd src/main

if [ "$installMicrophone" = "true" ]; then
  echo installMicrophone

cat <<EOF > /tmp/adalo-sed
    /android.permission.INTERNET/a\\
    <uses-permission android:name="android.permission.RECORD_AUDIO" />\
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />\\
EOF

sed -i.bak "$(cat /tmp/adalo-sed)" AndroidManifest.xml

fi

if [ "$installCamera" = "true" ]; then
  echo installCamera
cat <<EOF > /tmp/adalo-sed
    /android.permission.INTERNET/a\\
  <uses-permission android:name="android.permission.CAMERA" />\\
EOF

sed -i.bak "$(cat /tmp/adalo-sed)" AndroidManifest.xml
fi


echo "configured Android settings"