import React from "react";
import { Form, Input, Button, Select } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const AddContactForm = ({ onFinish }) => {
  const navigate = useNavigate();
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleSubmit = (values) => {
    const id = `${values.firstName}-${values.lastName}-${values.contactType}`;
    onFinish({ ...values, id });
    navigate("/contactList");
  };

  return (
    <Form
      name="addContact"
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <Form.Item
        label="Tipo de Contacto"
        name="contactType"
        rules={[
          {
            required: true,
            message: "Por favor, seleccione el tipo de contacto",
          },
        ]}
      >
        <Select placeholder="Seleccionar">
          <Option value="trabajo">Trabajo</Option>
          <Option value="personal">Personal</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Nombres"
        name="firstName"
        rules={[{ required: true, message: "Por favor, ingrese el nombre" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Apellidos"
        name="lastName"
        rules={[
          { required: true, message: "Por favor, ingrese los apellidos" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Correo electrónico"
        name="email"
        rules={[
          {
            required: true,
            message: "Por favor, ingrese el correo electrónico",
          },
          {
            type: "email",
            message: "Por favor, ingrese un correo electrónico válido",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Número de teléfono"
        name="phone"
        rules={[
          {
            required: true,
            message: "Por favor, ingrese el número de teléfono",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Notas Personales" name="notes">
        <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Añadir Contacto
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddContactForm;
