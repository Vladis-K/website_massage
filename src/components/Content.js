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
import Certificate3 from '../data/sertificates/IMG_4771.JPG';


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
                            <div className="arrow-company arrow-company__prev">
                                <div>
                                    <img src={ArrowSlide} onClick={() => this.prevCompany()} />
                                </div>
                            </div>
                            <Slider ref={c => this.partnerSlider = c } {...settings}>
                                <div><img draggable={false} src={LogoSertif1} alt="" /></div>
                                <div><img draggable={false} src={LogoSertif2} alt="" /></div>
                                <div><img draggable={false} src={LogoSertif3} alt="" /></div>
                                <div><img draggable={false} src={LogoSertif4} alt="" /></div>
                                <div><img draggable={false} src={LogoSertif5} alt="" /></div>
                            </Slider>
                            <div className="arrow-company arrow-company__next">
                                <div>
                                    <img src={ArrowSlide} onClick={() => this.nextCompany()} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    nextCompany() {
        this.partnerSlider.slickNext();
    }

    prevCompany() {
        this.partnerSlider.slickPrev();
    }


    //Certificates
        showCertificates() {
            var settings = {
                autoplay: false,
                infinite: true,
                fade: true,
                slidesToShow: 1,
                responsive: [
                    {breakpoint: 768, settings: {arrows: true, dots: false, draggable: true} },
                    {breakpoint: 1199, settings: {arrows: true, dots: false, draggable: false} },
                    {breakpoint: 100000, settings: {arrows: false, dots: false, draggable: false} },
                ],
            };

            return (
                <div >
                <div id="certificates" className="certificate">
                    <div className="certificate__list">
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
                                            <div className="certificate__info">
                                                <div className="certificate__info_title">Title</div>
                                                <div className="certificate__info_about">Description</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="certificate__item">
                                            <div className="certificate__item_scan">
                                                <img className="home-page__campaigns_pict" src={Certificate2} alt="" />
                                            </div>
                                            <div className="certificate__info">
                                                <div className="certificate__info_title">Title</div>
                                                <div className="certificate__info_about">Description</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="certificate__item">
                                            <div className="certificate__item_scan">
                                                <img className="home-page__campaigns_pict" src={Certificate3} alt="" />
                                            </div>
                                            <div className="certificate__info">
                                                <div className="certificate__info_title">Title</div>
                                                <div className="certificate__info_about">Description</div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div onClick={() => this.nextCertificate()} className="arrow-certificate certificate_next">
                                    <i className="fa fa-angle-right" aria-hidden="true"/>
                                </div>
                            </div>
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
            <div id="reviews" className="content__outer">
                <div className="container content__responds">
                    <div className="content__responds_sign">Reviews</div>
                    <div className="content__responds_slider">
                        <div className="container">
                            <div className="arrow-respond arrow-respond_prev">
                                <div>
                                    <img src={ArrowSlide} onClick={() => this.prevTestimonial()} />
                                </div>
                            </div>
                            <Slider ref={c => this.certSlider = c } {...settings}>
                                <div className="slider-content">
                                    <div className="slider-content__image"><img draggable={false} src={Baby1} alt="" /></div>
                                    <div className="slider-content__name">Mariya & Danya</div>
                                    <div className="slider-content__comment">
                                        We passed two courses massage. We had a small son tone,
                                        the doctor will prescribe therapeutic massage. After the first course was
                                        immediately result. In addition, my son began to lie on his stomach,
                                        which before massage is not done at all. After the first year the tone has
                                        bounced back and pulled straight Danya, became a sports small))
                                        We really enjoyed and a half months later, we again turned to Julia,
                                        and went through another course of massage.
                                        Very good specialist and a man! With gratitude, Mariya and Danya!
                                    </div>
                                </div>
                                <div className="slider-content">
                                    <div className="slider-content__image">
                                        <img draggable={false} src={Baby2} alt="" />
                                    </div>
                                    <div className="slider-content__name">Natalia and Alina</div>
                                    <div className="slider-content__comment">
                                        We did massage course with fitball and swimming.
                                        Julia is very good with the children,
                                        it is immediately noticeable. Very grateful to Julia for her work.
                                        The child has become more dynamic and agile. Thanks!
                                    </div>
                                </div>
                                <div className="slider-content">
                                    <div className="slider-content__image">
                                        <img draggable={false} src={Baby3} alt="" />
                                    </div>
                                    <div className="slider-content__name">Irina and Max</div>
                                    <div className="slider-content__comment">
                                        We are very pleased with the massage! The results are seen after one week.
                                        We would advise Julia, an experienced professional who knows how to deal with small children.
                                    </div>
                                </div>
                            </Slider>
                            <div className="arrow-respond arrow-respond_next">
                                <div>
                                    <img src={ArrowSlide} onClick={() => this.nextTestimonial()} />
                                </div>
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
                 <GetServices/>
                { this.getTestimonials() }
            </div>
        )
    }


}

