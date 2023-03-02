import { Card } from "../../components"
import styled from "styled-components"


const WarningMg = ({ role }) => {
    return <Card width="450px" height="100px">
        <WarningMessage>
            <span>{`You don't have a permission to ${role} page`}</span>
        </WarningMessage>
    </Card>
}

const WarningMessage = styled.div`
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

export default WarningMg