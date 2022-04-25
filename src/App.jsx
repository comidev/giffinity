import styled from "@emotion/styled";
import { COLOR, Main } from "styles";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import { Outlet } from "react-router-dom";
import { GifsProvider } from "context/GifsProvider";
import { UserProvider } from "context/UserProvider";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: ${COLOR.BLACK_2};
    color: ${COLOR.WHITE};
    min-height: 100vh;
`;

function App() {
    return (
        <AppContainer>
            <UserProvider>
                <NavBar />
                <Main>
                    <GifsProvider>
                        <Outlet />
                    </GifsProvider>
                </Main>
            </UserProvider>
            <Footer />
        </AppContainer>
    );
}

export default App;
