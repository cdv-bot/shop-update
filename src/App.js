import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.scss';
import './App.scss';
import FooterInfo from './component/footer/FooterInfo';
import FooterTag from './component/footer/FooterTag';
import FooterBottom from './component/footer/Footer_bottom';
import MailSign from './component/mailSign/MailSign';
import MapStore from './component/mapStore/MapStore';
import MenuBar from './component/menu/MenuBar';
import MenuMobile from './component/menu/MenuMobile';
// import ButtonScroll from './component/scrollTop/buttonScroll';
import SideBar from './component/sideBar/SideBar';
import Home from './pages/home';
import { showMenu } from './store/menuMobile';
import { SWRConfig } from 'swr';
const fetcher = (resource) => fetch(resource).then((res) => res.json());

function App() {
  const data = useSelector((state) => state.menuBar);
  const dispatch = useDispatch();
  const handlerCloseMenu = () => {
    let action = showMenu();
    dispatch(action);
  };
  return (
    <div className='App'>
      <SWRConfig value={fetcher}>
        <SideBar />
        <MenuBar />
        <div className={classNames('start_main', { tranform_Main: data })}>
          <MenuMobile />
          <Home />
          <MapStore />
          <FooterTag />
          <MailSign />
          <FooterInfo />
          <FooterBottom />
        </div>
        {/* <ButtonScroll /> */}

        {data ? <div className='close_menu' onClick={handlerCloseMenu}></div> : null}
      </SWRConfig>
    </div>
  );
}

export default App;
