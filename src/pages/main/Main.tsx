import * as s from './Main.module.scss';
import {Link, Outlet} from 'react-router-dom';
import avatarPng from 'src/assets/avatar.png'
import avatarJpg from 'src/assets/avatar.jpg'
import AppImage from 'src/assets/app-image.svg'

export const Main = () => {

  return (
    <div data-testid={'Main.DataTestId'}>

      <div data-testid={'Links.DataTestId'}>
        <Link to={'/about'}>about</Link>
        <br/>
        <Link to={'/shop'}>shop</Link>
        <br/>
      </div>

      <div>
        <h1 className={s.title}>Hello webpack!</h1>
        <img width={100} height={100} src={avatarPng} alt="AvatarPng"/>
        <img width={100} height={100} src={avatarJpg} alt="AvatarJpg"/>
        <AppImage className={s.icon} width={100} height={100}/>
      </div>

      <div>
        {__ENV__ === 'development' && <h3>ENV=development</h3>}
        {__ENV__ === 'production' && <h3>ENV=production</h3>}
      </div>

      <div>
        {__PLATFORM__ === 'desktop' && <h3>PLATFORM=desktop</h3>}
        {__PLATFORM__ === 'mobile' && <h3>PLATFORM=mobile</h3>}
      </div>

      <Outlet/>

    </div>
  )
}