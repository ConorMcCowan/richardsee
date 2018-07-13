import React, { Fragment } from 'react'
import {
    BrowserRouter,
    Route,
    NavLink,
    Switch
} from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'

import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

const Background = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #282828;
`

const TitleWrapper = styled.div`
    display: inline-block;
    padding: 20px;

    @media (min-width: 600px) {
        font-size: 40px;
    }
`

const Title = styled.h1`
    color: #ffffff;
    margin: 0;
    font-size: 32px;

    @media (min-width: 600px) {
        font-size: 40px;
    }

    @media (min-width: 900px) {
        font-size: 50px;
    }

    @media (min-width: 1200px) {
        font-size: 50px;
    }
`

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Background>
                        <TitleWrapper>
                            <Title>RICHARD SEE</Title>
                        </TitleWrapper>
                        <Header />
                    </Background>
                    <div style={{height: '700px'}}>
                        <Switch>
                            <Route path="/work" render={() => <Work work="Work page" />} />
                            <Route path="/about" render={() => <About about="About page" />} />
                            <Route path="/contact" render={() => <Contact contact="Contact page" />} />
                        </Switch>
                    </div>
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default App;