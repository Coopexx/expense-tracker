import classes from './App.module.css'
import Balance from './components/overview/Balance'
import Expenses from './components/overview/Expenses'
import Navigation from './components/overview/Navigation'
import Profile from './components/overview/Profile'

function App() {
    return (
        <div className={classes.container}>
            <div className={classes.styleHorizontal}>
                <Navigation />
                <Profile />
            </div>
            <Balance />
            <Expenses />
        </div>
    )
}

export default App
