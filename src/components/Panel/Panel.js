import React from 'react';
import PropTypes from 'prop-types';
import styles from './Panel.module.css';

/*Пример использования инлайн стилизации

const styles = {
  container: {
    width: 200,
    border: '2px solid red',
    backgroundColor: 'tomato',
  },
};

const Panel = ({ title, children }) => (
  <div style={styles.container}>
    {title && <h2>{title}</h2>}
    {children}
  </div>
);
*/

const Panel = ({ title, children }) => (
  <div className={styles.container}>
    {title && <h2>{title}</h2>}
    {children}
  </div>
);

Panel.defaultProps = {
  ttile: '',
  children: [],
};

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;
