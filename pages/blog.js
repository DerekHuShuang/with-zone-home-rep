import React from 'react'
import { Header, Footer, requestHelper } from "@aaxis/share-components";

const wcsResourceConfig = { footerResourceId: '123213123123'}

export default class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            footerContent: ''
        }
    }

    render() {
        return (
            <div>
                <Header />
                <p>This is blog page in <b>blog project</b>.</p>
                <div><a href='/'>Go Back</a></div>
                <Footer content={this.state.footerContent}/>
            </div>
        )
    }

    componentDidMount() {
        const footerReq =  requestHelper.fetch({
            uri: `/static/${wcsResourceConfig.footerResourceId}.html`,
            method: 'get',
        }).then((result) => {
            this.setState({
                footerContent: result.data
            })
        });
    }
}

