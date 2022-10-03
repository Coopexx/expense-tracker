import ProgressBar from './ProgressBar'
import classes from './Budget.module.css'

const Budget = () => {
    return (
        <>
            <div className={classes.captionContainer}>
                <h2>Budget</h2>
                <h3 className={classes.month}>October</h3>
            </div>
            <ProgressBar />
            <div className={classes.amountLeftContainer}>
                <h4 className={classes.amountLeft}>€ 225,67 left</h4>
            </div>
        </>
    )
}

export default Budget
