import * as React from 'react';

import logo from '../../asset/logo.webp'; // logo
import * as styles from './index.styl'; // styl css文件
// tslint:disable
interface Ia {
  template: string;
  value: string | number;
} 

const a: Ia[] = [
  {
    template: '评价${value}',
    value: 4.8,
  },
  {
    template: '月售${value}单',
    value: 3238,
  },
  {
    template: '蜂鸟专送约${value}分钟',
    value: 28,
  },
]

export default class Header extends React.PureComponent {
  public render() {
    return (
      <header 
        // className={styles.header}
      >
        <nav className={styles.logoBackground}>
          <div className={styles.logoWrap}>
            <img className={styles.logo} src={logo} />
          </div>
        </nav>
        <div className={styles.storeInfo}>
          <div className={styles.titleWrap}>
            <h2 className={styles.title}>
              正新鸡排·汉堡烤串(上海胶州路店)
            </h2>
            <div className={styles.subTitle}>
              {
                a.map(el => {
                  const str = el.template.replace(/\${.+}/g, searchStr => el[searchStr.slice(2, -1)]);
                  return (<span key={str}>{str}</span>)
                })
              }
            </div>
          </div>
      

          <p className={styles.bulletin}>公告：正新鸡排重磅来袭！鸡排搭配冰凉果汁！如果有不到位的地方請聯繫150 3751 0210請高抬貴手不要輕易給差評！給我們一個改過的機會！我們都宗旨是用心做好每一份外卖</p>
        </div>

      </header>
    )
  }
}