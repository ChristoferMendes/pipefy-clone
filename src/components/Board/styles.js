import styled from 'styled-components'
import { headerHeight } from '../Header/styles'

export const Container = styled.div`
  display: flex;
  padding: 30px 0;
  height: calc(100% - ${headerHeight});
`
