import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './page';
import visuals from './components/visuals';
import { AppProps } from 'next/app';

function Apps({ Component, pageProps }: AppProps) {
  return (
    <div>
        <Router>
        <Route exact path="/" component={Home} />
        <Route path="/visuals" component={visuals} />
        </Router>
    </div>
  )
}
export default Apps;