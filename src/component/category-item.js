import React, { Component, Fragment } from 'react';
import CatCreateForm from './category-form';
//import { catDestroy, catUpdate } from '../action/category-action';

export default class CategoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false
    }
  }
  updateView = () => {
    this.setState({view: true});
  }
  returnView = () => {
    this.setState({view: false});
  }
  onDestroy = () => {
      this.props.onDestroy(this.props.category);
    }
  
 catUpdate = (category) => {
  this.props.onComplete(category);
  }

  render() {
      return(
        <Fragment>
          <div onDoubleClick={this.updateView}>
            <li>
              <h3>{this.props.category.name}</h3>
            </li>
            <li>
              <h3>${this.props.category.budget}.00</h3>
            </li>
            <button onClick={this.onDestroy}>Delete</button>
            {this.state.view && <CatCreateForm onComplete={this.catUpdate} category={this.props.category} onClick={this.returnView} buttonText = 'edit'/>}
          </div>
        </Fragment>
      );
      
  }
}
// const mapDispatchToProps = (dispatch) => ({
//     onRemove: category => dispatch(catDestroy(category)),
//     onUpdate: category => dispatch(catUpdate(category)),
// });
// export default connect(null, mapDispatchToProps)(CategoryItem);