import background from 'images/background.png';
import logo from 'images/logo.png';
import css from './ImageBlock.module.css';

export const ImageBlock = () => {
  return (
    <div className={css.imageBlock}>
      <img className={css.logo} src={logo} alt="" />
      <img className={css.image} src={background} alt="" />
    </div>
  );
};
