import Link from "next/link";

function notFound() {
    return (
        <div>
            <p>
                해당 페이지가 없습니다 😢 <br />
                다른페이지를 검색해보세요
            </p>
            <Link href={"/"}>메인으로 이동</Link>
        </div>
    );
}

export default notFound;
