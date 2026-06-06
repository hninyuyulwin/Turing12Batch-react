import Image from "next/image";
import styles from "./page.module.css";
import HelloWorld, { Welcome } from "./component/HelloWorld";
import Profile from "./component/Profile";
import Avatar from "./component/Avatar";
import Border from "./component/Border";
import Dashboard from "./component/conditional_render/Dashboard";
import ItemWithFlag from "./component/conditional_render/ItemWithFlag";
import ItemList from "./component/ItemList";
import UserList from "./component/UserList";
import EventDemo from "./component/interactivity/EventDemo";
import PropagationDemo from "./component/interactivity/PropagationDemo";
import Counter from "./component/Counter";
import TimerDemo from "./component/TimerDemo";
import BatchUpdateDemo from "./component/BatchUpdateDemo";
import ItemListWithState from "./component/ItemListWithState";
import ObjectUpdate from "./component/ObjectUpdate";
import FormDemo from "./component/form/FormDemo";
import LoginForm from "./component/form/LoginForm";
import Tabs from "./component/Tabs";
import PosForm from "./component/PosForm";
import FilterableProductTable from "./component/FilterableProductTable";
import Exercise from "./component/Exercise";
import TodoList from "./component/TodoList";
import CounterReducer from "./component/reducer/CounterReducer";
import TodoListReducer from "./component/reducer/TodoListReducer";
import WhyContext from "./component/context/WhyContext";
import ContextDemo from "./component/context/ContextDemo";
import TodoContextDemo from "./component/context/TodoContextDemo";
import TodoListWithContextDemo from "./component/context/TodoListWithContextDemo";
import WhyRef from "./component/ref/WhyRef";
import FocusInput from "./component/ref/FocusInput";
import CustomInputDemo from "./component/ref/CustomInputDemo";
import EffectDemo from "./component/effect/EffectDemo";
import EffectLifeCycle from "./component/effect/EffectLifeCycle";
import CleanUpDemo from "./component/effect/CleanUpDemo";
import TodoWithDataFetch from "./component/effect/TodoWithDataFetch";
import LoadTodo from "./component/hooks/LoadTodo";
import LoadUser from "./component/hooks/LoadUser";
import LoadDataWithHook from "./component/hooks/LoadDataWithHook";
import FormWithHook from "./component/hooks/FormWithHook";
import SimpleLoginForm from "./component/form/SimpleLoginForm";
import MovieForm from "./component/form/MovieForm";
import WhyRenderProp from "./component/desing_pattern/render_property/WhyRenderProp";
import RenderPropDemo from "./component/desing_pattern/render_property/RenderPropDemo";
import WhyHoc from "./component/desing_pattern/hoc/WhyHoc";
import HocWithLoggerDemo from "./component/desing_pattern/hoc/HocWithLoggerDemo";
import WhyHocAuth from "./component/desing_pattern/hoc/WhyHocAuth";
import AuthDemo from "./component/desing_pattern/hoc/AuthDemo";
import ProtectedDemo from "./component/compound/ProtectedDemo";
import RouterDemo from "./component/router/RouterDemo";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        {/* <HelloWorld />
        <HelloWorld />
        <HelloWorld /> */}

        {/* <Profile
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanjiSPZBmAzp05yBDati9CzNkLNM-ZgG3Rg&s"
          name="Lavender Image"
          size={100}
        />
        <Profile
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanjiSPZBmAzp05yBDati9CzNkLNM-ZgG3Rg&s"
          name="Daffodil Image"
          size={80}
        />
        <Profile
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanjiSPZBmAzp05yBDati9CzNkLNM-ZgG3Rg&s"
          name="Daisy Image"
          size={50}
        /> */}
        <Border>
          <Avatar
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanjiSPZBmAzp05yBDati9CzNkLNM-ZgG3Rg&s"
            name="Lavender Image"
            size={100}
          />
        </Border>

        {/* <Border>
          <h1>Border Component</h1>
        </Border>
        <Dashboard role="user" />
        <ItemWithFlag flag={true} name="Wai Yan Myo Love" />
        <Border>
          <ItemList />
        </Border>
        <UserList />
        <EventDemo />
        <PropagationDemo />
        <Counter />
        <TimerDemo />
        <BatchUpdateDemo /> */}
        {/* <ItemListWithState />
        <ObjectUpdate /> */}
        {/* <FormDemo /> */}
        {/* <LoginForm /> */}
        {/* <Tabs headers={["Novel", "Games", "About Love"]}>
          <div>
            <h3>Gone with the wind</h3>
            <p>The best classical American Novel</p>
          </div>
          <div>
            <h3>Where winds meet</h3>
            <p>Both mobile game & pc.</p>
          </div>
          <div>
            <h3>Memories made by love</h3>
            <p>It is so hurt but i cannot let go</p>
          </div>
        </Tabs> */}
        {/* <PosForm /> */}
        {/* <FilterableProductTable /> */}
        {/* <Exercise /> */}
        {/* <TodoList /> */}
        {/* <CounterReducer /> */}
        {/* <TodoListReducer /> */}
        {/* <WhyContext /> */}
        {/* <ContextDemo /> */}
        {/* <TodoContextDemo /> */}
        {/* <TodoListWithContextDemo /> */}
        {/* <WhyRef /> */}
        {/* <FocusInput /> */}
        {/* <CustomInputDemo /> */}
        {/* <EffectDemo /> */}
        {/* <EffectLifeCycle /> */}
        {/* <TimerDemo /> */}
        {/* <CleanUpDemo /> */}
        {/* <TodoWithDataFetch /> */}
        {/* <LoadTodo /> */}
        {/* <LoadUser /> */}
        {/* <LoadDataWithHook /> */}
        {/* <FormWithHook /> */}
        {/* <SimpleLoginForm /> */}
        {/* <MovieForm /> */}
        {/* <WhyRenderProp /> */}
        {/* <RenderPropDemo /> */}
        {/* <WhyHoc /> */}
        {/* <HocWithLoggerDemo /> */}
        {/* <WhyHocAuth /> */}
        {/* <AuthDemo /> */}
        {/* <ProtectedDemo /> */}
        <RouterDemo />
      </main>
    </div>
  );
}
