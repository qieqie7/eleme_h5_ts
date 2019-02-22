import * as React from 'react';

import * as styles from './index.styl';

export default class Modal extends React.PureComponent {
  public getModalContent(): React.ReactNode {
    const content = this.getCenterDialog(this.props.children);
    return content;
  }

  public getCenterDialog(dom: React.ReactNode): React.ReactNode {
    return (
      <div className={styles.centerDialog}>{dom}</div>
    )
  }

  // public getRightDialog(dom: React.ReactNode) {

  // }

  public render() {
    // const { position } = this.props;
    return (
      <div className={styles.modalWrap}>{this.getModalContent()}</div>
    )
  }
}