import React from "react";
import BasicButton from "../../components/button/BasicButton";
// main의 스타일 불러오기
import S from "./style";

const Main = () => {
    return (
        <S.Wrapper>
            <S.ImageWrapper>
                <img
                    alt=""
                    src={process.env.PUBLIC_URL + "/images/main/penguin.png"}
                />
            </S.ImageWrapper>
            <S.ButtonWrapper>
                <BasicButton
                    size={"full"}
                    shape={"small"}
                    variant={"black"}
                    color={"white"}
                >
                    로그인
                </BasicButton>
                <BasicButton
                    size={"full"}
                    shape={"small"}
                    variant={"black"}
                    color={"white"}
                >
                    회원가입
                </BasicButton>
            </S.ButtonWrapper>
        </S.Wrapper>
    );
};

export default Main;
