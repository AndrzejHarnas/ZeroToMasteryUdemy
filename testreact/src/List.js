import React from 'react';


const tab = [];

for(let k=1;k<=40;k++){
tab.push(k);
}

const List = () => {

const test = tab.map((i) => {

  return ( <div key={i} className="fl mv1 mh5 center bg-white br3 dib ba b--black-10">
        <div className="tc">
          <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
          <h1 className="f3 mb2">Mimi W.</h1>
          <h2 className="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
          <button className="tc bg-gold"> Its working </button>
        </div>
      </div>);

})

  return(
<div>
   {test}
</div>
  );
}

export default List;
