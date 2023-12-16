import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

function PizzaBlock({ id, title, price, img, sizes, types }) {
  const dispatch = useDispatch();

  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  const typeNames = ["традиционное", "тонкое"];

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      img,
    };
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={img[activeType]} alt="Pizza" />
        <div className="pizza-block-options">
          <h4 className="pizza-block__title">{title}</h4>
          <div className="pizza-block__selector">
            <ul>
              {types.map((typeId) => (
                <li
                  key={typeId}
                  onClick={() => setActiveType(typeId)}
                  className={activeType === typeId ? "active" : ""}
                >
                  {typeNames[typeId]}
                </li>
              ))}
            </ul>
            <ul>
              {sizes.map((size, i) => (
                <li
                  key={size}
                  onClick={() => setActiveSize(i)}
                  className={activeSize === i ? "active" : ""}
                >
                  {size} см
                </li>
              ))}
            </ul>
          </div>
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">от {price} ₽</div>
            <button
              onClick={() => dispatch(addItem())}
              className="button button--outline button--add"
            >
              <span>Добавить</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
