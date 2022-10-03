import classes from './Cashflow.module.css';

const Cashflow = () => {
    return (
        //Align Earned/Spent Text on same position?
        //Green/Red conditional for positive or negative cashflow?
        <div className={classes.container}>
            <div className={classes.earnedSpentContainer}>
                <div className={classes.earnedSpentInnerContainer}>
                    <div className={classes.earned}></div>
                    <h4 className={classes.amount}>€ 2154,46 IN</h4>
                </div>
                <div className={classes.earnedSpentInnerContainer}>
                    <div className={classes.spent}></div>
                    <h4 className={classes.amount}>€ 1478,12 OUT</h4>
                </div>
            </div>
            <h2 className={classes.totalCashflow}>€ +676,34</h2>
        </div>
    );
};

export default Cashflow;
