import styled from "styled-components"

export const PageEntrance = (pageName) => {
    return <Entrance>{`${pageName} Page`}</Entrance>
}

const Entrance = styled.div`
    width: 100%;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6rem;
    font-weight: 600;
`