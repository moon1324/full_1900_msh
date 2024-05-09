import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const Intro = () => {
    const [searchParams] = useSearchParams();
    const hello = searchParams.get("hello");
    console.log(hello);

    return (
        <>
            <div>소개 페이지 환영합니다.😃</div>
            {/* 
                파라미터를 보내는 방법:
                1. 쿼리스트링
            */}
            {/* <div>
                <Link to="/job?title=developer">개발자 소개페이지로 이동</Link>
            </div>
            <div>
                <Link to="/job?title=planner">기획자 소개 페이지로 이동</Link>
            </div> */}

            {/* 
                2. url 파라미터
            */}
            <div>
                <Link to="/job/developer">개발자 소개페이지로 이동</Link>
            </div>
            <div>
                <Link to="/job/planner">기획자 소개 페이지로 이동</Link>
            </div>

            {hello && <h1>환영합니다. 안녕하세요!</h1>}
        </>
    );
};

export default Intro;
