// import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./pages/main/Main";
import Intro from "./pages/intro/Intro";
import Job from "./pages/job/Job";
import router from "./routes/router";
// import AnimalsContainer from "./context/expert/AnimalsContainer";
// import CountContainer from "./pages/count/CountContainer";
// import FontContainer from "./pages/font/FontContainer";
// import StyledComponent01 from "./style/basic/StyledComponent01";
// import GlobalStyle from "./style/global";
// import theme from "./style/theme";
// import BasicContainer from "./style/basic/BasicContainer";
// import FontAwesome from "./style/fontAwesome/FontAwesome";
// import CharContainer from "./context/basic/CharContainer";
// import ProductContainer from "./LifeCycle/memoization/ProductContainer";
// import SideEffect from "./LifeCycle/function/SideEffect";
// import LifeCycleContainer from "./LifeCycle/class/LifeCycleContainer";
// import CheckInput from "./ref/basic/CheckInput";
// import FoodContainer from "./ref/expert/FoodContainer";
// import Check from "./ref/basic/Check";
// import Checkbox from "./ref/basic/Checkbox";
// import Name from "./ref/basic/Name";
// import Color from "./state/basic/Color";
// import Name from "./state/basic/Name";
// import Count from "./state/basic/Count";
// import Sound from "./state/basic/Sound";
// import FoodContainer from "./map/FoodContainer";
// import UserContainer from "./map/expert/UserContainer";
// import Container from "./props/Container";
// import Jsx05 from "./Jsx05";
// import Jsx01 from "./Jsx01";
// import Jsx02 from "./Jsx02";
// import Jsx03 from "./Jsx03";
// import Jsx04 from "./Jsx04";

function App() {
    return (
        // <Jsx01 />
        // <Jsx02 />
        // <Jsx03 />
        // <Jsx04 />
        // <Jsx05 />
        // <Container />
        // <FoodContainer />
        // <UserContainer />
        // <Count />
        // <Sound />
        // <Name />
        // <Color />
        // <Name />
        // <Check />
        // <Checkbox />
        // <CheckInput />
        // <FoodContainer />
        // <LifeCycleContainer />
        // <SideEffect />
        // <ProductContainer />
        // <ThemeProvider theme={theme}>
        //     <div>
        //         <StyledComponent01 />
        //         <GlobalStyle />
        //     </div>
        //     <BasicContainer />
        //     <FontAwesome />
        // </ThemeProvider>
        // <>리엑트 공부!</>
        // <CharContainer />

        // <AnimalsContainer />
        // <CountContainer />
        // <FontContainer />
        <>
            {/* <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/intro" element={<Intro />} />
                <Route path="/job" element={<Job />}>
                    <Route path=":title" element={<Job />} />
                </Route>
            </Routes> */}
            <RouterProvider router={router} />
        </>
    );
}

export default App;
