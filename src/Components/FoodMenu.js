import React, { Component } from 'react';
import './FoodMenu.css';
import data from './data';
class FoodMenu extends Component {
    constructor(props) {
        super(props);
    }
    buyNow = (e) => {
        let item = data.filter((temp) => {
            return temp.name === e.currentTarget.id;
        })[0];
        alert(`Buy Now: ${item.name}`);
    }

    render() {
        return (
            <div className="card-container">
                {data.map((card, index) => {
                    return (
                        <div className="card" key={card.name}>
                            <div className="image-container">
                                <img src={card.image} />
                            </div>
                            <div className="dish-header">
                                <div className="name">
                                    <h3>{card.name}</h3>
                                    <p>{card.locations}</p>
                                    <p>{card.containsVoucher}</p>
                                </div>
                                <div className="ratings">
                                    {card.ratings}<i class="fas fa-star fa-xs"></i>
                                </div>
                            </div>
                            <div className="description">
                                <p>{card.description}</p>
                            </div>
                            <div className="action">
                                <i class="far fa-heart"></i>
                                <button id={card.name} onClick={this.buyNow}>Buy Now</button>
                            </div>


                        </div>
                    );
                })}

            </div>


        );



    }




}
export default FoodMenu;