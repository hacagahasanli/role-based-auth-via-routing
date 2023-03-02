import styled from "styled-components"

export const Card = ({ children, width = "350px", height = "450px" }) => <StyledCard {...{ width, height }}>
    {children}
</StyledCard>

const StyledCard = styled.div`
    position: relative;
    width: ${({ width }) => width};
    min-height: ${({ height }) => height};
    border-radius: 10px;
    border: 1px solid #443C68;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`