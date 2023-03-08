import { Form, Input, Modal } from 'antd/es';
import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppProvider';
import { AuthContext } from '../../Context/AuthProvider';
import { addDocument } from '../../firebase/services';

export default function AddRoomModal() {
  const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
  const {
    user: { uid },
  } = useContext(AuthContext);

  const [form] = Form.useForm();

  const handleOk = () => {
    //handle add new room to firestore
    addDocument('rooms', { ...form.getFieldsValue(), members: [uid] });
    form.resetFields();
    setIsAddRoomVisible(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsAddRoomVisible(false);
  };

  return (
    <div>
      <Modal
        title='Add room'
        open={isAddRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout='vertical'>
          <Form.Item label='Name' name='name'>
            <Input placeholder='Enter room name...' autoComplete='off' />
          </Form.Item>
          <Form.Item label='Description' name='description'>
            <Input.TextArea
              placeholder='Enter room description...'
              autoComplete='off'
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
