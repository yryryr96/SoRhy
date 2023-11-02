import styled from 'styled-components';

const DropdownContainer = styled.div`
    position: relative;
`;

const DropdownButton = styled.button`
    background-color: #007bff;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const DropdownContent = styled.div.attrs<any>((props) => {
    open: props.open;
})`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: ${(props) => (props.open ? 'block' : 'none')};
`;

const ListItem = styled.div`
    padding: 4px 8px;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;

export { DropdownButton, DropdownContent, DropdownContainer, ListItem };
