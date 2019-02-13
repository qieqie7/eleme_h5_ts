import * as React from 'react';

import * as styles from './Header.styl';

export default class Header extends React.PureComponent {
  public render() {
    return (
      <header className={styles.header}>
        <nav className={styles.logoBackground}>1</nav>
        <div className={styles.storeInfo}>
          <h2 className={styles.title}>
            正新鸡排·汉堡烤串(上海胶州路店)
          </h2>

          <p className={styles.bulletin}>公告：正新鸡排重磅来袭！鸡排搭配冰凉果汁！如果有不到位的地方請聯繫150 3751 0210請高抬貴手不要輕易給差評！給我們一個改過的機會！我們都宗旨是用心做好每一份外卖</p>
        </div>
      </header>
    )
  }
}