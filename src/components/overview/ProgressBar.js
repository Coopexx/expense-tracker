import classes from './ProgressBar.module.css'

const ProgressBar = () => {
    return (
        <div className={classes.container}>
            <div className={classes.progressBar}></div>
            <div className={classes.backgroundBar}></div>
        </div>
    )
}

export default ProgressBar
