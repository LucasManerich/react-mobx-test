import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { CounterStoreContext } from '../stores/CounterStore';
import styled from 'styled-components';
import CountView from '../components/CountView';

const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const Row = styled.div`
    width: 100%
`

const CounterButton = styled.button`
    margin: 5px;
    border: 2px solid #EC6609;
    background-color: white;
    padding: 10px;
    color: #EC6609;
    border-radius: 10px;
    font-size: 20px;

    &:hover {
        color: white;
        background-color: #EC6609;
    }
`;

const HomeScreen = observer(() => {
    const counterStore = useContext(CounterStoreContext);

    return (
        <div>
            <Row>
                <CountView></CountView>
            </Row>
            <Row>
                <Center>
                    <CounterButton onClick={() => counterStore.increment()}>Incrementar</CounterButton>
                    <CounterButton onClick={() => counterStore.decrement()}>Decrementar</CounterButton>
                </Center>
            </Row>
        </div>
    );
});

export default HomeScreen;