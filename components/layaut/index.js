import React, { Component } from 'react';
import Head from 'next/head';
import Header from './header/index';
import Footer from './footer/index';

class appLayaut extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title> {this.props.title} </title>
                    <meta charSet="UTF-8"/>
                    <meta name="description" content="" />
                    <meta property="og:type" content="website" />
                    <meta name="og:title" property="og:title" content="" />
                    <meta name="og:description" property="og:description" content="" />
                    <meta property="og:site_name" content="" />
                    <meta property="og:url" content="" />  
                    <meta name="twitter:card" content="summary" /> 
                    <meta name="twitter:title" content="" />
                    <meta name="twitter:description" content="" />
                    <meta name="twitter:site" content="" />
                    <meta name="twitter:creator" content="" />
                    <link rel="icon" type="image/png" href="/images/favicon.ico" />
                    <link rel="apple-touch-icon" href="/images/favicon.ico" />
                    <meta property="og:image" content="" />  
                    <meta name="twitter:image" content="" />   
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <link rel="stylesheet" type="text/css" href="/css/reset.css" />
                    <link rel="stylesheet" type="text/css" href="/css/layaut.css" />
                    <link rel="stylesheet" type="text/css" href="/css/home.css" />
                    <link rel="stylesheet" type="text/css" href="/css/doogsk.css" />
                    <link rel="stylesheet" type="text/css" href="/css/services.css" />
                    <link rel="stylesheet" type="text/css" href="/css/planes.css" />
                    <link rel="stylesheet" type="text/css" href="/css/contact.css" />
                </Head>
                <Header actived={this.props.actived}>
                    { this.props.sliderShow }
                </Header>
                { this.props.children }
                <Footer />  
            </div>
        )
    }
}

export default appLayaut;