import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartners } from '../partners/partnersSlice';

const DisplayList = () => {
    const items = [selectFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedPartners()];

    

    return (
        item && (
            <Col md className='m-1' key={idx}>
                <AnimatedDisplayCard item={item} />
            </Col>
        )
    );


};

export default DisplayList;
