import React from 'react';

class MainContent extends React.Component {
    render() {
        return (
            <li className="main-item">
                <figure className="main-item-figure">
                    <img src={this.props.thumb_url ? this.props.thumb_url : 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180'} alt={this.props.title} />
                </figure>
                <div>
                    <div>{this.props.title}</div>
                    <div>{this.props.addr}</div>
                    <div>
                        <small className="text-muted">{this.props.reg_date}</small>
                    </div>
                </div>
            </li>
        );
    }
}
export default MainContent;