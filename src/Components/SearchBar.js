import React from 'react';

class SearchBar extends React.Component {
  state={text:''}

  onInputChange = (e) =>{
    e.preventDefault();
    console.log(this.state.text)
    this.props.runMe(this.state.text);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onInputChange}>
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={this.state.text} onChange={(e)=>{this.setState({text:e.target.value})}}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
