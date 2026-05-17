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

        <Border>
          <h1>Border Component</h1>
        </Border>
        <Dashboard role="user" />
        <ItemWithFlag flag={true} name="Wai Yan Myo" />
        {/* <Border>
          <ItemList />
        </Border> */}
        {/* <UserList />
        <EventDemo />
        <PropagationDemo /> */}
        {/* <Counter />
        <TimerDemo />
        <BatchUpdateDemo /> */}
        <ItemListWithState />
        <ObjectUpdate />
      </main>
    </div>
  );
}
