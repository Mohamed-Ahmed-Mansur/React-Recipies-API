import React from 'react';
import { FaPizzaSlice } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";
import { GiChopsticks } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const CountryList = () => {

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
            <SLink to={'/cuisine/Egyptian'}>
                <FaBowlFood size={36} />
                <h4>Egyptian</h4>
            </SLink>
        </List>
    );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;

    @media (max-width: 780px) {
        flex-wrap: wrap;
        gap: 2rem;
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
        font-size: 1.5rem;
    }

    &.active {
        background: linear-gradient(to right, #4fd585, #24aa5a);

        svg {
            color: white;
        }

        h4 {
            color: white;
        }
    }

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 480px) {
        margin: 1rem;
    }
`;

export default CountryList;