import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import './style/index.less';

export default class Dropdown extends Component {
  static propTypes = {
    trigger: PropTypes.array,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    prefixCls: PropTypes.string,
    menu: PropTypes.element.isRequired,
    children: PropTypes.element.isRequired,
  }
  static defaultProps = {
    trigger: ['click'],
    prefixCls: 'ks-dropdown',
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: false,
      isInit: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.renderToBody = this.renderToBody.bind(this);
  }

  componentDidMount() {
    this.popup = document.createElement('div');
  }

  componentDidUpdate() {
    ReactDOM.render(this.renderToBody(), this.popup);
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.popup);
    document.body.removeChild(this.popup);
  }

  toggleMenu(e) {
    const { visible, isInit } = this.state;
    // 初始化下拉列表
    if (!isInit) {
      document.body.appendChild(this.popup);
      this.setState({
        isInit: true,
        menuLeft: e.target.offsetLeft,
        menuTop: e.target.offsetTop + e.target.clientHeight + 5,
      });
    }
    if (!visible) {
      // 菜单显示时执行
      const onShow = this.props.onShow;
      if (onShow) {
        onShow();
      }
    } else {
      const onHide = this.props.onHide;
      if (onHide) {
        onHide();
      }
    }
    this.setState({
      visible: !this.state.visible,
    });
  }

  renderToBody() {
    const { menu, prefixCls } = this.props;
    const { menuLeft, menuTop } = this.state;
    return (
      <div
        style={{
          display: this.state.visible ? 'block' : 'none',
          left: `${menuLeft}px`,
          top: `${menuTop}px`,
        }}
        className={`${prefixCls}-menu`}
      >
        {menu}
      </div>
    );
  }

  render() {
    const { children, trigger, prefixCls } = this.props;
    const mouseEvents = {
      onClick: trigger.indexOf('click') !== -1 ? this.toggleMenu : null,
      onMouseEnter: trigger.indexOf('hover') !== -1 ? this.toggleMenu : null,
      onMouseLeave: trigger.indexOf('hover') !== -1 ? this.toggleMenu : null,
    };
    return (
      <div
        className={prefixCls}
      >
        <div
          className={`${prefixCls}-trigger`}
          {...mouseEvents}
        >
          {children}
        </div>
      </div>
    );
  }
}
