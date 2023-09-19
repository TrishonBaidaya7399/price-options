import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div>
            <li className='mr-10'><a href={route.path}><span className='border-b-2 border-white text-xl hover:border-blue-600 hover:text-blue-600 font-bold hover:font-bold ease-in duration-200'>{route.name}</span></a></li>        
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object,

};

export default Link;