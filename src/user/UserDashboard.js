import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import {users} from './mockData';
import Users from './Users';

const { Content} = Layout;

class UserDashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
        users:users
    };
  }

  delUserById = (userId) => {
    let newUsers = this.state.users.slice(0);
    let index = newUsers.findIndex(user => userId === user.id);
    if(index > -1){
      newUsers.splice(index, 1);
      this.setState({users: newUsers});
    }
  }

  render() {
    return (
        <div>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{
            background: '#fff', padding: 24, margin: 0, minHeight: 280,
            }}
          >
          Content
          <h1 id='header'>User's Mock Data</h1>
            <div className="red">
                {this.state.users.map(user =>
                <Users
                    key={`user-${user.id}`}
                    id={user.id}
                    uname={user.name}
                    phone={user.phone}
                    delUser={this.delUserById}/>)}
              </div>
            </Content>
          </Layout>
      </div>
    );
  }
}

export default UserDashboard;
