import { Fragment } from 'react';
import NavbarLayouts from '../components/Layouts/NavbarLayouts';
import BigCarouselTv from '../components/Fragments/BigCarouselTv';
import TvLayouts from '../components/Layouts/TV/TvLayouts';
import TopRatedTv from '../components/Layouts/TV/TopRatedTv';
const TvPage = () => {
  return (
    <Fragment>
      <NavbarLayouts />
      <BigCarouselTv></BigCarouselTv>
      <TvLayouts />
      <TopRatedTv />
    </Fragment>
  );
};

export default TvPage;
