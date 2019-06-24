import React from "react";
import { Label, List, Checkbox } from "semantic-ui-react";
import products from './App.json';

const categories = [];
let arraySelected = [];

class ProductsTreeSelect extends React.Component {

  state = {
    selected: false
  };

  handleSelected = item => {
    arraySelected.push(item);
    console.log(':)');
  }

  handleTreeSelect = products => {
    let levelOne = this.handleLevel(products);
    return levelOne;
  }

  handleLevel = products => {
    let temp = [];
    let newElements = products['children'];
    for (let i = 0; i < newElements.length; i++) {
      temp.push(
        <List.Item>
          <List.Icon><Checkbox/></List.Icon>
          <List.Content>
            <List.Header>{newElements[i].label}</List.Header>
            {
              newElements[i].hasOwnProperty('children')
              ? <List.List>{this.handleTreeSelect(newElements[i])}</List.List>
              : ''
            } 
          </List.Content>
        </List.Item>
      );
    }
    return temp;
  }

  handleSublevel = products => {
    let temp = [];
    let newElements = products['children'];
    for (let i = 0; i < newElements.length; i++) {
      temp.push(
        <List.Item>
          <List.Icon><Checkbox /></List.Icon>
          <List.Content>
            <List.Header>{newElements[i].label}</List.Header>
          </List.Content>
        </List.Item>
      );
    }
    return temp;
  }

  render() {

    for (let i = 0; i < products.length; i++) {
      categories.push(
      );
    }

    console.log(categories);

    return (
      <List>
        {
          products.map(category => (
            <List.Item>
              <List.Icon><Checkbox /></List.Icon>
              <List.Content>
                <List.Header>{ category.label }</List.Header>
                {
                  category.hasOwnProperty('children')
                  ?
                  <List.List>
                    {
                      category['children'].map(levelOne => (
                        <List.Item>
                          <List.Icon><Checkbox /></List.Icon>
                          <List.Content>
                            <List.Header>{levelOne.label}</List.Header>
                          </List.Content>
                        </List.Item>
                      ))
                    }
                  </List.List>
                  :
                  ''
                }              
              </List.Content>
            </List.Item>
          ))
        }
      </List>
    );

  }

}

export default ProductsTreeSelect;