const TypeMsg = () => (
    <div id="massage-types" className="types">
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

class GetServices extends Component{

    constructor(){
        super();
        this.state = {
            shown: -1
        };
        this.collapseChange = this.collapseChange.bind(this);
    }

    collapseChange(shown) {
        this.setState({
            shown: this.state.shown === shown ? -1 : shown,
        });
    }

    render(){
        const shown = this.state.shown;
        return(
            <div id="services" className="services">
                <div className="info-title">Services</div>
                <div className="info-title-description">Different techniques of massage for your child</div>

                <div className="services__depiction">
                    <div className="services__content">
                        <div className="services__content_title">
                            <a className="services__content_link" onClick={()=> this.collapseChange(1)}>
                                <i className="fa fa-child icon-view" aria-hidden="true"/>
                                <span>Classic massage</span>
                                <i className={`fa fa-angle-down icon-view ${shown === 1 ? 'icon-view-up' : ''}`} />
                            </a>
                        </div>
                        <div className={`services__content_description ${shown === 1 ? '' : 'hidden-content'}`}>
                            <div className="collapsed-info">
                                Therapeutic massage is the manipulation of the soft tissue of whole body areas to bring
                                about generalized improvements in health, such as relaxation or improved sleep,
                                or specific physical benefits, such as relief of muscular aches and pains.​pains.
                            </div>
                        </div>
                    </div>
                    <div className="services__content">
                        <div className="services__content_title">
                            <a className="services__content_link" onClick={()=> this.collapseChange(2)}>
                                <i className="fa fa-child icon-view" aria-hidden="true"/>
                                <span>Relaxing massage</span>
                                <i className={`fa fa-angle-down icon-view ${shown === 2 ? 'icon-view-up' : ''}`} />
                            </a>
                        </div>
                        <div className={`services__content_description ${shown === 2 ? '' : 'hidden-content'}`}>
                            <div className="collapsed-info">
                                Therapeutic massage is the manipulation of the soft tissue of whole body areas to bring
                                about generalized improvements in health, such as relaxation or improved sleep,
                                or specific physical benefits, such as relief of muscular aches and pains.​pains.
                            </div>
                        </div>
                    </div>
                    <div className="services__content">
                        <div className="services__content_title">
                            <a className="services__content_link" onClick={()=> this.collapseChange(3)}>
                                <i className="fa fa-child icon-view" aria-hidden="true"/>
                                <span>Preventive massage</span>
                                <i className={`fa fa-angle-down icon-view ${shown === 3 ? 'icon-view-up' : ''}`} />
                            </a>
                        </div>
                        <div className={`services__content_description ${shown === 3 ? '' : 'hidden-content'}`}>
                            <div className="collapsed-info">
                                Therapeutic massage is the manipulation of the soft tissue of whole body areas to bring
                                about generalized improvements in health, such as relaxation or improved sleep,
                                or specific physical benefits, such as relief of muscular aches and pains.​pains.
                            </div>
                        </div>
                    </div>
                    <div className="services__content">
                        <div className="services__content_title">
                            <a className="services__content_link" onClick={()=> this.collapseChange(4)}>
                                <i className="fa fa-child icon-view" aria-hidden="true"/>
                                <span>Dynamic gymnastic</span>
                                <i className={`fa fa-angle-down icon-view ${shown === 4 ? 'icon-view-up' : ''}`} />
                            </a>
                        </div>
                        <div className={`services__content_description ${shown === 4 ? '' : 'hidden-content'}`}>
                            <div className="collapsed-info">
                                Therapeutic massage is the manipulation of the soft tissue of whole body areas to bring
                                about generalized improvements in health, such as relaxation or improved sleep,
                                or specific physical benefits, such as relief of muscular aches and pains.​pains.
                            </div>
                        </div>
                    </div>
                    <div className="services__content">
                        <div className="services__content_title">
                            <a className="services__content_link" onClick={()=> this.collapseChange(5)}>
                                <i className="fa fa-child icon-view" aria-hidden="true"/>
                                <span>Gymnastics on fitball</span>
                                <i className={`fa fa-angle-down icon-view ${shown === 5 ? 'icon-view-up' : ''}`} />
                            </a>
                        </div>
                        <div className={`services__content_description ${shown === 5 ? '' : 'hidden-content'}`}>
                            <div className="collapsed-info">
                                Therapeutic massage is the manipulation of the soft tissue of whole body areas to bring
                                about generalized improvements in health, such as relaxation or improved sleep,
                                or specific physical benefits, such as relief of muscular aches and pains.​pains.
                            </div>
                        </div>
                    </div>
                    <div className="services__content">
                        <div className="services__content_title">
                            <a className="services__content_link" onClick={()=> this.collapseChange(6)}>
                                <i className="fa fa-child icon-view" aria-hidden="true"/>
                                <span>Kids Swimming</span>
                                <i className={`fa fa-angle-down icon-view ${shown === 6 ? 'icon-view-up' : ''}`} />
                            </a>
                        </div>
                        <div className={`services__content_description ${shown === 6 ? '' : 'hidden-content'}`}>
                            <div className="collapsed-info">
                                Our lessons start with Ducklings for children aged 3 up to 5 who are accompanied
                                in the water with a responsible adult.  Your little superstar will be guided by a
                                fully qualified swimming teacher and learn the basic skills of swimming through
                                a range of games to help build water confidence.
                            </div>
                        </div>
                    </div>
                    <div className="services__content">
                        <div className="services__content_title">
                            <a className="services__content_link" onClick={()=> this.collapseChange(7)}>
                                <i className="fa fa-child icon-view" aria-hidden="true"/>
                                <span>Therapeutic massage</span>
                                <i className={`fa fa-angle-down icon-view ${shown === 7 ? 'icon-view-up' : ''}`} />
                            </a>
                        </div>
                        <div className={`services__content_description ${shown === 7 ? '' : 'hidden-content'}`}>
                            <div className="collapsed-info">
                                Therapeutic massage is the manipulation of the soft tissue of whole body areas to bring
                                about generalized improvements in health, such as relaxation or improved sleep,
                                or specific physical benefits, such as relief of muscular aches and pains.​pains.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}   //Services block




export default Content;