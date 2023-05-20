import { useEffect } from 'react'
import { useHeaderStore, useHomeStore } from '../../store'

const useHomeLogic = () => {
    const getTrendingCoins = useHomeStore(store => (store.getTrendingCoins));
    const trendingCoins = useHomeStore(store => (store.trendingCoins));
    const isLoading = useHomeStore(store => (store.isLoading));
    const searchResult = useHeaderStore(store => store.searchResult)
    const isSearching = useHeaderStore(store => store.isSearching)

    console.log(trendingCoins);
    console.log(searchResult);

    useEffect(() => {
        if (trendingCoins.length === 0)
            getTrendingCoins();
    }, [getTrendingCoins, trendingCoins.length]);

    return { trendingCoins, searchResult, isSearching, isLoading };
}

export default useHomeLogic