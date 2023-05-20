import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { debounce } from "../utils";

const headerStore = (set, get) => ({
  searchResult: [],
  searchText: "",
  isSearching: false,
  setSearchText: (e) => {
    set(() => {
      return {
        searchText: e.target.value,
        isSearching: Boolean(e.target.value),
      };
    });
    get().onSearchFormSubmit();

    if (e.target.value === "")
      set(() => {
        return {
          searchResult: [],
        };
      });
  },

  onSearchFormSubmit: debounce(async () => {
    if (get().searchText === "") return;

    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/search?query=${get().searchText}`
    );
    set(() => {
      return { searchResult: data.coins, isSearching: false };
    });
  }, 500),
});

export default create(devtools(headerStore));
