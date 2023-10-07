import { Row, Col } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartners } from  './partnersSlice.js';
import { useSelector } from 'react-redux';
import Loading from '../../app/components/Loading';
import Error from '../../app/components/Error';


const PartnersList = () => {
    const partners = useSelector(selectAllPartners);
    const isLoading = useSelector((state) => state.partners.isLoading);
    const errMsg = useSelector((state) => state.partners.errMsg);
    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (
        <Col className='mt-4'>
            <Row>
                {partners.map((partner) => {
                    return (
                        <div className='d-flex mb-5' key={partner.id}>
                            <Partner partner={partner} />
                        </div>
                    );
                })}
            </Row>
        </Col>
    );
}

export default PartnersList
