import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import TopContainer from './TopContainer';
import BottomContainer from './BottomContainer';
import DistrictRepository from '../helper';
import kinderData from '../../data/kindergartners_in_full_day_program'
const district = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      comparedData: []
    }
    this.searchLocation = this.searchLocation.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({ data: district.findAllMatches() })
  }

  searchLocation(string) {
    this.setState({
      data: district.findAllMatches(string)
    })
  }

  handleClick(location) {
    const locationMatch = this.state.comparedData.filter( object => {
      if (object.location === location) {
        return object
      }
    })

    if (locationMatch.length === 1) {
      const locationIndex = this.state.comparedData.indexOf(locationMatch[0])
      console.log(locationIndex)
      this.state.comparedData.splice(locationIndex, 1)

      this.setState({
        comparedData: this.state.comparedData
      })
    } else {
      const foundLocation = district.findByName(location)
      this.state.comparedData.push(foundLocation)
      this.setState({
        comparedData: this.state.comparedData
      })
    }
  }

  render() {

    return (
      <div>
        <Header search={this.searchLocation} />
        <TopContainer comparedData={this.state.comparedData} handleClick={this.handleClick} />
        <BottomContainer schoolData={this.state.data} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
