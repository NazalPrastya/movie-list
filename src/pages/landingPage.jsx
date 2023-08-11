import Slider from 'react-slick';
import { Component } from 'react';
import BigCarousel from '../components/Fragments/BigCarousel';
import { Fragment } from 'react';
import MovieLayouts from '../components/Layouts/MovieLayouts';
import NavbarLayouts from '../components/Layouts/NavbarLayouts';
import CategoryMLayouts from '../components/Layouts/CategoryMLayouts';
import AllMovie from '../components/Layouts/AllMovie';
import FooterLayout from '../components/Layouts/FooterLayout';

const LandingPage = () => {
  return (
    <Fragment>
      <NavbarLayouts />
      <BigCarousel></BigCarousel>
      <MovieLayouts></MovieLayouts>
      <CategoryMLayouts></CategoryMLayouts>
      <AllMovie></AllMovie>
      <FooterLayout></FooterLayout>
    </Fragment>
  );
};

export default LandingPage;
