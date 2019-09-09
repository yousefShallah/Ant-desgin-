import React, { Component } from 'react';
import { Tabs} from 'antd';

class TabsAnt extends Component {
    
    render() {
        const { TabPane } = Tabs;

        function callback(key) {
            console.log(key);
          }

        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Tab 1" key="1">
                        gContent of Tab Pane 1
                    </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default TabsAnt;