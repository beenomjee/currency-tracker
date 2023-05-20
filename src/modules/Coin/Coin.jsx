import React from 'react'
import useCoinLogic from './useCoinLogic'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styles from './Coin.module.scss';
import LoadingPage from '../LoadingPage/LoadingPage';

const Coin = () => {
    const { historicalData, info, isLoading } = useCoinLogic();
    return (
        isLoading ?
            <LoadingPage />
            :
            <div className={styles.container}>
                <div className={styles.top}>
                    <img src={info.image} alt={info.name} />
                    <h1>{info.name} ({info.symbol})</h1>
                </div>
                <div className={styles.chart}>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={historicalData}>
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            <XAxis dataKey="time" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="price" stroke="#48aacd" fill="#48aacd" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.info}>
                        <h4>Market Cap Rank</h4>
                        <span>{info.market_cap_rank}-Rank</span>
                    </div>
                    <div className={styles.info}>
                        <h4>Last 24H High</h4>
                        <span>{info.high_24h_usd} (USD)</span>
                    </div>
                    <div className={styles.info}>
                        <h4>Last 24H Low</h4>
                        <span>{info.low_24h_usd} (USD)</span>
                    </div>
                    <div className={styles.info}>
                        <h4>Circulating Supply</h4>
                        <span>{info.circulating_supply} (USD)</span>
                    </div>
                    <div className={styles.info}>
                        <h4>Current Price</h4>
                        <span>{info.current_price} (USD)</span>
                    </div>
                    <div className={styles.info}>
                        <h4>Last 1Y Change</h4>
                        <span>{info.price_change_percentage_1y}</span>
                    </div>
                </div>
            </div>
    )
}

export default Coin