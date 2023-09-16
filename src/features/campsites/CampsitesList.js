import {Col,Row} from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice';

const CampsitesList = () => {
  const campsite = selectAllCampsites();
  return (
    <Row className='ms-auto'>
        {campsite.map((campsite) => {
                        return (
                            <Col md='5' className='m-4' key={campsite.id}>
                                <CampsiteCard campsite={campsite} />
                            </Col>
                        );
                    })}
    </Row>
  )
}

export default CampsitesList
