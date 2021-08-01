import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from 'reactstrap';

class Index extends React.Component{
    render (){
        return (
            <div className="App container">
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Jim</td>
                            <td>
                                <Button color="success" size="sm" className="mr-2">Edit</Button>
                                <Button color="danger" size="sm">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Index;

if (document.getElementById('index')){
    ReactDOM.render(<Index/>, document.getElementById('index'));
}