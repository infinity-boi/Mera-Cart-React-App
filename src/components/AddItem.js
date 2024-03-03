import {Component} from "react";
// export default function AddItem(props){
class AddItem extends Component {
    constructor(props){
        super(props);
        this.state ={
            productName: "",
            productPrice: 0
        }
    }
  render() {
    return (
      <form className="row" onSubmit={(e)=>{
        e.preventDefault();
        this.props.addItem(this.state.productName, Number(this.state.productPrice));
      }}>
        <div className="mb-3 col-5">
          <label htmlFor="exampleProductName" className="form-label">
            Product Name
          </label>
          <input
            type="productName"
            className="form-control"
            id="exampleProductName"
            aria-describedby="productHelp"
            name="productName"
            onChange={(e)=>{
                this.setState({productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-5">
          <label htmlFor="examplePrice" className="form-label">
            Price
          </label>
          <input type="price" className="form-control" id="examplePrice" name="productPrice"
          onChange={(e)=>{
            this.setState({productPrice: Number(e.currentTarget.value) });
        }}
        value={this.state.productPrice}
        />
        </div>
        <div className="mb-3 col-2">
        <button
          type="submit"
          className="col-12 btn btn-primary"
        >
          Add Item
        </button>
        </div>
      </form>
    );
  }
}

export default AddItem;
