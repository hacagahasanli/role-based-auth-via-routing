import styled from "styled-components"

export const PageEntrance = ({ name }) => {
    return <Entrance>{`Hey, You are currently on a ${name} Page`}</Entrance>
}

const Entrance = styled.div`
    width: max-content;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.6rem;
    font-weight: 600;
    color: #ffffff;
`