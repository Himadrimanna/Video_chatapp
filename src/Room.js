import React from 'react';
import { useParams } from 'react-router-dom';

import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
  const { roomID } = useParams();
  const meeting = async (element) => {
    const appID = 624651893;
    const serverSecret = 'ce8568c5b7ae901834ae50eb55f0ac27';
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      'himadri'
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };

  return <div ref={meeting} style={{ width: '100vw', height: '100vh' }}></div>;
};

export default Room;
