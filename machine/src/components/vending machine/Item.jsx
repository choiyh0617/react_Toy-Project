import React from "react";
import "./css/Item.css"
import Drink1 from "../img/Drink1.png";
import Drink2 from "../img/Drink2.png";
import Drink3 from "../img/Drink3.png";
import Drink4 from "../img/Drink4.png";
import Drink5 from "../img/Drink5.png";
import Drink6 from "../img/Drink6.png";



const Item = () => {
  return (
    <div id="king">
        <div class='item'>
            <img src={Drink1} alt="Drink 1" />
            <div>Drink1</div>
            <button>1500원</button>
        </div>
        
        <div class='item'>
            <img src={Drink2} alt="Drink 2" />
            <div>Drink2</div>
            <button>1500원</button>
        </div>

        <div class='item'>
            <img src={Drink3} alt="Drink 3" />
            <div>Drink3</div>
            <button>900원</button>
        </div>

        <div class='item'>
            <img src={Drink4} alt="Drink 4" />
            <div>Drink4</div>
            <button>1000원</button>
        </div>

        <div class='item'>
            <img src={Drink5} alt="Drink 5" />
            <div>Drink5</div>
            <button>1200원</button>
        </div>

        <div class='item'>
            <img src={Drink6} alt="Drink 6" />
            <div>Drink6</div>
            <button>1700원</button>
        </div>
    </div>
  );
};

export default Item;
