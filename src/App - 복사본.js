import React from "react";
import Macaron from "./Macaron";
import Coffee from "./Coffee";
import cakes from "./cakes.json";
import PropTypes from "prop-types";

// function Food(props) { //자식컴포넌트
//   console.log(props);
//   return (
//     <>
//     <h1>I like {props.propsName}</h1>
//     <p>I like {props.propsName2}</p>
//     </>
//   );
// }

// function Food(props) { 
//   const {propsName,propsName2} = props; //구조 분해 할당 1
//   return (
//     <>
//     <h1>I like {propsName}</h1>
//     <p>I like {propsName2}</p>
//     </>
//   );
// }

function Food({propsId,propsName,propsImage}) {//구조 분해 할당 2
  return (
    <div>
      <h1>cake No. {propsId}</h1>
      <h2>{propsName}</h2>
      <img src={propsImage} alt={propsName} />
    </div>
  );
}

/* const cakes = [
  {
    id: 1,
    name: 'Cookie Dough Cake',
    image: 'https://i.pinimg.com/236x/48/6a/9a/486a9aaab8571b0a9e512c23bab36a68.jpg',
  },
  {
    id: 2,
    name: 'Rainbow Cake',
    image: 'https://i.pinimg.com/236x/dc/e3/2e/dce32e513ce557a951cbbe7fe15f10cb.jpg',
  },
  {
    id: 3,
    name: 'Soft & Moist Funfetti Cake',
    image: 'https://i.pinimg.com/236x/69/9f/6c/699f6cb625a4a749c6320d22c075bd6f.jpg',
  },
]; */

function App() { //부모컴포넌트
  return (
    <>
    <div>안녕하세요!!</div>
    <Macaron />
    <Coffee />
    {/* <Food propsName={"Ice cream"} />
    <Food propsName2={"Waffle"} /> */}
    {cakes.map(cake => (
                        <Food propsId={cake.id}
                        propsName={cake.name}
                        propsImage={cake.image}
                        />
    ))}
    </>
  );
}

//npm install prop-types
Food.propTypes = {
  propsId : PropTypes.number.isRequired,
  propsName : PropTypes.string.isRequired,
  propsImage : PropTypes.string
}

export default App;
// app.js를 index.js의 APP이라는 이름으로 내보내기
// app.js = app component
