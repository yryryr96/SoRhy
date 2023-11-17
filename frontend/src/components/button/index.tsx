import { StyledButton, StyledImage } from "./Button.styled"

const ButtonStyle = (props: any) => {
    return (
        <>
            <StyledButton {...props}>
                {props.icon && <StyledImage src={props.icon} alt="icon" />}
                {props.label || null}
            </StyledButton>
        </>
    )
}

export default ButtonStyle