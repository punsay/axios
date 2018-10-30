import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

import "./css/employee.css";

class Employee extends Component {

    constructor(props) {
        super(props);

        this.state = {
            _emp: props.empDetail
        }
    }

    handleInputChange = e => {

        let temp = { ...this.state._emp };
        console.log(" _emp : ", temp);
        temp.address[e.target.name] = e.target.value;
        
        this.setState({ _emp: temp });
    };

    componentWillReceiveProps({ empDetail }) {
        this.setState({
            _emp: empDetail
        });
    }

    render() {

        console.log("STATE:  ", this.state);

        let { empDetail, handleNameOnClick, empData, handleEditAction, isEditMode,
            isDeleteMode, handleSubmitAction, handleDeleteAction } = this.props;
        let _list = empData.map((_data) => {
            return (
                <div key={_data.id} onClick={() => handleNameOnClick(_data)}>
                    <span className="displayList">
                        {_data.name}
                    </span>
                </div>
            )
        });

        return (
            <div key={this.state.id}>
                <Alert>
                    {_list}
                </Alert>

                {/* {JSON.stringify(this.state)} */}

                {
                    isEditMode ?
                        (
                            <div >
                                Name:<label>{this.state._emp.name}</label><br />
                                Address:<br />
                                Street:&nbsp;<input type="text" onChange={this.handleInputChange} value={this.state._emp.address.street} name="street" /><br />
                                Suite:&nbsp;<input type="text" onChange={this.handleInputChange} value={this.state._emp.address.suite} name="suite" /><br />
                                City:&nbsp;<input type="text" onChange={this.handleInputChange} value={this.state._emp.address.city} name="city" /><br />
                                Zip-Code:&nbsp;<input type="text" onChange={this.handleInputChange} value={this.state._emp.address.zipcode} name="city" /><br />
                                <button onClick={() => handleSubmitAction(this.state._emp)}>Save</button>
                            </div>
                        )
                        :
                        (
                            empDetail && (
                                !isDeleteMode ? (
                                    <div>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Name :</th>
                                                    <td>{empDetail.name}</td>
                                                </tr>

                                                <tr>
                                                    <th>User Name :</th>
                                                    <td>{empDetail.username}</td>
                                                </tr>

                                                <tr>
                                                    <th>Email:</th>
                                                    <td>{empDetail.email}</td>
                                                </tr>

                                                <tr>
                                                    <th>Address :</th>
                                                    <td>Street: {empDetail.address.street}</td>
                                                    <td> Suite: {empDetail.address.suite}</td>
                                                    <td> City: {empDetail.address.city}</td>
                                                    <td> ZipCode: {empDetail.address.zipcode}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button onClick={handleEditAction}>Edit</button>
                                                        <button onClick={() => handleDeleteAction(empDetail.id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                ) : (
                                        <div></div>
                                    )
                            )

                        )
                }
            </div>

        )
    }

}



export default Employee;