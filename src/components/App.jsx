import { Avatar } from './Avatar/Avatar';
import { ImageBlock } from './ImageBlock/ImageBlock';
import { Follow } from './Follow/Follow';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.card}>
      <ImageBlock />
      <Avatar />
      <Follow />
    </div>
  );
};
