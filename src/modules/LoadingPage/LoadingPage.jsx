import React from 'react'
import { Loader } from '../../components'
import styles from './LoadingPage.module.scss';

const LoadingPage = () => {
    return (
        <div className={styles.container}><Loader /></div>
    )
}

export default LoadingPage