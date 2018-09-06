import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.getData}>
                    <div className="field has-addons">
                        <div className="control is-expanded">
                            <input className="input is-primary is-large is-rounded " type="text" name="link" autocomplete="off"  placeholder="Your Coub Link..." />
                        </div>
                        <div className="control">
                            <button className="button is-large is-danger is-rounded ">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


/**
 * 
 <div class="field has-addons">
  <div class="control">
    <input class="input" type="text" placeholder="Find a repository">
  </div>
  <div class="control">
    <a class="button is-info">
      Search
    </a>
  </div>
</div>
 * 
 */