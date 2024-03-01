import React, { useState } from 'react';
import { View, Text, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { AudioRecorder, AudioUtils } from 'react-native-audio';

const VoiceRecorder = ({ onVoiceRecorded }) => {
  const [recording, setRecording] = useState(false);

  const requestAudioPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Audio Permission',
          message: 'This app needs access to your microphone for voice recording.',
        }
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const startRecording = async () => {
    if (await requestAudioPermission()) {
      const audioPath = AudioUtils.DocumentDirectoryPath + '/test.aac';

      AudioRecorder.prepareRecordingAtPath(audioPath, {
        SampleRate: 22050,
        Channels: 1,
        AudioQuality: 'Low',
        AudioEncoding: 'aac',
      });

      AudioRecorder.onProgress = (data) => {
        // You can show a recording duration indicator here
      };

      AudioRecorder.onFinished = (data) => {
        // This callback is called when recording finishes
        onVoiceRecorded(audioPath);
      };

      AudioRecorder.startRecording();
      setRecording(true);
    }
  };

  const stopRecording = () => {
    if (recording) {
      AudioRecorder.stopRecording();
      setRecording(false);
    }
  };

  return (
    <View>
      <Text>Voice Recorder</Text>
      {recording ? (
        <TouchableOpacity onPress={stopRecording}>
          <Text>Stop Recording</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={startRecording}>
          <Text>Start Recording</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VoiceRecorder;
