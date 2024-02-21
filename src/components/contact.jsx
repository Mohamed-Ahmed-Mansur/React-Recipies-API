import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
        <Wrapper>
            <Container>
                <h3>Lets Stay In Touch</h3>
                <h4>Join our newsletter, so that we can reach out to you with our news and offers.</h4>
                <Input type='email' placeholder='Email' />
                <Button>Subscribe</Button>
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    text-align: center;
    padding: 2rem;
    width: 100%;
`;

const Container = styled.div`
    background: linear-gradient(to right, #b2f7b2, #b2f7d4);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    margin: auto;

    h3 {
        margin-bottom: 1rem;
    }

    h4 {
        color: #555;
        margin-bottom: 2rem;
    }
`;

const Input = styled.input`
    width: calc(100% - 20px); /* Adjusted width */
    max-width: 500px; /* Added max-width */
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    margin-bottom: 1rem;
`;

const Button = styled.button`
    min-width: 30%;
    margin-left: 10%;
    padding: 0.5rem;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #218838;
    }
`;

export default Contact;
