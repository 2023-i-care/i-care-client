import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '@/styles/Navbar.module.css';

const Navbar = () => {
    const [searchValue, setSearchValue] = useState('');
    const history = useHistory();

    const handleSearch = () => {
        // 검색어를 이용하여 검색 결과 화면으로 이동
        history.push(`/search?q=${searchValue}`);
    };

    return (
        <div className={styles.container}>
            <div className={styles.left_container}>
                <a href="/">
                    <img src="/images/logo.png" alt="로고" />
                </a>
                <div className={styles.search_container}>
                    <input
                        className={styles.search_box}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <img
                        className={styles.search_icon}
                        src="/images/search.png"
                        alt="검색 아이콘"
                        onClick={handleSearch}
                    />
                </div>
            </div>
            <div className={styles.right_container}>
                <div className={styles.text}>
                    <a href="/">소통방</a>
                </div>
                <div className={styles.text}>
                    <a href="/diary">다이어리</a>
                </div>
                <div>
                    <a className={styles.profile} href="/mypage">
                        <img
                            className={styles.profile_img}
                            src="/images/profile.png"
                            alt="프로필 이미지"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
