import React, { useRef } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import CardHe from '../../page/members/pendingMembers/card/card';
import styles from './carousel.module.css';
import LEFT from '../../../assets/left.svg';
import RIGHT from '../../../assets/right.svg';
import Button from '../button/button';

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function Carousel() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const left: any = useRef(null);
  const right: any = useRef(null);


  const isItemSelected = (id: any) => !!selected.find((el) => el === id);

  const handleClick =
    (id: any) =>
    ({ getItemById, scrollToItem }: any) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

    function LeftArrow() {
      const { isFirstItemVisible, scrollPrev } =
        React.useContext(VisibilityContext);
    
      return (
        <div onClick={() => scrollPrev()} style={{display: "none"}} ref={left}>
          Left
        </div>
      );
    }
    
    function RightArrow() {
      const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
    
      return (
        <div onClick={() => scrollNext()} style={{display: "none"}} ref={right}>
          Right
        </div>
      );
    }
    function Card({ onClick, selected, title, itemId }: any) {
      const visibility = React.useContext(VisibilityContext);
    
      return (
        <div
          // onClick={() => onClick(visibility)}
        
          tabIndex={0}
        >
          <div className={styles.CardDiv}>
            <CardHe />
          </div>
          
        </div>
      );
    }

  return (
    <>
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <h1>7 Pending Members</h1>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Button type="cancel">Hide</Button>
          <img src={LEFT} onClick={() => {
            left.current.click();
           }} alt="left" />

            <img src={RIGHT} onClick={() => {
              right.current.click();
            }} alt="right"/>
      </div>
    </div>
    
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map(({ id }) => (
        <Card
          itemId={id} // NOTE: itemId is required for track items
          title={id}
          key={id}
          onClick={handleClick(id)}
          selected={isItemSelected(id)}
        />
      ))}
    </ScrollMenu>
    </>
    
  );
}





export default Carousel;