import styled from "styled-components";


const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #08D640;
    color: white;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
    font-family: cursive;
    cursor : pointer;

    /* ~~~props size~~~ */
    ${function(props) {
        if (props.size === "sm") {
            return props.theme.sizes.sm;
        }else if (props.size === "md") {
            return props.theme.sizes.md;
        }else if (props.size === "lg") {
            return props.theme.sizes.lg;
        } else {
            return props.theme.sizes.md;
        }
    }};
    `

export default Button;