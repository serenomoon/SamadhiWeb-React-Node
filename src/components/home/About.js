import { HomeNav } from '../ui/HomeNav';
import { Foot } from '../home/Foot';
import { yogaImages } from '../../helpers/yogaImages';

export const About = () => {

  return (
    <>
      <HomeNav />
      <div className='container news__new animate__animated animate__fadeIn'>
          <img src={ yogaImages(`./clasesexample1.jpg`)  } className='cardnews__img' alt='news'/>
          <div className='news__text'>
            <h1 style={{ textAlign: "center" }} >Estudio Samadhi</h1>
            <p>
              Sint anim sunt ad aliquip et aute enim id.Dolor elit officia exercitation Lorem culpa magna commodo Lorem eiusmod eiusmod eu excepteur aliquip.
              Sint anim sunt ad aliquip et aute enim id.Dolor elit officia exercitation Lorem culpa magna commodo Lorem eiusmod eiusmod eu excepteur aliquip.
            </p>
            
          </div>
      </div>
      <Foot />
    </>
  )}