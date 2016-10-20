import { render } from 'react-dom';
import React, { Component } from 'react';
import Dropdown from '../../src';

class Demo extends Component {
  static propTypes = {
  }
  static defaultProps = {
  }

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }


  render() {
    const menu = (
      <div>
        自行填充内容
      </div>
    );
    return (
      <div>
        <Dropdown
          menu={menu}
          trigger={['click']}
        >
          <button>显示下拉菜单</button>
        </Dropdown>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
