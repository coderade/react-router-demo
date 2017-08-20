import React from 'react';
import {Component} from 'react'

// import fetch from 'isomorphic-fetch'

class MemberList extends Component {
    render() {
        return (
            <div className="member-list">
                <h1>Society Members</h1>
                <ul>
                    <li>Member 1</li>
                    <li>Member 2</li>
                    <li>Member 3</li>
                    <li>Member 4</li>
                </ul>
            </div>
        )
    }
}

export default MemberList;