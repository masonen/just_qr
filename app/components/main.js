import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    background-color: #121212;
    justify-content: flex-start;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
`;

const Text = styled.Text`
    font-size: 20px;
    font-weight: 500;
    color: #BB86FC;
`;

const Title = styled.Text`
    font-size: 30px;
    font-weight: 700;
    color: #03DAC5;
`;

export {Container, Title, Text}