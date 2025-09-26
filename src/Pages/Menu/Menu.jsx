import React from "react";
import "./Menu.css";

export default function Menu() {
  const flavors = [
    "Lively Lemon","Juicy Mango","Cool Coconut","Carribean Punch","Orange Creamcicle",
    "Wild Cherry","Vanilla Cream","Twisted Melon Ball","WTF!!!??????","Sour Green Apple",
    "Strawberry Melon","Strawberry Lemonade","Root Beer Float","Blue Cotton Candy","Cherry Vanilla",
    "Cool Mint","Cherry Colada","Hershey Bar Chocolate","Mango Pineapple","Mint Chocolate Chip",
    "Golden Guava","Jamacian Punch","Passionfruit","Black Raspberry",
    "Chillin' Cherry","Best Pina Colada","Wild Watermelon","Blue Raspberry","Strawberry Cream",
    "Purple Cotton Candy","Honeydew","Chunky Peach","Pink Cotton Candy","Mango Peach",
    "Strawberry Banana","Bannana Blast","Red Raspberry","Strawberry Kiwi","Pink Lemonade",
    "Island Ice","Chunky Mango","Fruit Cocktail","Fruit Punch Gatorade","Cherry Lemon",
    "Bubble Gum","Sour Blue Raspberry","Cherry Mango","Margarita",
    "Tropical Fruit","Fresh Strawberry","Black Cherry","Strawberry Colada","Salted Caramel",
    "Blue Sprite","Very Berry","Ice Tea","Orange Mango","Strawberry Kiwi Banana",
    "Zombie Blood","Cantaloupe","Raspberry Iced Tea","Strawberry Mango","Bubble Gum",
    "Peaches & Cream","Sunkist Orange","Pure Pineapple","Banana Blast","Sour Apple",
    "Purple Rain Grape","Strawberry Cream","Cranberry Cocktail","Coconut Cream"
  ];

  return (
    <section id="menu" className="menu-container">
      <h2 className="menu-title">🍧 Incredible Homemade Italian Water Ice</h2>
      <p className="menu-subtitle">
        Choose from our huge variety of flavors – many can even be made <strong>SUGAR FREE!</strong>
      </p>

      <div className="menu-grid">
        {flavors.map((flavor, index) => (
          <div key={index} className="menu-item">
            {flavor}
          </div>
        ))}
      </div>
    </section>
  );
}