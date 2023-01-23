import './ExpenseItem.css';
function ExpenseItem() {
    return(
     <div className='expense-item '>
   <div>April 22th 1998</div>
   <div className='expense-item__description'>
    <h2>Car Insurance</h2>
    <div className='expense-item__price'>222</div>
    </div>
    </div>
    );
}
export default ExpenseItem;