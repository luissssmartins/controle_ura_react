import React from 'react';

import { Connector } from 'mqtt-react-hooks';
import BasicControl from './components/BasicControl';
import RobotStatus from './components/RobotStatus';


export default function URAMQTTControl(props) {
  console.log("props " + props.outputTopic)
  return (
    <div>
      <Connector brokerUrl="ws://10.6.3.134:1884" options={{ keepalive: 0 }} >
        <BasicControl topic={props.inputTopic} />
        <RobotStatus topic={props.outputTopic} />
      </Connector>
    </div>
  );
}