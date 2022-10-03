import classes from './Balance.module.css';

const Balance = () => {
    let balance = '17800';
    if (parseInt(balance) >= 1000000) {
        balance = [
            balance.slice(-9, -6),
            '.',
            balance.slice(-6, -3),
            '.',
            balance.slice(-3),
        ].join('');
    } else if (parseInt(balance) >= 1000 && parseInt(balance) <= 1000000) {
        balance = [balance.slice(0, -3), '.', balance.slice(-3)].join('');
    }

    return (
        <div className={`${classes.styleHorizontal} ${classes.container}`}>
            <div className={classes.styleHorizontal}>
                <h2 className={classes.symbol}>€</h2>
                <h1 className={classes.amount}>{balance}</h1>
            </div>

            <h3 className={classes.currency}>EUR</h3>
        </div>
    );
};

export default Balance;
