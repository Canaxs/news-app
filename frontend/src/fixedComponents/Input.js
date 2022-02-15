import React, { Component } from 'react'

export default class extends Component {
    render() {
        const {types } = this.props;
        return (
            <div>
                <form>
                <div class="input-group mb-3">
                    <input type={types} className='form-control' aria-label="Text input with checkbox" />
                </div>
                </form>
            </div>
        )
    }
}
