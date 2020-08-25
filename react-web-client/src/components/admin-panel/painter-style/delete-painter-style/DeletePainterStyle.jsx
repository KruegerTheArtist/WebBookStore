import React from 'react';
import "./DeletePainterStyle.css";

let Child = (props) => {
  return (
    <option>{props.name}
    </option>
  );
};

const DeletePainterStyle = (props) => {
  let name1 = React.createRef();
  let sel = React.createRef();

  let deletePainter = () => {
    let painterStyle = props.painterStyles.painterStyles.find(ps => ps.name === name1.current.value);
    props.deletePainterStyle.painterStyleMethods.deletePainterStyle(painterStyle.id);
  }

  let clear = () => {
    name1.current.value = '';
  }
  
  const allPainterStyles = props.deletePainterStyle.state.content.painterStyles;
  console.log('PRRRRRRRRRRRRRRRR', allPainterStyles);
  let newArray = [{ name: 'stringstring', id: '1' }, { name: 'stringstring2', id: '2' }];
  newArray = allPainterStyles.map((ps) => {
    return <Child key={ps.id} name={ps.name} />;
  });
  return (
    <div className="add-form">
      <h3>Delete painter style</h3>
      <div>
        <input className="input" ref={name1} placeholder="Название жанра" />
      </div>
      <select ref={sel}>
        {newArray}
      </select>
      <div>
        <button className="button" onClick={deletePainter}>delete</button>
        <button className="button" onClick={clear}>Clear</button>
      </div>

    </div >
  );
}

export default DeletePainterStyle;



// const Countries = [
//     {countryName: 'Bob', countryAbv: 'Smith'},
//     {countryName: 'Sam', countryAbv: 'Spade'},
//     {countryName: 'Carol', countryAbv: 'Alexander'},
//     {countryName: 'Sarah', countryAbv: 'Jones'}
//   ]

//   // Our child component that will display our names:



//   const Parent = React.createClass({
//     getInitialState: function() {
//       return {countries: Countries};
//     },
//     render: function() {
//       const countries = this.state.countries.map((country, i) => {
//         return (
//           <Child
//             key={i}
//             countryName={country.countryName}
//             countryAbv={country.countryAbv}
//           />
//         );
//       });
//      return (
//       <div className="country-select">
//           <select>
//          {countries}
//          </select>  
//       </div>


//      );
//     }
//   });