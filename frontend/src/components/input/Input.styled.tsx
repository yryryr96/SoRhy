import styeld, { css } from 'styled-components';

const StyledInput = styeld.input.attrs<any>((props: any) => ({
    value: props.value || undefined,
    placeholder: props.placeholder || null,
    disabled: props.disabled || false,
    border_radi: props.border_radi || 0,
}))`
    ${(props: any) => {
        const inputState = props.inputstate || 'true';
        const disabled = props.disabled || false;

        return css`
            padding-left: 10px;
            width: ${props.width}vw;
            height: ${props.height}vh;
            border-radius: ${props.border_radi}px;
            background-color: ${() => (disabled ? props.theme.colors.lightgray : props.theme.colors.white)};
            border: 3px solid ${() => (inputState === 'true' ? 'white' : 'red')};
            outline: none;
            font-family: ${(props) => props.theme.fonts.HangeulFontMedium || 'Arial'};
            font-size: ${(props) => `${props.theme.fontSizes.medium}`};
        `;
    }}
`;

export { StyledInput };
