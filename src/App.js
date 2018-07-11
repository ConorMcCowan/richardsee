import React from 'react'
import { 
    BrowserRouter,
    Route,
    NavLink,
    Switch
} from 'react-router-dom'
import Work from '../src/Components/Work'
import About from '../src/Components/About'
import Contact from '../src/Components/Contact'
import './App.css'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                    <h1 className="App-title">Hi I'm Richard</h1>
                    </header>

                    <NavLink to="/work" style={{padding: "10px", display: "inline-block"}}>Work</NavLink>
                    <NavLink to="/about" style={{padding: "10px", display: "inline-block"}}>About</NavLink>
                    <NavLink to="/contact" style={{padding: "10px", display: "inline-block"}}>Contact</NavLink>
                    <NavLink to="/testpage" style={{padding: "10px", display: "inline-block"}}>Test link</NavLink>

                    <Switch>
                        <Route path="/work" render={() => <Work work="Work page" />} />
                        <Route path="/about" render={() => <About about="About page" />} />
                        <Route path="/contact" render={() => <Contact contact="Contact page" />} />
                        <Route path="/testpage" component={TestPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

const TestPage = () => (
    <div>
        <h3>Welcome to the new page. Please select more options</h3>
        <NavLink to="/testpage/one" style={{padding: "0 10px"}}>One</NavLink>
        <NavLink to="/testpage/two" style={{padding: "0 10px"}}>Two</NavLink>
        <NavLink to="/tetpage/three" style={{padding: "0 10px"}}>Three</NavLink>
        <Route
            path="/testpage/:count"
            render={({match}) => <div style={{padding: "15px"}}>{match.params.count}</div>}
        />
    </div>
)

export default App;
