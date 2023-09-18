import styles from './Profile.module.scss'
import img from '../../assets/react.svg'


export const Profile = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.frame}>
                        <img className={styles.avatar} src={img}/>
                        <h1 className={styles.text}>spxcyyy</h1>
                        <br/>
                            <p>
                                <a className={styles['button-text']}>spxcyyy</a>
                                <span className={styles['hint-text']}>#4328950</span>
                            </p>
                    </div>
                </div>        
                <div className={styles.box}>
                    <div className={styles.frame}>
                        <img className={styles.avatar} src={img}/>
                        <h1 className={styles.text}>spxcyyy</h1>
                        <br/>
                            <p>
                                <a className={styles['button-text']}>spxcyyy</a>
                                <span className={styles['hint-text']}>#4328950</span>
                            </p>
                    </div>
                </div>        
                <div className={styles.box}>
                    <div className={styles.frame}>
                        <img className={styles.avatar} src={img}/>
                        <h1 className={styles.text}>spxcyyy</h1>
                        <br/>
                            <p>
                                <a className={styles['button-text']}>spxcyyy</a>
                                <span className={styles['hint-text']}>#4328950</span>
                            </p>
                    </div>
                </div>        
            </div>
        </div>
    )
}