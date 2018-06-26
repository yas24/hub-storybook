import React, { Component } from 'react';
import PropTypes from 'prop-types';

//just for testing, not serious
const styles = {
    base: {
        backgroundColor: '#38ACC9',
        appearance: "none",
        WebkitAppearance: "none",
        backfaceVisibility: "hidden",
        border: 0,
        borderRadius: 0,
        cursor: "pointer",
        display: "inline-block",
        fontWeight: 600,
        color: '#FFFFFF',
        lineHeight: 1,
        padding:"10px",
        textAlign: "center",
        textDecoration: "none",
        letterSpacing: "0.6px",
        textTransform: "uppercase",
        verticalAlign: "middle",
        whiteSpace: "nowrap"
    }
}

class Button extends Component {
    render() {
        const Element = this.props.href ? "a" : "Button";
        return (
            <Element
            className="button"
            onClick={this.props.onClick}
            href={this.props.href}
            style={styles.base}
            disabled={this.props.disabled}
        >
            {this.props.text}
        </Element>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button;