import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummylist = [
  {
    id: 1,
    author: "조은영",
    content: "하이",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "홍길동",
    content: "하이2",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "아무개",
    content: "하이3",
    emotion: 1,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummylist} />
    </div>
  );
}

export default App;
