import styled from 'styled-components'
import { color } from '../Helper'

export const CardBase = styled.div`
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 5px;
    background-color: ${color.cardGrey};
    box-shadow: 1px 6px 10px ${color.black};
`

export const CardBaseList = CardBase.withComponent('li').extend`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export default CardBase