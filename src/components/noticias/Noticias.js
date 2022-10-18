import { HomeNav } from '../ui/HomeNav';
import { Foot } from '../home/Foot';
import { useNoticiaStore } from '../../hooks';

export const Noticias = () => {

  const { activeNoticia } = useNoticiaStore();
  const { title, message, uploadimg } = activeNoticia;

  return (
    <>
      <HomeNav />
      <div className='container news__new animate__animated animate__fadeIn'>
          <img src={uploadimg} className='cardnews__img' alt='news'/>
          <div className='news__text'>
            <h1>{title}</h1>
            <p>
              {message}
            </p>
            <button className='btn news__btn'><i class="fas fa-share"></i></button>
            
          </div>
      </div>
      <Foot />
    </>
  )}
