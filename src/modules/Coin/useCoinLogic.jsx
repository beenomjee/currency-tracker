import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCoinStore } from "../../store";


const useCoinLogic = () => {
    const { id } = useParams();
    const fetchCoinInfo = useCoinStore(store => store.fetchCoinInfo)
    const historicalData = useCoinStore(store => store.historicalData)
    const info = useCoinStore(store => store.info)
    const isLoading = useCoinStore(store => store.isLoading)

    useEffect(() => {
        fetchCoinInfo(id)
    }, [fetchCoinInfo, id]);

    return { historicalData, info, isLoading };
}

export default useCoinLogic