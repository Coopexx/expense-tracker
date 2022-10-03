import classes from './App.module.css';
import Navigation from './components/overview/Navigation';
import Profile from './components/overview/Profile';
import Balance from './components/overview/Balance';
import Budget from './components/overview/Budget';
import Cashflow from './components/overview/Cashflow';
import SpendingMonthly from './components/overview/SpendingMonthly';
import SpendingCategories from './components/overview/SpendingCategories';

function App() {
    return (
        <div className={classes.container}>
            <div className={classes.styleHorizontal}>
                <Navigation />
                <Profile />
            </div>
            <Balance />
            <Budget />
            <Cashflow />
            <SpendingCategories />
            <SpendingMonthly />
        </div>
    );
}

export default App;
