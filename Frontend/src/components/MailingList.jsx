import React from 'react';


class MailingList extends React.Component {

    render(){

      return (
        <>      
                <tr>
                    <td scope="col">{this.props.ind}</td>
                    <td scope="col">{this.props.name}</td>
                    <td scope="col">{this.props.email}</td>
                </tr>


    </>
  );
      }
}

export default MailingList;