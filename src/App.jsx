function App() {
    const name = "홍길동";
    const items = [
        { id: 1, title: "자바 프로그래밍" },
        { id: 2, title: "데이터베이스" },
        { id: 3, title: "React.js 기반의 웹 프로그래밍" },
        { id: 4, title: "Rest 중심의 SpringBoot 프레임워크" },
        { id: 5, title: "클라우드와 컨테이너를 활용한 배포 환경 구축" },
        { id: 6, title: "플러터 모바일 프로그래밍" },
    ];
    return (
        <div className="App">
            <header>
                <h1>과정명</h1>
                <p>Himedia KDT 7기 과정</p>
            </header>
            <article>
                <h2>주요 과정</h2>
                <ul>
                    <li>자바 프로그래밍</li>
                    <li>데이터베이스</li>
                    <li>React.js 기반의 웹 프로그래밍</li>
                    <li>Rest 중심의 SpringBoot 프레임워크</li>
                    <li>클라우드와 컨테이너를 활용한 배포 환경 구축</li>
                    <li>플러터 모바일 프로그래밍</li>
                </ul>
            </article>
            <footer>
                <h2>평가자 정보</h2>
                <p>수험생 이름: {name}</p>
            </footer>
        </div>
    );
}

export default App;
