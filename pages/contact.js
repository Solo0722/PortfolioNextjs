import Header from "../components/Header";
import contactStyles from "../styles/Contact.module.css";
import { Form, Input, Button, message, Space } from "antd";
import { HiLocationMarker, HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { send } from "emailjs-com";
import { useState } from "react";
// import { message, Button, Space } from "antd";

const Contact = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //emailjs

  const success = (mes) => {
    message.success(mes);
  };

  const error = (mes) => {
    message.error(mes);
  };

  const warning = () => {
    message.warning("This is a warning message");
  };

  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    // reply_to: "",
    from_email:"",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    /* --- METHOD TO SEND THE MAIL --- */
    if (!toSend.from_name && !toSend.reply_to && !toSend.message) {
      error("Please fill all the fields");
    } else {
      send("service_tict0tn", "template_lj7rhld", toSend, "pXojUsX_OjqKKvLln")
        .then((response) => {
          // console.log("SUCCESS!", response.status, response.text);
          success(response.text);
          // <Space>
          //   <Button onClick={success}>Success</Button>
          // </Space>;
        })
        .catch((err) => {
          // console.log("FAILED...", err);
          error("Failed");
        });
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className={contactStyles.container}>
      <Header title={"Contact"} />
      <main className={contactStyles.main}>
        <div className={contactStyles.contactInfo}>
          <h1>Get In Touch</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio
            eveniet esse, similique placeat magnam cupiditate, quibusdam,
            corrupti eos expedita nam repellat perferendis rerum nihil illo?
            Delectus itaque molestias minima!
          </p>
          <div>
            <p>
              <HiLocationMarker /> Kentinkrono, Kumasi - Ghana
            </p>
            <p>
              <HiPhone /> +233 (0) 599171142
            </p>
            <p>
              <MdEmail /> owusuansahsolomon39@gmail.com
            </p>
            <p>
              <Button>Hire me</Button>
            </p>
            <p>
              <a href="#" target="_blank">
                Buy me a coffee
              </a>
            </p>
          </div>
        </div>
        <div className={contactStyles.formContainer}>
          <Form
            // onSubmit={onSubmit}
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Full Name"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your full name!",
                },
              ]}
            >
              <Input
                name="from_name"
                value={toSend.from_name}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                name="from_email"
                value={toSend.from_email}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please input your message!",
                },
              ]}
            >
              <Input.TextArea
                rows={7}
                name="message"
                value={toSend.message}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" onClick={onSubmit}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
