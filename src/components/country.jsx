import React from 'react';
import { FaPizzaSlice } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";
import { GiChopsticks } from "react-icons/gi";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Country = () => {
    return (
        <List>
            <SLink to={'/cuisine/Italian'}>
                <FaPizzaSlice size={36} />
                <h4>Italian</h4>
            </SLink>
            <SLink to={'/cuisine/American'}>
                <FaHamburger size={36} />
                <h4>American</h4>
            </SLink>
            <SLink to={'/cuisine/Thai'}>
                <GiNoodles size={36} />
                <h4>Thai</h4>
            </SLink>
            <SLink to={'/cuisine/Japanese'}>
                <GiChopsticks size={36} />
                <h4>Japanese</h4>
            </SLink>
        </List>
    );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;

    @media (max-width: 480px) {
        flex-wrap: wrap; /* Allow items to wrap onto multiple lines */
        justify-content: center;
    }
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.3s ease-in-out;

    h4 {
        color: white;
        font-size: 0.8rem;
    }

    svg {
        color: white;
        font-size: 1.5rem; /* Adjust icon size */
    }

    &.active {
        background: linear-gradient(to right, #f27121, #e94057);

        svg {
            color: white;
        }

        h4 {
            color: white;
        }
    }

    &:hover {
        transform: scale(1.1); /* Scale up on hover */
    }

    @media (max-width: 480px) {
        margin: 1rem; /* Adjust margin for smaller screens */
    }
`;

export default Country;