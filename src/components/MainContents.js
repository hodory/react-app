import React from 'react';
import { Col, Card, CardImg, CardText, CardBlock, CardTitle } from 'reactstrap';

class MainContent extends React.Component {
    render() {
        return (
            <Col xs="6" sm="4">
                <Card>
                    <CardImg top width="100%" src={this.props.thumb_url ? this.props.thumb_url : 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180'} alt="Card image cap" />
                    <CardBlock>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardText>{this.props.addr}</CardText>
                        <CardText>
                            <small className="text-muted">{this.props.reg_date}</small>
                        </CardText>
                    </CardBlock>
                </Card>
            </Col>
        );
    }
}
export default MainContent;