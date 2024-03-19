import PropTypes from 'prop-types';

const Link = ({route}) => {

    return (
       <li className="p-4 cursor-pointer hover:bg-white hover:text-orange-500 hover:rounded-xl font-semibold">{route.name}</li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;