/**
 * Created by AC on 2017/7/16.
 */
import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
export default class PCIndex extends React.Component {
    render() {
        return(
            <div>
                <PCHeader/>
                <PCFooter/>
            </div>
        );
    }
}