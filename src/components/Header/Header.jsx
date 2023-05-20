import React, { useMemo } from 'react'
import { MdSearch } from 'react-icons/md'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import styles from './Header.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useHeaderStore } from '../../store'
import classNames from 'classnames'

const Header = () => {
    const { searchText, setSearchText, onSearchFormSubmit, isSearching } = useHeaderStore(store => store)
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        onSearchFormSubmit();
    }

    const onChangeText = e => {
        navigate('/');
        setSearchText(e);
    }

    const buttonClassName = useMemo(() => {
        return classNames({ [styles.rotate]: isSearching })
    }, [isSearching]);
    return (
        <div className={styles.container}>
            <Link to="/">CoinGecko</Link>
            <form onSubmit={onSubmit}>
                <input value={searchText} onChange={onChangeText} type="text" autoComplete='on' placeholder='Search' required />
                <button className={buttonClassName}>{isSearching ? <AiOutlineLoading3Quarters /> : <MdSearch />}</button>
            </form>
        </div>
    )
}

export default Header