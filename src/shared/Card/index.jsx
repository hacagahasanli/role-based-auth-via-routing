import styled from "styled-components"

export const Card = ({ children }) => <StyledCard>
    {children}
</StyledCard>

const StyledCard = styled.div`
    position: relative;
    width: 350px;
    min-height: 450px;
    border-radius: 10px;
    border: 1px solid #443C68;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`