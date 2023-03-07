import { PlusSquareOutlined } from '@ant-design/icons';
import { Button, Collapse, Typography } from 'antd';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../Context/AppProvider';

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }
    .ant-collapse-content-box {
      padding: 0 40px;
    }
    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: while;
  flex-direction: column;
`;

export default function RoomList() {
  const { rooms } = useContext(AppContext);

  return (
    <Collapse ghost defaultActiveKey={['1']}>
      <PanelStyled header='List room' key='1'>
        {rooms.map((room) => (
          <LinkStyled key={room.id}>room.name</LinkStyled>
        ))}
        <Button type='text' icon={<PlusSquareOutlined />} className='add-room'>
          Add Room
        </Button>
      </PanelStyled>
    </Collapse>
  );
}
