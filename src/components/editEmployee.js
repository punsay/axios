import React, { Component } from 'react';

class EditEmployee extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            this.props.isEditMode && (
                <div>
                    Name:<input type="text" /><br />
                    Address:<br />
                    Street:&nbsp;<input type="text" /><br />
                    Suit:&nbsp;<input type="text" /><br />
                    City:&nbsp;<input type="text" /><br />
                    Zip-Code:&nbsp;<input type="text" />
                </div>
            )
        )
    }
}

export default EditEmployee;