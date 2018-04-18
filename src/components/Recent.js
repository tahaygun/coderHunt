import React, { Component } from 'react';
var api = require('../utils/api');
class Recent extends Component {
    constructor(props) {
        super(props);
        this.state= {
            type:'system',
            result:null

        }
        this.loadRecent = this.loadRecent.bind(this);
        this.changeType = this.changeType.bind(this);
        // this.fetchAll = this.fetchAll.bind(this);
    }
 
    loadRecent() {
        api.getRecent(this.state.type)
        .then(function (data) {
            this.setState(function () {
                return{
                    result:data
                }
            })
        }.bind(this))
    }

   changeType(){
        this.setState(function () {
            return{
                type:this.props.type
            }
        }.bind(this))
   }

    render() {

        return (
            <div>
                <button onClick={this.loadRecent} > Show </button>
                {JSON.stringify(this.state.result)}
     
            </div>
        );
    }
}

export default Recent;
