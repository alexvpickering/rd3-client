import styled from 'styled-components'
import Margins from './Margins'

const Byline = styled.div`
  font-size: ${props => props.theme.font.sm};
  line-height: 1.5;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.5);
  padding: 12px 0;

  ${Margins}
`
export default Byline
