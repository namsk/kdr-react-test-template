function App() {
    //  TODO: name 변수에 수강생 이름을 저장하여 Footer 컴포넌트로 전달해 주세요
    const name = "홍길동";
    //  TODO: 수강 과목이 저장된 items 배열을 Article 컴포넌트에 전달해 주세요
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
            {/* TODO: Header 컴포넌트로 분리해 주세요 */}
            <header>
                <h2>과정명</h2>
                <p>Himedia KDT 7기 과정</p>
            </header>

            {/* TODO: Artiche 컴포넌트로 분리해 주세요 */}
            <article>
                <h2>주요 과정</h2>
                {/* TODO: App 컴포넌트로부터 items 배열을 전달받아 목록을 출력해 주세요
                        아래 ul 코드 영역은 제거하고 출력합니다. */}
                {/* TODO: App 컴포넌트로부터 이벤트 처리 함수를 전달받아
                        각 목록을 클릭할 때마다 해당 과목의 title을 
                        alert와 console로 출력해 주세요 */}
                <ul>
                    <li>자바 프로그래밍</li>
                    <li>데이터베이스</li>
                    <li>React.js 기반의 웹 프로그래밍</li>
                    <li>Rest 중심의 SpringBoot 프레임워크</li>
                    <li>클라우드와 컨테이너를 활용한 배포 환경 구축</li>
                    <li>플러터 모바일 프로그래밍</li>
                </ul>
            </article>

            {/* Footer 컴포넌트로 분리해 주세요 */}
            <footer>
                <h2>평가자 정보</h2>
                <p>수험생 이름: {/* 수험생 이름 출력 위치 */}</p>
            </footer>
        </div>
    );
}

export default App;
