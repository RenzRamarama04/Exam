import React from 'react';

const RoundedButton = ({
  title,
  onClick,
  buttonType,
  color,
  fontColor,
  width,
  height,
  fontSize,
  position,
  right,
  borderRadius,
  minWidth,
  boxShadow,
  className,
  disabled,
  fontFamily,
  fontWeight
}) => {
  return (
    <button
      disabled={disabled}
      className={className}
      onClick={onClick}
      type={buttonType || 'button'}
      style={{
        height: height || '35px',
        width: width || '100%',
        backgroundColor: color || 'skyblue',
        justifyContent: 'center',
        borderRadius: borderRadius || 4,
        position,
        right,
        minWidth,
        outline: 'none',
        boxShadow: boxShadow,
      }}
    >
      <p
        style={{
          color: fontColor || 'black',
          fontSize: fontSize || '0.8rem',
          margin: '0px',
          fontFamily: fontFamily || "GothamBold",
          fontWeight: fontWeight || 'normal',
        }}
      >
        {title}
      </p>
    </button>
  );
};

export default RoundedButton;
