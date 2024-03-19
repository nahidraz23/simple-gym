import PropTypes from 'prop-types';

const Link = ({route}) => {

    return (
       <li className="mr-10">{route.name}</li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;