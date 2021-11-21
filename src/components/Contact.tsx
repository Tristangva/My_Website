import React from "react";
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs, {EmailJSResponseStatus} from 'emailjs-com';
import Swal from 'sweetalert2';
import "./Contact.css";

// Using https://javascript.plainenglish.io/how-to-build-a-contact-form-in-react-that-sends-emails-using-emailjs-70011d2563a3

// Objects for links

const Contact = () => {

    const handleOnSubmit = (e: any) => {
        e.preventDefault();
        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, e.target, `${process.env.REACT_APP_USER_ID}`)
            .then((result: EmailJSResponseStatus) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error: any) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    }

    return(
        <div className={"contact"}>
            <Form onSubmit={handleOnSubmit}>
                <Form.Field
                    id='form-input-control-email'
                    control={Input}
                    label='Email'
                    name='user_email'
                    placeholder='Email…'
                    required
                    icon='mail'
                    iconPosition='left'
                    />
                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    label='Name'
                    name='user_name'
                    placeholder='Name…'
                    required
                    icon='user circle'
                    iconPosition='left'
                    />
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Message'
                    name='user_message'
                    placeholder='Message…'
                    required
                    />
                <Button type='submit' color='green'>Submit</Button>
            </Form>
        </div>
    )
}

export default Contact;
