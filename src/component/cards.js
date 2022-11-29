import React, { Component } from 'react';
import styles from './cards.module.css';
import Card from './card';
import apple from '../images/apple.png'
import samsung from '../images/samsung.jpg'
import xiaomi from '../images/Xiaomi-mi-logo.jpg'
import Huawei from '../images/Huawei-logo.jpg'

class Cards extends Component {
    render() {
        return (
            <div className= {styles.container}>
                <Card image={apple} name="Apple" cost= "4.2m $" />
                <Card image={samsung} name="Samsung" cost= "3.9m $" />
                <Card image={xiaomi} name="Xiaomi" cost= "3.5m $" />
                <Card image={Huawei} name="Huawei" cost= "2.8m $" />
            </div>
        );
    }
}

export default Cards;
