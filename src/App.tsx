import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";
import { GenreContextProvider } from "./contexts/GenreContext";

export function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <GenreContextProvider>
        <SideBar />
        <Content />
      </GenreContextProvider>
    </div>
  );
}
