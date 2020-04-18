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
                alert("Dziękujemy za zapisanie się do newslettera. Sprawdź email w celu potwierdzenia rejestracji.");
            })
            .catch((err) => {
                console.log('err', err);
                alert("Sprawdź poprawność wpisanego maila. Być może już jesteś zapisany na mój newsletter - sprawdź email.");
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
                            pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z0-9.-]{2,}[.]{1}[a-zA-Z]{2,}"
                            required
                         />
                    </FormGroup>
                    <button className="btn btn-primary" type="submit">Zapisz się</button>
                </Form>
            </>
        );
    }
}