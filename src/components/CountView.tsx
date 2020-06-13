import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { CounterStoreContext } from '../stores/CounterStore';
import styled from 'styled-components';

const CountText = styled.p`
    text-align: center;
    font-family: Arial;
    font-weight: bold;
    font-size: 70px;
`;

const CountView = observer(() => {
    const counterStore = useContext(CounterStoreContext);

    return (
        <CountText>{counterStore.value}</CountText>
    );
});

export default CountView;