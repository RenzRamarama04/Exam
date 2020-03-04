import React, { PureComponent } from 'react';

class SelectListGroup extends PureComponent {
  render() {
    const { onChange, options, initialValue, disabled } = this.props;

    const selectOptions = options.map((option, index) => (
      <option
        key={index}
        disabled={disabled}
        selected={initialValue === option.value ? true : false}
        value={option.value}
        style={styles.option}
      >
        {option.label}
      </option>
    ));

    return (
      <select
        style={styles.select}
        className="browser-default language-select"
        onChange={text => {
          onChange(text.target.value);
        }}
      >
        {selectOptions}
      </select>
    );
  }
}

export default SelectListGroup;

const styles = {
  select: {
    fontSize: '.8rem',
    height: '30px',
    width: '100%',
    background: 'white',
  },
  option: {
    fontSize: '1rem'
  }
}