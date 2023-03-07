import React from 'react';
import ChatWindow from './ChatWindow';
import SideBar from './SideBar';

import { Col, Row } from 'antd';

export default function ChatRoom() {
  return (
    <Row>
      <Col span={6}>
        <SideBar />
      </Col>
      <Col span={18}>
        <ChatWindow />
      </Col>
    </Row>
  );
}
