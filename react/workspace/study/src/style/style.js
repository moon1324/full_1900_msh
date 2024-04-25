import styled from "styled-components";
import { flexCenterColumn } from "./common";
const S = {};

S.Styled = styled.div`
    width: 300px;
    height: 300px;
    border: solid 1px #333;
    background-color: ${(props) => props.color};
    ${flexCenterColumn}

    /* & 자기 자신 선택자 */
    & input {
        background: #333;
    }

    & button {
        background-color: pink;

        & p {
            color: red;
        }
    }
`;

S.Input = styled.input`
    background-color: ${(props) => props.color};
`;

S.Button = styled.button`
    background-color: orchid;
    border: none;
    ${flexCenterColumn}
`;

export default S;
