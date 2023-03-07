import { UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Input, Tooltip } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-item: center;
  border-bottom: 1px solid rgb(230, 230, 230);
  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__title {
      margin: 0;
      font-weight: bold;
    }

    &__description {
      font-size: 12px;
    }
  }
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0px;
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperStyled = styled.div`
  height: 100vh;
`;

const ContentStyled = styled.div`
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

export default function ChatWindow() {
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className='header__info'>
          <p className='header__title'>Room 1</p>
          <span className='header__description'>This is room 1</span>
        </div>
        <ButtonGroupStyled>
          <Button type='text' icon={<UserAddOutlined />}>
            Invite
          </Button>
          <Avatar.Group size='small' maxCount={2}>
            <Tooltip title='A'>
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title='B'>
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title='C'>
              <Avatar>C</Avatar>
            </Tooltip>
            <Tooltip title='D'>
              <Avatar>D</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          <Message
            text='Test message!'
            photoURL={null}
            displayName='Bray'
            createAt={123123123}
          />
          <Message
            text='Test message!'
            photoURL={null}
            displayName='Bray'
            createAt={123123123}
          />
          <Message
            text='Test message!'
            photoURL={null}
            displayName='Bray'
            createAt={123123123}
          />
          <Message
            text='Test message!'
            photoURL={null}
            displayName='Bray'
            createAt={123123123}
          />
        </MessageListStyled>
        <FormStyled>
          <Form.Item>
            <Input
              placeholder='Enter message...'
              bordered={false}
              autoComplete='off'
            />
          </Form.Item>
          <Button type='primary'>Send</Button>
        </FormStyled>
      </ContentStyled>
    </WrapperStyled>
  );
}
