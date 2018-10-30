import React from 'react';
import Axios from 'axios';
import Employee from './components/employee';
import EditEmployee from './components/editEmployee';



class App extends React.Component {

    constructor() {
        super();
        this.state = {
            empData: [],
            empDetail: null,
            isEditMode: false,
            isDeleteMode: false
        };
    }

    componentDidMount() {
        this.getApiData();
    }

    getApiData = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ empData: response.data }, () => {
                    console.log(" >>>> ", this.state.empData);
                });
            })
            .catch((error) => {
                console.log(error);

            });
    }

    handleNameOnClick = (_data) => {

        // const currentEmp = this.state.empData.filter((_data) => {
        //     return _data['id'] === id;
        // });

        console.log('current user --------', _data);

        this.setState({
            empDetail: _data,
            isDeleteMode: false
        })
    }

    handleEditAction = () => {
        this.setState({
            isEditMode: true
        });
    }

    handleSubmitAction = (modifiedEmpData) => {

        const objIndex = this.state.empData.findIndex((obj => obj.id === modifiedEmpData.id));

        const updatedEmpData = [
            ...this.state.empData.slice(0, objIndex),
            modifiedEmpData,
            ...this.state.empData.slice(objIndex + 1),
        ];

        // console(JSON.stringify("updatedEmpData.....", updatedEmpData));

        this.setState({
            empData: updatedEmpData,
            empDetail: modifiedEmpData,
            isEditMode: ""

        });
    }

    handleDeleteAction = (id) => {

        const objIndex = this.state.empData.findIndex((obj => obj.id === id));

        const updatedEmpData = [
            ...this.state.empData.slice(0, objIndex),
            ...this.state.empData.slice(objIndex + 1),
        ];

        this.setState({
            isDeleteMode: "true",
            empData: updatedEmpData
        });

    }
    render() {
        return (
            <div>
                <Employee
                    empData={this.state.empData}
                    handleNameOnClick={this.handleNameOnClick}
                    empDetail={this.state.empDetail}
                    handleEditAction={this.handleEditAction}
                    isEditMode={this.state.isEditMode}
                    handleSubmitAction={this.handleSubmitAction}
                    handleDeleteAction={this.handleDeleteAction}
                    isDeleteMode={this.state.isDeleteMode}
                />
                {/* isEditMode...: {this.state.isEditMode}
                isSaved....: {this.isSaved} */}
            </div>
        )
    }
}
export default App;