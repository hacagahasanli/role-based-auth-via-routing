import styled from "styled-components"
import { Card } from "../../shared/Card"

export const Error = () => {
    return <Card width="450px" height="100px">
        <Errpage>
            <span>Sorry, an unexpected error has occured.</span>
        </Errpage>
    </Card>
}

const Errpage = styled.div`
    font-size: 1.2rem;
    font-size: 600;
    color: #ffffff;
    width: 100%;
    min-height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.1rem;

`