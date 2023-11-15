import styled from 'styled-components';

export const Hr = styled.hr<any>`
    margin-left: ${(props) => (props.leftmargin ? props.leftmargin : '3%')};
    padding: 0% 2%;
    width: ${(props) => (props.width ? props.width : '90%')};
    border: 1px solid #ccc;
`;
