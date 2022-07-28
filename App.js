import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {RNCamera, FaceDetector} from 'react-native-camera';

const App = () => {
  const [facelock, setfacelock] = useState(true);

  return (
    <View

    // style={{
    //   flex: 1,
    //   flexDirection: 'column',
    //   backgroundColor: 'black',
    // }}
    >
      <RNCamera
        style={{
          flex: 0,
          backgroundColor: '#fff',
          borderRadius: 5,
          padding: 15,
          paddingHorizontal: 20,
          alignSelf: 'center',
          margin: 20,
        }}
        faceDetectionClassifications={
          RNCamera.Constants.FaceDetection.Classifications.all
        }
        faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
        onFacesDetected={face => {
          
          if (face.faces.length > 0) {
            // setfacelock(face.faces.length === 1);
            // alert(JSON.stringify(face));
            alert('heelo')
          } 
          // else if (face.faces.length > 1) {
          //   setfacelock(face.faces.length > 1);
          //   alert(JSON.stringify(face));
          // } else if (face.faces.length === 0) {
          //   setfacelock(face.faces.length === 0);
          //   alert(JSON.stringify(face));
          // }
          // else{
          //   alert(JSON.stringify(face));
          // }
        }}
      />
    </View>
  );
};
export default App;
