import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
// Layout.js의 스타일 불러오기
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faSearch,
    faBell,
    faUser,
    faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const Layout = () => {
    return (
        <S.Background>
            <S.Wrapper>
                <S.Header>
                    <Link to={"/"}>Michael TODO</Link>
                </S.Header>
                <S.Main>
                    <Outlet />
                </S.Main>
                <S.Nav>
                    <NavLink to={"/"}>
                        <FontAwesomeIcon icon={faHouse} className="icon" />
                        <p>피드</p>
                    </NavLink>
                    <NavLink to={"/search"}>
                        <FontAwesomeIcon icon={faSearch} className="icon" />
                        <p>검색</p>
                    </NavLink>
                    <NavLink to={"/bell"}>
                        <FontAwesomeIcon icon={faBell} className="icon" />
                        <p>알림</p>
                    </NavLink>
                    <NavLink to={"/todo"}>
                        <FontAwesomeIcon
                            icon={faPenToSquare}
                            className="icon"
                        />
                        <p>할일</p>
                    </NavLink>
                    <NavLink to={"/my"}>
                        <FontAwesomeIcon icon={faUser} className="icon" />
                        <p>MY</p>
                    </NavLink>
                </S.Nav>
            </S.Wrapper>
        </S.Background>
    );
};

export default Layout;
