import React, { PureComponent } from 'react';

class RoundedCheckbox extends PureComponent {
  render() {
    const { onClick, clicked } = this.props;
    return (
      <div
        onClick={() => onClick()}
        className="mr-2"
        style={styles.container}
      >
        <label
          className="mb-0"
          style={{
            display: 'block',
            width: '11px',
            height: '11px',
            borderRadius: '7px',
            transition: 'all .5s ease',
            cursor: 'pointer',
            position: 'absolute',
            bottom: '2px',
            left: '2px',
            zIndex: '1',
            background: clicked ? '#26ca28' : 'none',
          }}
        ></label>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '15px',
    height: '15px',
    background: '#ddd',
    borderRadius: '10px',
    position: 'relative',
    boxshadow: '0px 1px 3px rgba(0,0,0,0.5)',
  }
}

export default RoundedCheckbox;