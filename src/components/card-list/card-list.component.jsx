import './card-list.styles.css';
import Card from "../card/card.component";
const CardList= ({monseters} , frowardRef)=>(
      <div className="card-list">
        {monseters.map((monseter) => {
          return (
            <Card monseter ={monseter} key={monseter.id}/>
          );
        })}
      </div>
    );
  

export default CardList;
