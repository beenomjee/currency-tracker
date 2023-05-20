import React from 'react'
import styles from './Home.module.scss';
import useHomeLogic from './useHomeLogic';
import { Link } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';

const Home = () => {
    const { trendingCoins, searchResult, isSearching, isLoading } = useHomeLogic();
    return (
        isSearching || isLoading ? <LoadingPage /> :
            <div className={styles.container}>
                <h1>{searchResult.length > 0 ? "Search Result" : "Trending Coins"}</h1>
                {
                    searchResult.length > 0 ? (
                        searchResult.map((coin, index) => (
                            <Link to={coin.id} key={coin.id}>
                                <div className={styles.left}>
                                    <img src={coin.large} alt={coin.name} />
                                    <span>{coin.name}</span>
                                </div>
                                <div className={styles.right}>
                                </div>
                            </Link>
                        ))
                    ) : (
                        trendingCoins.map((coin, index) => (
                            <Link to={coin.id} key={coin.id}>
                                <div className={styles.left}>
                                    <img src={coin.large} alt={coin.name} />
                                    <span>{coin.name}</span>
                                </div>
                                <div className={styles.right}>
                                    <div>
                                        <img src="/imgs/bitcoin.png" alt="Bitcoin" />
                                        <span>{coin.price_btc.toFixed(9)}</span>
                                    </div>
                                    <span>({coin.usd.toFixed(9)} USD)</span>
                                </div>
                            </Link>
                        ))
                    )
                }
            </div>
    )
}

export default Home