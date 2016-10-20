# ks-dropdown

下拉菜单组件

## Usage

```js
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
```

## Api

<table>
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>prefixCls</td>
          <td>String</td>
          <td>ks-dropdown</td>
          <td>组件的className，若有冲突可自行设置</td>
      </tr>
      <tr>
          <td>menu</td>
          <td>element</td>
          <td></td>
          <td>切换的下拉菜单， 会自动定位在children下面</td>
      </tr>
      <tr>
          <td>children</td>
          <td>element</td>
          <td></td>
          <td>触发的开关</td>
      </tr>
      <tr>
          <td>onShow</td>
          <td>func</td>
          <td></td>
          <td>显示时执行的回调</td>
      </tr>
      <tr>
          <td>children</td>
          <td>element</td>
          <td></td>
          <td>隐藏时执行的回调</td>
      </tr>
    </tbody>
</table>
