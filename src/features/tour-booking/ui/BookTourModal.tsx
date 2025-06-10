import React from "react";
import { Modal, Form, Input, Button, message } from "antd";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { closeModal, updateFormField, resetForm, submitForm, selectBookingState} from "../model/bookingSlice"
import { validateForm } from "../lib/validateform";

export const BookTourModal: React.FC = () => {
    const dispatch = useAppDispatch();
    const {isModalOpen, selectedTourID, form} = useAppSelector(selectBookingState);
    const [messageApi, contextHolder] = message.useMessage();
    
    const handleFieldChange = (field: keyof typeof form) => 
        (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(updateFormField({ field, value: e.target.value }));
        };

    const handleSubmit = () => {
        const errors = validateForm(form);
    
        if (errors) {
            messageApi.error(errors);
            return;
        }

        dispatch(submitForm());
        messageApi.success('Заявка отправлена!');
    };

    const handleClose = () => {
        dispatch(closeModal());
        dispatch(resetForm());
    };
    return (
        <>
        {contextHolder}
        <Modal
            title={`Бронирование тура #${selectedTourID}`}
            open={isModalOpen}
            onCancel={handleClose}
            footer={[
            <Button key="cancel" onClick={handleClose}>
                Отмена
            </Button>,
            <Button key="submit" type="primary" onClick={handleSubmit}>
                Отправить
            </Button>,
            ]}
        >
            <Form layout="vertical">
                <Form.Item label="Имя">
                    <Input 
                        value={form.name}
                        onChange={handleFieldChange('name')}
                    />
                </Form.Item>
                <Form.Item label="Телефон">
                    <Input 
                        value={form.phone}
                        onChange={handleFieldChange('phone')}
                    />
                </Form.Item>
                <Form.Item label="Email">
                    <Input 
                        type="email"
                        value={form.email}
                        onChange={handleFieldChange('email')}
                    />
                </Form.Item>
            </Form>
        </Modal>
        </>
    );
};