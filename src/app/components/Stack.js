import PropTypes from 'prop-types';

function Stack({
    children, spacing = 2, direction = 'row', wrap = false
}) {
    const style = {
        display: 'flex',
        gap: `${spacing * 0.25}rem`,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        flexDirection: direction
    };

    return <div style={style}>{children}</div>;
}

Stack.propTypes = {
    children: PropTypes.node,
    spacing: PropTypes.number,
    wrap: PropTypes.bool,
    direction: PropTypes.oneOf(['row', 'column'])
};

Stack.defaultProps = {
    children: undefined,
    spacing: 2,
    direction: 'row',
    wrap: false
};

export default Stack;
