import styled from "styled-components"

export const PageEntrance = ({ name }) => {
    return <Entrance>{`${name} Page`}</Entrance>
}

const Entrance = styled.div`
    width: max-content;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    font-weight: 600;
    color: #ffffff;
`