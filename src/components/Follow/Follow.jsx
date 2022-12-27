import { useEffect } from 'react';
import { useState } from 'react';
import { toStringWithSymbol } from 'utils/addSymbol';
import css from './Follow.module.css';

export const Follow = () => {
  const storageKey = 'followers';
  const baseState = {
    followers: 100500,
    isFollowed: false,
  };
  const [followerData, setFollowerData] = useState(
    JSON.parse(localStorage.getItem(storageKey)) || baseState
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(followerData));
  }, [followerData]);

  const onBtnClick = () => {
    setFollowerData(({ followers, isFollowed }) => ({
      followers: isFollowed ? followers - 1 : followers + 1,
      isFollowed: !isFollowed,
    }));
  };
  const { followers, isFollowed } = followerData;
  return (
    <div className={css.followBlock}>
      <p className={css.tweets}>777 tweets</p>
      <p className={css.followers}>
        {toStringWithSymbol(followers, ',')} followers
      </p>
      <button
        className={isFollowed ? css.followBtnActive : css.followBtn}
        onClick={onBtnClick}
        type="button"
      >
        {isFollowed ? 'following' : 'follow'}
      </button>
    </div>
  );
};
