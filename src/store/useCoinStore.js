import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const coinStore = (set) => ({
  historicalData: [],
  info: {},
  isLoading: true,
  fetchCoinInfo: async (id) => {
    set(() => ({ isLoading: true }));
    const {
      data: { prices },
    } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=150`
    );
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`
    );
    set(() => ({
      historicalData: prices.map((price) => ({
        price: price[1],
        time: new Date(price[0]).toLocaleString().slice(0, 10),
      })),
      info: {
        name: data.name,
        symbol: data.symbol,
        market_cap_rank: data.market_cap_rank,
        high_24h_usd: data.market_data.high_24h.usd,
        low_24h_usd: data.market_data.low_24h.usd,
        circulating_supply: data.market_data.circulating_supply,
        current_price: data.market_data.current_price.usd,
        price_change_percentage_1y:
          data.market_data.price_change_percentage_1y.toFixed(2),
        image: data.image.large,
      },
      isLoading: false,
    }));
  },
});

export default create(devtools(coinStore));
