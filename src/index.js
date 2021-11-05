import React from 'react';
// React 라는 이름으로 react파일을 사용하겠다.
import ReactDOM from 'react-dom';
import App from './App';

// 같은폴더 안에있는 app.js = ./로 같은 파일이라고 명시

ReactDOM.render( //리액트 돔이 랜더링이되었을때 app.js를 id root인 element에다가 부착시켜라.
    <App />,
  document.getElementById('root')
);

