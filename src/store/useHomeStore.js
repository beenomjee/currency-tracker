import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const homeStore = (set) => ({
  trendingCoins: [],
  isLoading: true,

  getTrendingCoins: async () => {
    const {
      data: {
        bitcoin: { usd },
      },
    } = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    );
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const coins = data.coins.map((coin) => ({
      ...coin.item,
      usd: coin.item.price_btc * usd,
    }));
    set(() => ({
      trendingCoins: coins,
      isLoading: false,
    }));
  },
});

export default create(devtools(homeStore));
