// 제네릭 문법을 이용한 REST API 사용 실습
// https://jsonplaceholder.typicode.com/posts
// 1) fetching 후 전체를 콘솔로그로 출력
// 2) fetching 후 (unknown)이 생김
// 35분

// interface genericFetchFn {
//     <T>(posts: T): T;
// }

// const getPosts = async <T>(): Promise<T> => {
//     const result = await fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json());

//     return result;
// };

// getPosts().then((post) => console.log(post));

// const getPosts = async <T>(): Promise<T> => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await response.json();
//     return posts;
// };

// getPosts().then(console.log).catch(console.error);

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const getPosts = async <Post>(): Promise<Post[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts;
};
// 함수에서 반환되는 데이터에는 unknown 유형이 지정된다.
// 그렇기에 타입 검증이 필요하다.
getPosts<Post>()
    .then((posts) =>
        posts.map((post) => {
            console.log(post.title);
        })
    )
    .catch(console.error);
