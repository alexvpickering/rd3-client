import styled from 'styled-components'

const Description = styled.div`
  @media (min-width: ${props => props.theme.breaks.md}) {
    align-self: flex-start;
    width: 37%;
  }

  h2 {
    font-weight: 600;
  }

`
export default Description
