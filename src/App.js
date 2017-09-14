import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './App.css'
import HomePage from "./pages/HomePage";

import ImageUrl1 from './data/icon-1.png';
import ImageUrl2 from './data/icon-2.png';
import ImageUrl3 from './data/icon-3.png';
import ImageUrl4 from './data/icon-4.png';

const menu = [
    {
        id: 1,
        item: 'Single Attandee',
        imageUrl: ImageUrl1,

    },
    {
        id: 2,
        item: 'Group Tickets',
        imageUrl: ImageUrl2,

    },
    {
        id: 3,
        item: 'Investors',
        imageUrl: ImageUrl3,

    },
    {
        id: 4,
        item: 'Startups',
        imageUrl: ImageUrl4,

    }];


const tickets = [
    {
        id: 1,
        active: false,
        typing: false,
        placeholderInfo: '',
        description: '',
        info: 'Summer saver',
        currency: '€',
        amount: '1595',
        save: 'Save €300',
        date: 'Until August 31.',
        item1: 'Cold-pressed poke thundercats brooklyn chillwave chartreuse',
        item2: 'Craft beer 3 wolf moon tbh hoodie',
        item3: 'YOLO synth hammoc',
        item4: 'Distillery aesthetic VHS affogato gentrify bespoke',
        item5: 'Chia readymade schlitz brunch yuccie echo park',
    },
    {
        id: 2,
        active: true,
        typing: false,
        placeholderInfo: '',
        description: 'Most popular',
        info: 'Expo Only',
        currency: '€',
        amount: '299',
        save: 'Save €300 from the Summer Saver',
        date: 'Until October',
        item1: 'Cold-pressed poke thundercats brooklyn chillwave chartreuse',
        item2: 'Craft beer 3 wolf moon tbh hoodie',
        item3: 'YOLO synth hammoc',
        item4: 'Distillery aesthetic VHS affogato gentrify bespoke',
        item5: 'Chia readymade schlitz brunch yuccie echo park',
    },
    {
        id: 3,
        active: false,
        typing: false,
        placeholderInfo: '',
        description: '',
        info: 'PUBLIC & GOVERNMENTAL SECTOR',
        currency: '€',
        amount: '1295',
        save: 'Save €300',
        date: 'Until October',
        item1: 'Cold-pressed poke thundercats brooklyn chillwave chartreuse',
        item2: 'Craft beer 3 wolf moon tbh hoodie',
        item3: 'YOLO synth hammoc',
        item4: 'Distillery aesthetic VHS affogato gentrify bespoke',
        item5: 'Chia readymade schlitz brunch yuccie echo park',
    },
    {
        id: 4,
        active: false,
        typing: true,
        placeholderInfo: 'Type it here & then pick DAY01/DAY02 OR BOTH',
        description: '',
        info: 'STANDARD CONFERENCE & EXPO',
        currency: '€',
        amount: '1695',
        save: 'Do you have a promo code?',
        date: '',
        item1: 'Cold-pressed poke thundercats brooklyn chillwave chartreuse',
        item2: 'Craft beer 3 wolf moon tbh hoodie',
        item3: 'YOLO synth hammoc',
        item4: 'Distillery aesthetic VHS affogato gentrify bespoke',
        item5: 'Chia readymade schlitz brunch yuccie echo park',
    },
];



class App extends Component {
    render() {
        return (
            <div>
                <Helmet titleTemplate="%s / HRTECH" />
                <Helmet>
                    <title>HRN</title>
                </Helmet>
                <HomePage
                    menu={menu}
                    tickets={tickets}
                />
            </div>
        );
    }
}


export default App;