/**
 * Created by AC on 2017/7/16.
 */
import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
export default class MobileIndex extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader/>
                <MobileFooter/>
            </div>
        );
    }
}