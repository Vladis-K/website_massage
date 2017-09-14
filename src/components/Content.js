import React, { Component } from 'react';

import PartnerLogo from '../data/logo_workday.png'

import ClockIcon from '../data/clock-icon.png'
import DataIcon1 from '../data/data-icon-1.png'
import DataIcon2 from '../data/data-icon-2.png'



class Content extends Component {
    render() {
        return (
            <div className="content">
                <Info />
                <Description/>
                <Card tickets={this.props.tickets}/>
                <Partners/>
            </div>
        );
    }
}


const Info = () => (
    <div className="content__links">
        <div className="content-link">
            <a href="#">Early bird <span className="badge">sold out</span></a>
        </div>
        <div className="content__links_slash active-link">/</div>
        <div className="content-link active-link">
            <a href="#"><span>Summer Saver</span>
                <span className="link-logo">
                    <span>
                        <img src={ClockIcon} alt=""/>
                    </span>
                    <span className="link-logo-data">
                        <span><img src={DataIcon1} alt=""/></span>
                        <span><img src={DataIcon2} alt=""/></span>
                    </span>
                </span>
            </a>
        </div>
        <div className="content__links_slash active-link">/</div>
        <div className="content-link"><a href="#">Regular</a></div>
        <div className="content__links_slash">/</div>
        <div className="content-link"><a href="#">Late</a></div>
        <div className="content__links_slash">/</div>
        <div className="content-link"><a href="#">Onsite registration</a></div>
    </div>
);

const Description = () => (
    <div className="content__description hidden-laptop hidden-mobile">
        Fashion axe keytar truffaut migas Farm-to-table PBR&B.
        Drinking vinegar sustainable helvetica sartorial.
        Dreatmcatcher live-edge lo-fi, chartreuse echo park pinterest distillery glossier plaid fingerstache.
        Fashion axe keytar truffaut migas Farm-to-table PBR&B.
        Drinking vinegar sustainable helvetica
    </div>
);

class Card extends Component {

    constructor(){
        super();
        this.state = {
            compare: false,
        };
        this.compareBenefits = this.compareBenefits.bind(this)
    }

    compareBenefits(){
        this.setState({
            compare: !this.state.compare,
        })
    }

    render(){
        const visible = this.state.compare;
        const tickets = JSON.parse(JSON.stringify(this.props.tickets));
        return(
            <div className="">
                <div className="tickets-list">
                    {tickets.map((elem) =>
                        <div key={elem.id} className={`ticket ${visible ? '' : 'collapsed-card'} ${elem.active ? 'ticket-enlarged' : ''}`} >
                            <div className={`ticket__popular ${elem.active ? 'ticket-active' : 'hidden-content'}`}>
                                {elem.description}
                                </div>
                            <div className="ticket__info">{elem.info}</div>
                            <div className="ticket__amount">
                                <span className="currency">{elem.currency}</span>{elem.amount}
                            </div>
                            <div className="ticket__save">{elem.save}</div>
                            <div className={`ticket__typing ${elem.typing ? '' : 'hidden-content'}`}>
                                <input type="text" placeholder={`${elem.typing && elem.placeholderInfo ? `${elem.placeholderInfo}` : 'hidden-content'}`}/>
                            </div>
                            <div className={`ticket__date ${elem.active ? 'date-active' : ''}`}>{elem.date}</div>
                            <div className={`ticket__list ${visible ? '' : 'hidden-content'}`}>
                                <div className="ticket__list_item">
                                    <div><span className="ticket-dot"/></div>
                                    <span className="ticket-sign">{elem.item1}</span>
                                </div>
                                <div className="ticket__list_item">
                                    <div><span className="ticket-dot"/></div>
                                    <span className="ticket-sign">{elem.item2}</span>
                                </div>
                                <div className="ticket__list_item">
                                    <div><span className="ticket-dot"/></div>
                                    <span className="ticket-sign">{elem.item3}</span>
                                </div>
                                <div className="ticket__list_item">
                                    <div><span className="ticket-dot"/></div>
                                    <span className="ticket-sign">{elem.item4}</span>
                                </div>
                                <div className="ticket__list_item">
                                    <div><span className="ticket-dot"/></div>
                                    <span className="ticket-sign">{elem.item5}</span>
                                </div>

                            </div>
                            <div className={`ticket__book`}>
                                <button className={`ticket-btn md-btn ${elem.active ? 'active-btn' : ''}`}>Book Now</button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="ticket__description">
                    <button className="success-btn sm-btn" onClick={this.compareBenefits}>{this.state.compare === false ? "Compare Benefits" : "Close"}</button>
                </div>
            </div>
        )
    }
}


const Partners = () => (
    <div className="partners">
        <div className="partners__sign">Our truster partners</div>
        <div className="partners__list">
            <div className="partners__section">
                <div className="partners__list_logo"><img src={PartnerLogo} alt=""/></div>
                <div className="partners__list_logo"><img src={PartnerLogo} alt=""/></div>
                <div className="partners__list_logo"><img src={PartnerLogo} alt=""/></div>
            </div>
            <div className="partners__section">
                <div className="partners__list_logo"><img src={PartnerLogo} alt=""/></div>
                <div className="partners__list_logo"><img src={PartnerLogo} alt=""/></div>
            </div>
        </div>
    </div>
);

export default Content;