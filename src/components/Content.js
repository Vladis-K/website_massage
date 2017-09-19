import React, { Component } from 'react';
import Slider from 'react-slick';

import ArrowSlide from './ui/arrow/arrow.svg';
import LogoSertif1 from '../data/logo-sertificates/jsi-g.png';
import LogoSertif2 from '../data/logo-sertificates/logo-g.png';
import LogoSertif3 from '../data/logo-sertificates/ohmatdet-g.png';
import LogoSertif4 from '../data/logo-sertificates/logo-liberte-g.png';
import LogoSertif5 from '../data/logo-sertificates/identity-g.png';

import LogoBaby1 from '../data/icons/icon_01.png';
import LogoBaby2 from '../data/icons/icon_02.png';
import LogoBaby3 from '../data/icons/icon_03.png';

import Baby1 from '../data/responds/baby_1.jpg';
import Baby2 from '../data/responds/baby_2.jpg';
import Baby3 from '../data/responds/baby_3.jpg';

import Certificate1 from '../data/sertificates/IMG_4769.JPG';
import Certificate2 from '../data/sertificates/IMG_4770.JPG';



class Content extends Component {

    getPartners() {
        var settings = {
            autoplay: false,
            infinite: true,
            fade: false,
            responsive: [
                {breakpoint: 768, settings: {slidesToShow: 1, arrows: true, dots: false, draggable: true} },
                {breakpoint: 1199, settings: {slidesToShow: 3, arrows: true, dots: false, draggable: true} },
                {breakpoint: 100000, settings: {slidesToShow: 5, arrows: false, dots: false, draggable: false} },
            ],
        };

        return (
            <div className="content__outer">
                <div className="container content__partners">
                    <div className="content__partners_slider">
                        <div className="container">
                            <div className="arrow-partner arrow-partner_prev">
                                <img src={ArrowSlide} onClick={() => this.prevPartner()} />
                            </div>
                            <Slider ref={c => this.partnerSlider = c } {...settings}>
                                <div><img draggable={false} src={LogoSertif1} alt="" /></div>
                                <div><img draggable={false} src={LogoSertif2} alt="" /></div>
                                <div><img draggable={false} src={LogoSertif3} alt="" /></div>
                                <div><img draggable={false} src={LogoSertif4} alt="" /></div>
                                <div><img draggable={false} src={LogoSertif5} alt="" /></div>
                            </Slider>
                            <div className="arrow-partner arrow-partner_next">
                                <img src={ArrowSlide} onClick={() => this.nextPartner()} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    nextPartner() {
        this.partnerSlider.slickNext();
    }

    prevPartner() {
        this.partnerSlider.slickPrev();
    }


    //Certificates
        showCertificates() {
            var settings = {
                autoplay: false,
                infinite: true,
                fade: false,
                slidesToShow: 1,
                responsive: [
                    {breakpoint: 768, settings: {arrows: true, dots: false, draggable: true} },
                    {breakpoint: 1199, settings: {arrows: true, dots: false, draggable: false} },
                    {breakpoint: 100000, settings: {arrows: false, dots: false, draggable: false} },
                ],
            };

            return (
                <div className="certificate">
                    <div className="container content__list">
                        <div className="certificate__list_slider">
                            <div className="container">
                                <div className="arrow-certificate certificate_prev hidden-desktop">
                                    <img src={ArrowSlide} onClick={() => this.prevCertificate()} />
                                </div>
                                <Slider ref={c => this.showSertificates = c } {...settings}>
                                    <div>
                                        <div className="certificate__item">
                                            <div className="certificate__item_scan">
                                               <img className="home-page__campaigns_pict" src={Certificate1} alt="" />
                                           </div>
                                            <div>
                                                <div>Title</div>
                                                <div>Description</div>
                                                <div>
                                                    <button>1 Apply!</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="certificate__item">
                                            <div className="certificate__item_scan">
                                                <img className="home-page__campaigns_pict" src={Certificate2} alt="" />
                                            </div>
                                            <div>
                                                <div>Title</div>
                                                <div>Description</div>
                                                <div>
                                                    <button>2 Apply!</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div onClick={() => this.nextCertificate()} className="arrow-partner certificate_next">!NEXT!</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    nextCertificate() {
            this.showSertificates.slickNext();
        }

    prevCertificate() {
            this.showSertificates.slickPrev();
        }




    //Testimonials
    getTestimonials() {
        var settings = {
            autoplay: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            dots: true,
            responsive: [
                {breakpoint: 768, settings: { arrows: false, draggable: true } },
                {breakpoint: 1199, settings: { arrows: true, draggable: true } },
                {breakpoint: 100000, settings: { arrows: true, draggable: false } },
            ],
        };

        return (
            <div className="content__outer">
                <div className="container content__responds">
                    <div className="content__responds_slider">
                        <div className="container">
                            <div className="arrow-partner arrow-partner_prev">
                                <img src={ArrowSlide} onClick={() => this.prevTestimonial()} />
                            </div>
                            <Slider ref={c => this.certSlider = c } {...settings}>
                                <div className="slider-content">
                                    <div className="slider-content__image"><img draggable={false} src={Baby1} alt="" /></div>
                                    <div className="slider-content__name">John F. (Product Manager)</div>
                                    <div className="slider-content__comment">
                                        "I have worked with the CongressBookers team on several accounts and each time they have overcome all my expectations."
                                    </div>
                                </div>
                                <div className="slider-content">
                                    <div className="slider-content__image"><img draggable={false} src={Baby2} alt="" /></div>
                                    <div className="slider-content__name">John F. (Product Manager)</div>
                                    <div className="slider-content__comment">
                                        "I have worked with the CongressBookers team on several accounts and each time they have overcome all my expectations."
                                    </div>
                                </div>
                                <div className="slider-content">
                                    <div className="slider-content__image"><img draggable={false} src={Baby3} alt="" /></div>
                                    <div className="slider-content__name">John F. (Product Manager)</div>
                                    <div className="slider-content__comment">
                                        "I have worked with the CongressBookers team on several accounts and each time they have overcome all my expectations."
                                    </div>
                                </div>
                            </Slider>
                            <div className="arrow-partner arrow-partner_next">
                                <img src={ArrowSlide} onClick={() => this.nextTestimonial()} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    prevTestimonial() {
        this.certSlider.slickNext();
    }

    nextTestimonial() {
        this.certSlider.slickPrev();
    }



    render(){
        return (
            <div className="content">
                { this.getPartners() }
                <TypeMsg/>
                 {this.showCertificates() }
                <Question/>
                { this.getTestimonials() }
            </div>
        )
    }


}

const TypeMsg = () => (
    <div className="types">
        <div className="info-title">Types of massage</div>
        <div className="info-title-description">Provide different massage techniques
            <br/>that will allowyour child to develop properly
        </div>
        <div className="cards">
            <div className="card">
                <div className="card__icon"><img src={LogoBaby1} alt=""/></div>
                <div className="card__main">Wellness massage</div>
                <div className="card__description">Health baby massage is needed and perfectly healthy infants.
                    When conducting regular courses baby massage the baby is
                    developing well physically and mentally,
                    the impact of energy removed from adults,
                    develop self-regulation skills. In children, improved sleep, appetite and mood.
                    They become calmer and more balanced.
                </div>
            </div>
            <div className="card">
                <div className="card__icon"><img src={LogoBaby3} alt=""/></div>
                <div className="card__main">Massotherapy</div>
                <div className="card__description">
                    Baby massage with elements of physical therapy is carried out in accordance
                    with the age of the child for therapeutic and prophylactic purposes.
                    With the help of a restorative massage at the healthy child will form a
                    correct muscular system, which is important for proper physical
                    development of the baby and diseases like languid posture,
                    torticollis, scoliosis, flat feet.
                </div>
            </div>
            <div className="card">
                <div className="card__icon"><img src={LogoBaby2} alt=""/></div>
                <div className="card__main">Fitball and swimming</div>
                <div className="card__description">
                    What are the benefits of gymnastics on fitball for infants?
                    Start classes at gym ball - fitball - it is possible at the end of the first month of life.
                    This projectile is a ball for fitness.
                    It is also used as a gymnastic to strengthen the muscles in healthy children,
                    and for the treatment of children with health problems.
                </div>
            </div>
        </div>
    </div>
);

const Question = () => (
    <div className="question">
        Question
    </div>
);


export default Content;