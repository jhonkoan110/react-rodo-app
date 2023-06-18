import React from 'react';
import { Header } from './components/header/header';
import { addCategory } from './store/category-slice/category-slice';
import { useDispatch } from 'react-redux';

function App() {
  // const dispatch = useDispatch();

  // const handleClick = () => {
  //   dispatch(
  //     addCategory({
  //       title: 'Тестовая категория',
  //       description: 'жопа говно очко',
  //     }),
  //   );
  // };

  return (
    <>
      <Header />

      {/* <button onClick={handleClick}> Добавить категорию</button> */}
    </>
  );
}

export default App;
