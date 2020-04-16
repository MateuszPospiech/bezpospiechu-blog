import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Form, FormGroup, Input } from 'reactstrap';

export default class Newsletter extends React.Component {
    state = {
        name: null,
        email: null,
    }

    _handleChange = (e) => {
        // console.log({
        //     [`${e.target.name}`]: e.target.value,
        // });
        this.setState({
            [`${e.target.name}`]: e.target.value,
        });
    }

    _handleSubmit = (e) => {
        e.preventDefault();

        console.log('submit', this.state);

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`);

                if (result !== 'success') {
                    throw msg;
                }
                alert(msg);
            })
            .catch((err) => {
                console.log('err', err);
                alert(err);
            });
    }

    render() {
        return (
            <>
                <Form className="text-center" onSubmit={this._handleSubmit}>
                    <FormGroup>
                        <Input 
                            type="email"
                            onChange={this._handleChange}
                            placeholder="Email"
                            name="email"
                            className=""
                         />
                    </FormGroup>
                    <button className="btn btn-primary" type="submit">Zapisz się</button>
                </Form>
            </>
        );
    }
}