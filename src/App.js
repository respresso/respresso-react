import React, { Component } from 'react';
import main from './respresso/images/main.svg';
import logoText from './respresso/images/logo-text.svg';
import github from './respresso/images/github.png';
import './App.scss';
import { FormattedHTMLMessage } from 'react-intl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="hero"></div>

        <div className="container pt-3">
          <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between">
              <div className="col-md-2 col-sm-2 pt-1">
                <a className="text-muted logo" href="#">
                  <img className="img-fluid" src={logoText} alt="main logo"/>
                </a>
              </div>
              <div className="col-md-4 col-sm-6 d-flex justify-content-around align-self-end">
                <a className="blog-header-logo color-white color-green-hover font-weight-bold"
                   href="#"><FormattedHTMLMessage id="header.what" defaultMessage="key not found" /></a>
                <a className="blog-header-logo color-white color-green-hover font-weight-bold"
                   href="#"><FormattedHTMLMessage id="header.how" defaultMessage="key not found" /></a>
                <a className="blog-header-logo color-white color-green-hover font-weight-bold"
                   href="#"><FormattedHTMLMessage id="header.who" defaultMessage="key not found" /></a>
              </div>
              <div className="col-md-6 col-sm-4 d-flex justify-content-end align-items-center">
                <a className="text-muted github" href="https://github.com/respresso">
                  <img className="img-fluid" src={github} alt="github logo"/>
                </a>
              </div>
            </div>
          </header>
        </div>

        <main role="main" className="container">
          <div className="row">
            <div className="col-md-6 p-5 mt-5">
              <img className="img-fluid main-image" src={main} alt="main image"/>
            </div>

            <div className="col-md-6 p-md-5 p-sm-3 mt-md-5 mt-sm-0 d-flex flex-column">
              <h1 className=" w-100 align-self-center m-3 pb-3 text-size-big font-weight-bold big-text"><FormattedHTMLMessage id="main.promo_message" defaultMessage="key not found" /></h1>
              <div className="w-100 ">
                <button
                    className="btn btn-white color-green rounded-lg px-5 py-2 shadow border-0 text-size-bigger font-weight-bold cta"><FormattedHTMLMessage id="main.check_it" defaultMessage="key not found" />
                </button>
              </div>
            </div>
          </div>

          <div className="d-flex mt-5 justify-content-center">
            <div
                className="col-lg-6 col-md-8 col-sm-12 py-2 px-3 d-flex justify-content-center rounded-lg shadow check-demo-container">
              <div className="logo-image img-fluid w-px-50"></div>
              <div className="p-1 pl-3 align-self-center check-demo-text">
                <div className="font-weight-bold text-bigger text-size-bigger"><FormattedHTMLMessage id="demo.title" defaultMessage="key not found" /></div>
                <div><FormattedHTMLMessage id="demo.info" defaultMessage="key not found" /></div>
              </div>
              <div className="p-1 align-self-center ">
                <button
                    className="btn rounded-lg px-4 font-weight-bold border-0 join-button"><FormattedHTMLMessage id="demo.join" defaultMessage="key not found" /></button>
              </div>
            </div>
          </div>
        </main>

      </div>
    );
  }
}

export default App;
