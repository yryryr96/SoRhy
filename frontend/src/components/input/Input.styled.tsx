import styled, { css } from 'styled-components';

const StyledInput = styled.input.attrs<any>((props: any) => ({
    value: props.value || undefined,
    placeholder: props.placeholder || null,
    disabled: props.disabled || false,
    border_radi: props.border_radi || 0,
    inputstate: props.inputstate || 'false',
}))`
    ${(props: any) => {
        const inputState = props.inputstate || 'false';
        const disabled = props.disabled || false;
        const font_size = props.font_size || false;
        const border_radi = props.border_radi || 0;
        return css`
            width: ${props.width}vw;
            height: ${props.height}vh;
            border-radius: ${() => (border_radi === 0 ? props.border_radi : '0px')};
            background-color: ${() => (disabled ? props.theme.colors.lightgray : props.theme.colors.white)};
            border: 1px solid ${() => (inputState === 'true' ? 'white' : '#ccc')};
            outline: none;
            font-family: ${(props) => props.theme.fonts.HangeulFontMedium || 'Arial'};
            font-size: ${() => (font_size !== 'false' ? `${props.font_size}px` : props.theme.fontSizes.medium)};
        `;
    }}
`;

export { StyledInput };
