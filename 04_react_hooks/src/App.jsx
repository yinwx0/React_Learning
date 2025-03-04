// import React from "react";
// import ThemeToggle from "./components/state/ThemeToggle";
// import TextInput from "./components/state/TextInput";
// import TodoList from "./components/state/Todolist";
// import FetchData from "./components/effect/FetchData";
// import PageTitle from "./components/effect/PageTitle";
// import Time from "./components/effect/Time";
// import Weather from "./components/effect/Weather";
// import Counter from "./components/reducer/Counter";
// import Form from "./components/reducer/Form";
// import ThemeProvider from "./components/context/ThemeProvider";
// import ThemeButton from "./components/context/ThemeButton";
// import UserPage from "./components/context/UserPage";
// import ExpensiveCalculationParent from "./components/memo/ExpensiveCalculationParent";
// import ListFilterParent from "./components/memo/ListFilterParent";
// import Parent from "./components/callback/Parent";
// import ExpensiveComponentParent from "./components/callback/ExpensiveComponentParent";
// import FocusInput from "./components/ref/FocusInput";
// import PreviousValue from "./components/ref/PreviousValue";
// import Parent1 from "./components/imperativehandle/Parent1";
// import Parent2 from "./components/imperativehandle/Parent2";
// import ComponentSize from "./components/layouteffect/ComponentSize";
// import AnimateBox from "./components/layouteffect/AnimateBox";

// const App = () => {
//   return (
//     <div>
//       {/* <ThemeToggle /> */}
//       {/* <TextInput /> */}
//       {/* <TodoList /> */}
//       {/* <FetchData /> */}
//       {/* <PageTitle /> */}
//       {/* <Time /> */}
//       {/* <Weather /> */}
//       {/* <Counter /> */}
//       {/* <Form /> */}
//       {/* <ThemeProvider>
//         <ThemeButton />
//       </ThemeProvider> */}
//       {/* <UserPage /> */}
//       {/* <ExpensiveCalculationParent /> */}
//       {/* <ListFilterParent /> */}
//       {/* <Parent /> */}
//       {/* <ExpensiveComponentParent /> */}
//       {/* <FocusInput /> */}
//       {/* <PreviousValue /> */}
//       {/* <Parent1 /> */}
//       {/* <Parent2 /> */}
//       {/* <ComponentSize /> */}
//       <AnimateBox />
//     </div>
//   );
// };

// export default App;

// import React, { useState, useDebugValue } from "react";
// function useCustomHook(value) {
//   useDebugValue(value ? "Active" : "Inactive");
//   return value;
// }
// const App = () => {
//   const [isActive, setIsActive] = useState(false);
//   useCustomHook(isActive);
//   return (
//     <>
//       <button onClick={() => setIsActive(!isActive)}>
//         {isActive ? "Deactivate" : "Activate"}
//       </button>
//     </>
//   );
// };
// export default App;

// import React, { useState, useEffect, useDebugValue } from "react";
// function useApi(url) {
//   const [data, setData] = useState(null);
//   useDebugValue(data ? "Data Loaded" : "Loading");
//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((json) => setData(json));
//   }, [url]);
//   return data;
// }
// const App = () => {
//   const data = useApi("https://api.xygeng.cn/one");
//   if (!data) return <p>加载中 ...</p>;
//   return (
//     <div>
//       <h2>{data.content}</h2>
//       <p>
//         来源：
//         {data.origin}
//       </p>
//       <p>
//         作者：
//         {data.name}
//       </p>
//       <p>
//         标签：
//         {data.tag}
//       </p>
//     </div>
//   );
// };
// export default App;

import React from "react";
import Search from "./components/custom/Search";
import Data from "./components/custom/Data";
const App = () => {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };
  return (
    <>
      <h1>Search Example</h1>
      <Search onSearch={handleSearch} />
      {/* <Data /> */}
    </>
  );
};
export default App;
