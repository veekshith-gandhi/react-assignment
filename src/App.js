import AuthNetworkRequest from "./AppContext/AuthNetworkRequ";
import InputField from "./AppContext/inputField";
import Navbar from "./AppContext/Navbar";
import DisplayLayout from "./AppContextTheme/DisplayLayout";
import ThemeFunction from "./AppContextTheme/ThemeFunction";
import AppTodo from "./AppTodo/Apptodo";
import AxiosTodo from "./Axios1/AxiosTodo";
import AxiosTodoList from "./Axios1/AxiosTodoList";
import AxiosGithubList from "./AxiosGithub/AxiosGithubList";
import Counter from "./counterHook/Counter";
import DisplayTodo from "./listkeysconditionalrendering/DisplayTodo";
import Login from "./loginCR/Login";
import RestaurentDetails from "./RestaurentDetails/RestaurentDetails";
import Navbars from "./Router/Router1/Navbar";
import AllRoute from "./Router/Router1/AllRoute";
import Content from "./staticCard/Content";
import Todo from "./todoitem/Todo";
import CounterInterval from "./UseEffectCounter/CounterInterval";
import CreateCard from "./UseEffects/CreateCard";
import UseEffTodo from "./UseEffects/UseeffTodo";
import Form from "./useRef/form";
import Timer from "./useRef/timer";

function App() {
  return (
    <div>
      {/* <Content /> */}
      <hr />
      {/* <Todo /> */}
      <hr />
      {/* <Counter /> */}
      <hr />
      {/* <Login /> */}
      <hr />
      {/* <DisplayTodo /> */}
      <hr />
      {/* <RestaurentDetails /> */}
      <hr />
      {/* <AppTodo /> */}
      <hr />
      {/* <CreateCard /> */}
      <hr />
      {/* <CounterInterval /> */}
      <hr />
      {/* <Timer />
      <Form /> */}
      <hr />
      {/* <UseEffTodo /> */}
      {/* <AxiosTodoList /> */}
      {/* <AxiosGithubList /> */}
      {/* <Navbar /> */}
      {/* <InputField /> */}
      {/* <ThemeFunction /> */}
      {/* <DisplayLayout /> */}
      <Navbars />
      <AllRoute />
    </div>
  );
}

export default App;
