import avatarImg from 'images/avatar.png';
import css from './Avatar.module.css';

export const Avatar = () => {
  return (
    <div className={css.imageWrap}>
      <img className={css.image} src={avatarImg} alt="avatar" />
    </div>
  );
};
