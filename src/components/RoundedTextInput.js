import React, { PureComponent } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MDBInput, MDBCol } from 'mdbreact';

class RoundedTextInput extends PureComponent {
  state = {
    showPassword: false,
  };

  onToggleShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    const { showPassword } = this.state;
    const {
      password,
      email,
      onChange,
      value,
      placeholder,
      disabled,
      label,
      style,
      className,
      id,
      name,
    } = this.props;
    return (
      <MDBCol className="d-flex position-relative w-100 px-0">
        <input
          id={id}
          name={name}
          className={className}
          style={style}
          label={label}
          value={value}
          disabled={disabled}
          placeholder={placeholder || ''}
          onChange={e => onChange(e.target.value)}
          type={
            !password || showPassword ? (email ? 'email' : 'text') : 'password'
          }
        />
        {password && (
          <button
            type="button"
            className=""
            onClick={this.onToggleShowPassword}
            style={styles.eyeIcon}
          >
            {showPassword ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
          </button>
        )}
      </MDBCol>
    );
  }
}

const styles = {
  eyeIcon: {
    backgroundColor: 'transparent',
    border: 'none',
    position: 'absolute',
    right: '5px',
  },
};

export default RoundedTextInput;
